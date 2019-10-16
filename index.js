const express = require("express");
const app = express();

app.get("/healt", (erq, res) => {
  res.send("Hola estoy vivo...!");
});

app.get("/info", (req, res) => {
  res.send("Soy el proyecto node-server");
});

app.get("/json", (req, res) => {
  res.json({
    app: "node-server",
    version: "1.0.0"
  });
});

app.get('/github', (req, res) => {
    res.send('Soy un commit a github');
})

app.get("/commit-augusto", (req, res) => {
  res.json({
    mensaje: "hola Twitch"
  });
});

app.listen(8000, () => console.log("La aplicación esta viva...."));
