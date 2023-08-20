/* pakages */
const express = require("express");
const config = require("config"); 

/* app configuration */
const app = express();
const port = config.get("server-port");

/**Methods */
app.get("/", (req, res, next) =>{
    res.send("Welcome to Mascotas.");
});

const controller = require("./controller/logic/mascotas.controller");

app.get("/mascotas", (req, res, next) =>{
    controller.getAll(req, res, next);
});

app.listen(port, () => {
console.log("Server is running...");
});