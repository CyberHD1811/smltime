const smltime = require('./index.js');

const Options = {
    language: 'EN',
    timezone: 'GMT'
};

const additionalOptions = {
    showDate: false,
    showDays: false,
    showMilliseconds: false,
    showTimezone: false,
    showLanguage: false,
    Month: 'numbers'
};

const additionalOptions2 = {
    showDate: true,
    showDays: true,
    showMilliseconds: true,
    showTimezone: true,
    showLanguage: true,
    Month: 'letters'
};

const date = smltime(Options, additionalOptions);
const date2 = smltime(Options, additionalOptions2);

console.log(date, date2);