// imports
const log = require('./log').log;
log('./log loaded successfully');
const express = require('express');
log('express loaded successfully');
const handlebars = require('express-handlebars').create({defaultLayout: 'main'});
log('express-handlebars loaded successfully');
const bodyParser = require('body-parser');
log('body-parser loaded successfully');


// setup app
const app = express();
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 3888);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// HANDLERS MUST GO HERE
// will be imported from impor


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
