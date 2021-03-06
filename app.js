const express = require('express');
const app = express();
const books = require('./books');
const users = require('./users');
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get('/', (req, res) => {
    // res.render('index');
    res.send('<h2>COCИ COCK!!!!!!</h2>');
});

// app.post('/signUp', (req, res) => {
//     users.db.push(req.body);
//     res.render('index');
//     console.log(req.body);
// });

// app.post('/logIn', (req, res) => {
//     console.log(users.db);
//     if (users.find(req.body.login, req.body.password)) {
//         res.render('app', {
//             books: books
//         });
//     } else {
//         res.render('err')
//     }
// });

// app.get('/books', function(req, res) {
//     res.json(books);
// });

app.listen(process.env.PORT || 8080);