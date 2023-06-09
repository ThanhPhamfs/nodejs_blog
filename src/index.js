const { engine } = require('express-handlebars');
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const route = require('./routes');

const app = express();
const port = 3000;

// Use static file
app.use(express.static(path.join(__dirname, 'public')));

// Using middleware to receive data body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTTP Logger
app.use(morgan('common'));

// Template engine
app.engine('hbs', engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
// Route
route(app);

app.listen(port, () => {
    console.log(`Blog app listening on port ${port}`);
});
