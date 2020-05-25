// local imports
const log = require('./log').log;
const pages = require('./pages');

// other imports
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const bodyParser = require('body-parser');


// setup app
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// path handlers
app.get('/', pages.home);
app.get('/about', pages.about);
app.get('/download', pages.download);
app.get('/recommend', pages.recommend);
app.get('/success', pages.recommendSuccess);
app.post('/recommend/submit', pages.recommendSubmit);


// default handler
app.use((req, res) => {
    res.status(400);
    res.send('404, page not found');
});


// error handler
app.use((err, req, res, next) => {
    res.status(500);
    res.send('500, server error');
    console.error(err.stack);
});


// start app
app.listen(app.get('port'), () =>  {
    log(`server started on port ${app.get('port')}`);
});
