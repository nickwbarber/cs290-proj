const home = require('./home');
const about = require('./about');
const work = require('./work');
const contact = require('./contact');

module.exports = {
    home: home.main,
    about: about.main,
    work: work.main,
    contact: contact.main,
}
