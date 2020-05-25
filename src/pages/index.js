const home = require('./home');
const about = require('./about');
const download = require('./download');
const recommend = require('./recommend');
const recommendSuccess = require('./recommendSuccess');
const recommendSubmit = require('./recommendSubmit');

module.exports = {
    home: home.main,
    about: about.main,
    download: download.main,
    recommend: recommend.main,
    recommendSuccess: recommendSuccess.main,
    recommendSubmit: recommendSubmit.main,
}
