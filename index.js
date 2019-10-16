const express = require('express');
const app = express();

app.get('/', (erq, res) => {
    res.send('Hola Twitch...!');
});

app.listen(3000, () => console.log('La aplicación esta viva....'));