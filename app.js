const express = require('express');
const path = require('path');
const app = express();

// Подключаем папку со стилями
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ru">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/style.css">
        <title>Minimal Node</title>
    </head>
    <body>
        <div class="container">
            <h1>Привет.</h1>
            <p>Это твой новый сайт на Node.js.</p>
            <a href="#" class="btn">Узнать больше</a>
        </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => console.log('http://localhost:3000'));
