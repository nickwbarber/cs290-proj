module.exports = { main };

const log = require('../log').log;


function main(req, res) {
    res.status(200);
    log(`/about visited`);
    res.render('pages/about');
}
