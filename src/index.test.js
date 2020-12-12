const smltime = require('./index.js');

const Options = {
    language: 'EN',
    timezone: 'GMT'
};

const additionalOptions = {
};

const date = smltime(Options, additionalOptions);

console.log(date);