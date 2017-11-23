const express = require('express');
const hbs = require('hbs');



const port = process.env.PORT || 3000; 
const app = express();

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('toUpper', (name) => name.toUpperCase());

app.use('/static', express.static(__dirname + '/public'));

app.get('/about', (req, res) => {
    res.render('about', {
        name: 'Sanok'
    });
});

app.listen(port, 
    () => console.log(`Server is up on port ${port}`));
