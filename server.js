const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require("./routes/api")
app.use("/api", router)
app.get("/notes", async (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
})
app.use(express.static(path.join(__dirname, 'public')))
app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});