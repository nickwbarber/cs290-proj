module.exports = { main };

const log = require('../log').log;


function main(req, res) {
    res.status(200);
    log(`/success visited`);
    res.render('pages/recommendSuccess');
}
