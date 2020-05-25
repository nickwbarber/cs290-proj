module.exports = { main };

const log = require('../log').log;


function main(req, res) {
    log(`message received: "${req.body.message}"`);
    res.redirect('/success');
    res.end();
}
