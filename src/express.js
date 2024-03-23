const express = require("express");
const cors = require("cors");

const app = express(); 
const port = 3000;

app.use(express.json()); 
app.use(cors());

const normalizedPath = require("path").join(__dirname, "controllers");

require("fs").readdirSync(normalizedPath).forEach(function(file) {
    app.use("/",require("./controllers/" + file));
});

app.listen(port, () => console.log(`rodando na porta ${port}`));