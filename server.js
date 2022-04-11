const express = require("express")
const path = require("path")
const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const router = require("./routes/api/api")
app.use("/api", router)

app.use(express.static(path.join(__dirname, 'client/build')))

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
});