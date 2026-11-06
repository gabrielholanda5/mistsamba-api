const express = require("express");
const eventRoutes = require("./src/routes/eventRoutes")

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("api mistsamba");
});

app.use("/eventos", eventRoutes)

app.listen(3000, () => {
    console.log("Servidor on: http://localhost:3000");
});