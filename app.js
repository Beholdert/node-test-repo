const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000; 
const app = express();

app.use('/static', express.static(__dirname + '/public'));

app.use((req, res, next) => {
    console.log(`${req.url}`);
    res.end();
});

app.listen(port, () => console.log(`Server is up on port ${port}`));
