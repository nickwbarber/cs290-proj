const home = require('./home');
const about = require('./about');
const download = require('./download');
const contact = require('./contact');

module.exports = {
    home: home.main,
    about: about.main,
    download: download.main,
    contact: contact.main,
}
