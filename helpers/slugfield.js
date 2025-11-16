var slugify = require('slugify')

const options = {
    repllacement: '-', 
    remove: undefined,
    lower : true,
    strict: true,
    locale: 'tr',
    trim: true
}

module.exports = function slugField(str) {
    return slugify(str, options);
}