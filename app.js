const express = require("express");


const app = express();

app.get("/", (req, res) => {
    res.send("Olá mundo");
});


app.listen(3000, () => {
    console.log("Servidor on: http://localhost:3000");
});