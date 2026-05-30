const express = require("express");
const notesmodel = require("./db/model/notes")



const app = express()
app.use(express.json())

app.post("/notes", async (req, res) => {

    await notesmodel.create({
        title: req.body.title,
        description: req.body.description
    })

    res.status(200).json({
        message: "notes created successfully "
    })
})


app.get("/notes", async (req, res) => {

    const notes = await notesmodel.find()

    res.status(200).json({
        message: "notes get successfully",
        notes: notes
    })
})


app.delete("/notes/:id", async (req, res) => {
    const id = req.params.id;
    await notesmodel.findOneAndDelete({
        _id: id
    })

    res.status(200).json({
        message: "note deleted seccessfully "
    })
})




app.patch("/notes/:id", async (req, res) => {
    const id = req.params.id
    const description = req.body.description
    await notesmodel.findOneAndUpdate({
        _id: id
    }, {
        description: description
    })

    res.status(200).json({
        message: "note updated successfully "
    })

})

module.exports = app