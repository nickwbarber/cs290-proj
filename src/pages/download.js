module.exports = { main };

const log = require('../log').log;


function main(req, res) {
    res.status(200);
    log(`/download visited`);
    res.render('pages/download');
}
