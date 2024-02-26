require("dotenv").config()
const port = process.env.PORT || 8080
const path = require("path")
const fs = require("fs")
const { app } = require("./app");
const { connectDB } = require("./db/MongoOperations.js")

const { Login } = require("./Auth/jwt.js")

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
  connectDB()
  //ensuring that the uploads folder exists
  if (!fs.existsSync(path.join(__dirname, "..", 'uploads')))
    fs.mkdirSync(path.join(__dirname, "..", 'uploads'));
})

app.post("/login", Login);


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