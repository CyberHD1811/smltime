const SMLTIME = require('./index.js');

const smltime = SMLTIME.smltime;
const leapYear = SMLTIME.leapyear;

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
const leapyear1 = leapYear(1);
const leapyear2 = leapYear(4);
const leapyear3 = leapYear(1900);
const leapyear4 = leapYear(2000);

console.log("smltime:", date, date2);
console.log("leapyear:", leapyear1, leapyear2, leapyear3, leapyear4);