const fs = require("fs")
const express = require("express")
const router = express.Router()

router.get("/notes", async (req, res) => {
    const notes = JSON.parse(fs.readFileSync("C:/Users/benja/Desktop/HW11/db/db.json"))
    res.json(notes)
})
router.post("/notes", async (req, res) => {
    const notes = JSON.parse(fs.readFileSync("C:/Users/benja/Desktop/HW11/db/db.json"))
    notes.push(req.body)
    fs.writeFileSync("C:/Users/benja/Desktop/HW11/db/db.json", JSON.stringify(notes))
    res.json(notes)
})
router.delete("/notes/:id", async (req, res) => {
    console.log(req.params.id)
    var notes = JSON.parse(fs.readFileSync("C:/Users/benja/Desktop/HW11/db/db.json"))
    notes = notes.filter(e => e.id !== req.params.id)
    fs.writeFileSync("C:/Users/benja/Desktop/HW11/db/db.json", JSON.stringify(notes))
    res.json(notes)
})

module.exports = router