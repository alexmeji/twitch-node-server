const express = require('express');
const app = express();

app.get('/healt', (erq, res) => {
    res.send('Hola estoy vivo...!');
});

app.get('/info', (req, res) => {
    res.send('Soy el proyecto node-server');
})

app.listen(3000, () => console.log('La aplicación esta viva....'));