module.exports = (Options = {}, additionalOptions = {}) => {

    const date = new Date();
    
    const UTCDays = date.getUTCDay();
    const UTCDate = date.getUTCDate();
    const UTCHours = date.getUTCHours();
    const UTCMilliseconds = date.getUTCMilliseconds();
    const UTCMinutes = date.getUTCMinutes();
    const UTCMonth = date.getUTCMonth();
    const UTCSeconds = date.getUTCSeconds();
    const UTCFullYear = date.getUTCFullYear();
    
    let langPath;

    let finalDate = '';
    let finalHours = '';
    let finalLanguage = '';
    let finalMilliseconds = '';
    let finalMonth = '';
    let finalSeconds = '';
    let finalTimezone = '';
    let finalWeekday = '';
    let finalWeekdate = '';
    let finalYear = '';
    let standartTime = '';

    let currentMax = '';
    let fDay = '';
    let fMonth = '';
    let lastMax = '';
    let leapYear = false;
    let preDate = '';
    let preDay = '';
    let preHours = '';
    let preMonth = '';
    let weekday = '';

    if (!additionalOptions.showDate && additionalOptions.showDate) additionalOptions.showDate = false;
    if (!additionalOptions.showDays && additionalOptions.showDays) additionalOptions.showDays = false;
    if (!additionalOptions.showMilliseconds && additionalOptions.showMilliseconds) additionalOptions.showMilliseconds = false;
    if (!additionalOptions.showLanguage && additionalOptions.showLanguage) additionalOptions.showLanguage = false;
    if (!additionalOptions.showSeconds && additionalOptions.showSeconds) additionalOptions.showSeconds = true;
    if (!additionalOptions.showTimezone && additionalOptions.showTimezone) additionalOptions.showTimezone = false;
    if (!additionalOptions.Month === 'numbers' && !additionalOptions.Month === 'letters') additionalOptions.Month = 'numbers';

    switch (Options.language) {
        case 'DE':
            langPath = require('./lang/DE/de.json');
            break;
        default:
            langPath = require('./lang/EN/en.json');
            break;
    };

    switch (Options.timezone) {
        case 'LINT':
            preHours = UTCHours + 14;
            break;
        case 'NZDT':
            preHours = UTCHours + 13;
            break;
        case 'ANAT':
            preHours = UTCHours + 12;
            break;
        case 'AEDT':
            preHours = UTCHours + 11;
            break;
        case 'AEST':
            preHours = UTCHours + 10;
            break;
        case 'JST':
            preHours = UTCHours + 9;
            break;
        case 'CST':
            preHours = UTCHours + 8;
            break;
        case 'WIB':
            preHours = UTCHours + 7;
            break;
        case 'BST':
            preHours = UTCHours + 6;
            break;
        case 'UZT':
            preHours = UTCHours + 5;
            break;
        case 'GST':
            preHours = UTCHours + 4;
            break;
        case 'MSK':
            preHours = UTCHours + 3;
            break;
        case 'OEZ':
            preHours = UTCHours + 2;
            break;
        case 'MEZ':
            preHours = UTCHours + 1;
            break;
        case 'GMT':
            preHours = UTCHours;
            break;
        case 'CVT':
            preHours = UTCHours - 1;
            break;
        case 'GST':
            preHours = UTCHours - 2;
            break;
        case 'ART':
            preHours = UTCHours - 3;
            break;
        case 'VET':
            preHours = UTCHours - 4;
            break;
        case 'EST':
            preHours = UTCHours - 5;
            break;
        case 'CST':
            preHours = UTCHours - 6;
            break;
        case 'MST':
            preHours = UTCHours - 7;
            break;
        case 'PST':
            preHours = UTCHours - 8;
            break;
        case 'AKST':
            preHours = UTCHours - 9;
            break;
        case 'HST':
            preHours = UTCHours - 10;
            break;
        case 'NUT':
            preHours = UTCHours - 11;
            break;
        case 'AoE':
            preHours = UTCHours - 12;
            break;
        default:
            preHours = UTCHours;
            break;
    };

    if (UTCFullYear % 4 === 0) {
        if (UTCFullYear % 100 !== 0) leapYear = true;
        else if (UTCFullYear % 400 === 0) leapYear = true;
    };

    if (preHours > 23) {
        if (UTCMonth === 1) {
            if (leapYear) currentMax = langPath.months[1].self.leapyear;
            else currentMax = langPath.months[1].self.default
        }
        else currentMax = langPath.months[UTCMonth].self;

        finalHours = preHours - 24;
        preDay = UTCDays + 1;
        preDate = UTCDate + 1;

        if (preDay > 6) fDay = preDay - 7;
        else fDay = preDay;

        if (preDate > currentMax) {
            preMonth = UTCMonth + 1;
            finalWeekdate = 1;
            if (preMonth > 11) {
                fMonth = 0;
                finalYear = UTCFullYear + 1;
            }
            else {
                fMonth = preMonth;
                finalYear = UTCFullYear;
            };
        }
        else {
            finalWeekdate = preDate;
            fMonth = UTCMonth;
            finalYear = UTCFullYear;
        };
    }
    else if (preHours < 0) {
        if (UTCMonth === 2) {
            if (leapYear) lastMax = langPath.months[1].self.leapyear;
            else lastMax = langPath.months[1].self.default;
        }
        else lastMax = langPath.months[UTCMonth].self;

        finalHours = preHours + 24;
        preDay = UTCDays - 1;
        preDate = UTCDate - 1;

        if (preDay < 0) fDay = preDay + 7;
        else fDay = preDay;

        if (preDate < 1) {
            preMonth = UTCMonth - 1;
            finalWeekdate = lastMax;
            if (preMonth < 0) {
                fMonth = 11;
                finalYear = UTCFullYear - 1;
            }
            else {
                fMonth = preMonth;
                finalYear = UTCFullYear;
            };
        }
        else {
            finalWeekdate = preDate;
            fMonth = UTCMonth;
            finalYear = UTCFullYear;
        };
    }
    else {
        finalHours = preHours;
        fDay = UTCDays;
        finalWeekdate = UTCDate;
        fMonth = UTCMonth;
        finalYear = UTCFullYear;
    };

    if (additionalOptions.Month === 'numbers') finalMonth = fMonth + 1;
    else if (additionalOptions.Month === 'letters') finalMonth = langPath.months[fMonth].name;

    weekday = langPath.days[fDay];

    if (additionalOptions.showDays) finalWeekday = `${weekday}, `;
    if (additionalOptions.showDate) finalDate = `${finalWeekday}${finalWeekdate}.${finalMonth}.${finalYear}, `;
    if (additionalOptions.showMilliseconds) finalMilliseconds = `:${UTCMilliseconds}`;
    if (additionalOptions.showSeconds) finalSeconds = `:${UTCSeconds}`;
    if (additionalOptions.showLanguage) finalLanguage = `${Options.language}: `;
    if (additionalOptions.showTimezone) finalTimezone = ` ${Options.timezone}.`;

    standartTime = `${finalHours}:${UTCMinutes}`;

    return `${finalLanguage + finalDate + standartTime + finalSeconds + finalMilliseconds + finalTimezone}`;
};