const express = require("express")
const cors = require("cors")

const eventRoutes = require("./src/routes/eventRoutes")

const app = express();

app.use(cors())
app.use(express.json())

app.get("/", (req, res) => {
    res.send("api mistsamba");
});

app.use("/eventos", eventRoutes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor on: http://localhost:3000");
});