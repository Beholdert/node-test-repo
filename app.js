const express = require('express');
const hbs = require('hbs');

const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(`${req.url}`);
    res.end();
});

app.listen(8080);
