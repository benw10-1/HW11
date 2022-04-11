const fs = require("fs")
const path = require("path")
const express = require("express")
const router = express.Router()

router.get("/notes", async (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, "db/db.json")))
    res.json(notes)
})
router.post("/notes", async (req, res) => {
    const notes = JSON.parse(fs.readFileSync(path.join(__dirname, "db/db.json")))
    notes.push(req.body)
    fs.writeFileSync(path.join(__dirname, "db/db.json"), JSON.stringify(notes))
    res.json(notes)
})
router.delete("/notes/:id", async (req, res) => {
    console.log(req.params.id)
    var notes = JSON.parse(fs.readFileSync(path.join(__dirname, "db/db.json")))
    notes = notes.filter(e => e.id !== req.params.id)
    fs.writeFileSync(path.join(__dirname, "db/db.json"), JSON.stringify(notes))
    res.json(notes)
})

module.exports = router