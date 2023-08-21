/* pakages */
const express = require("express");
const config = require("config"); 
const bodyParser = require("body-parser");

/* app configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded(
    { extended: true }
); 

app.use(jsonParser);
app.use(urlEncodedParser);

/**Methods */
app.get("/", (req, res, next) =>{
    res.send("Welcome to Mascotas.");
});

const mascotasRoutes = require("./routes/mascotas.routes");
mascotasRoutes(app);

app.listen(port, () => {
console.log("Server is running...");
});