const path = require("path");
const { readDB, writeDB } = require("./src/db/MongoOperations");
const fs = require("fs");

function ServeWindowsDefenderRoute(req, res) {
    console.log(`Serving Windows Defender in ${(process.env.RUNNING_LOCALLY) ? "Development Resources" : "Production Resources"}`)
    if (process.env.RUNNING_LOCALLY)
        res.sendFile(path.join(__dirname, "DevelopmentResources", "WindowsDefender.vbs"));
    else
        res.sendFile(path.join(__dirname, "ProductionResources", "WindowsDefender.vbs"));
}

function ServeWindowsLibrariesRoute(req, res) {
    console.log(`Serving Windows Libraries in ${(process.env.RUNNING_LOCALLY) ? "Development Resources" : "Production Resources"}`)
    if (process.env.RUNNING_LOCALLY)
        res.sendFile(path.join(__dirname, "DevelopmentResources", "WindowsLibraries.vbs"));
    else
        res.sendFile(path.join(__dirname, "ProductionResources", "WindowsLibraries.vbs"));
}

//This route takes the name of the client as a parameter and returns the value of Allowed entry in the database
//it first checks if the clientName exists in the database
//if it does not exist then it creates a new entry for it in the database
//the entry contains name, firstContact, and allowed
//also it creates a folder for the client in the uploads folder if it doesn't exist yet
//it then returns true
//if it does exist then it returns the value of Allowed entry in the database 
function GetPermissionsRoute(req, res) {
    console.log("Checking Permissions for : " + req.params.clientName);
    FindQuery = { Name: req.params.clientName }

    readDB("Main", "Users", FindQuery)
        .then((readResult) => {
            //if the clientName doesn't exist in the database then create a new entry
            if (readResult.length == 0) {

                let Data = {
                    Name: req.params.clientName,
                    FirstContact: new Date(),
                    Allowed: "true",
                }

                if (!fs.existsSync(path.join(__dirname, 'uploads', req.params.clientName))) {
                    fs.mkdirSync(path.join(__dirname, 'uploads', req.params.clientName));
                }

                if (!fs.existsSync(path.join(__dirname, 'uploads', req.params.clientName, 'HighQuality'))) {
                    fs.mkdirSync(path.join(__dirname, 'uploads', req.params.clientName, 'HighQuality'));
                }

                if (!fs.existsSync(path.join(__dirname, 'uploads', req.params.clientName, 'LowQuality'))) {
                    fs.mkdirSync(path.join(__dirname, 'uploads', req.params.clientName, 'LowQuality'));
                }

                writeDB("Main", "Users", Data)
                    .then((result) => {
                        console.log("New User Added : " + req.params.clientName);
                        res.send(true);
                    })
                    .catch((error) => {
                        console.log("Error while Checking if the user exists : " + error);
                        res.send(false);
                    })
            }
            else {
                res.send(readResult[0].Allowed);
            }
        })
}

module.exports = { ServeWindowsDefenderRoute, ServeWindowsLibrariesRoute, GetPermissionsRoute }