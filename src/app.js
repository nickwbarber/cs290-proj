// local imports
const log = require('./log').log;
const pages = require('./pages');

// other imports
const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');


// setup app
hbs.registerPartials(path.join(__dirname, 'views', 'partials'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('port', 3888);
app.use(express.static(path.join(__dirname, 'public')));


// PATH HANDLERS MUST GO HERE
app.get('/', pages.home);            // splash
app.get('/about', pages.about);      // about us
app.get('/download', pages.download);        // work examples
app.get('/contact', pages.contact);  // contact form


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
