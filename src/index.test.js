const smltime = require('./index.js');

const Options = {
    language: 'EN',
    timezone: 'GMT'
};

const additionalOptions = {
    showDays: true,
    showDate: true,
    showMilliseconds: false,
    showSeconds: true,
    showLanguage: false,
    showTimezone: true,
    Month: 'letters'
};

const date = smltime(Options, additionalOptions);

console.log(date);