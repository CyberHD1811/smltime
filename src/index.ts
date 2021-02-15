const leapyear = (year: number = 0): boolean => {
    if (typeof year !== 'number') throw new TypeError(`Your input " ${year} " is a(n) ${typeof year} and not a number.`);
    if (year < 0) throw new Error(`Your input " ${year} " is lower than 0, please try one higher than 0.`);

    if (year % 4 === 0) {
        if (year % 100 !== 0) return true;
        else {
            if (year % 400 === 0) return true;
            else return false;
        }
    } else return false;
};

type Options = {
    firstDay: boolean;
    monthName: boolean;
    showDate: boolean;
    showHours: boolean;
    showMiliseconds: boolean;
    showMinutes: boolean;
    showSeconds: boolean;
    showTimezone: boolean;
    showWeekday: boolean;
    timezone: string;
};

const smltime = (options: Options) => {
    if (typeof options !== 'object') throw new TypeError(`Your input " ${options} " is a(n) ${typeof options} and not an object.`);

    let firstDay = true;
    let monthName = false;
    let showDate = true;
    let showHours = true;
    let showMiliseconds = false;
    let showMinutes = true;
    let showSeconds = true;
    let showTimezone = false;
    let showWeekday = false;
    let timezone = 'UTC';

    const date = new Date();
    let day: number;
    let hours: number;
    let month: number;
    let preHours: number;
    let weekday: number;
    let year: number;

    if (Object.keys(options).length !== 0) {
        let propArr = Object.keys(options);
        
        if (propArr.includes('firstDay')) firstDay = options.firstDay;
        if (propArr.includes('monthName')) monthName = options.monthName;
        if (propArr.includes('showDate')) showDate = options.showDate;
        if (propArr.includes('showHours')) showHours = options.showHours;
        if (propArr.includes('showMiliseconds')) showMiliseconds = options.showMiliseconds;
        if (propArr.includes('showMinutes')) showMinutes = options.showMinutes;
        if (propArr.includes('showSeconds')) showSeconds = options.showSeconds;
        if (propArr.includes('showTimezone')) showTimezone = options.showTimezone;
        if (propArr.includes('showWeekday')) showWeekday = options.showWeekday;
        if (propArr.includes('timezone')) timezone = options.timezone;
    }

    switch (timezone) {
        case 'LINT':
            preHours = date.getUTCHours() + 14;
            break;
        case 'NZDT':
            preHours = date.getUTCHours() + 13;
            break;
        case 'ANAT':
            preHours = date.getUTCHours() + 12;
            break;
        case 'AEDT':
            preHours = date.getUTCHours() + 11;
            break;
        case 'AEST':
            preHours = date.getUTCHours() + 10;
            break;
        case 'JST':
            preHours = date.getUTCHours() + 9;
            break;
        case 'AWST':
            preHours = date.getUTCHours() + 8;
            break;
        case 'WIB':
            preHours = date.getUTCHours() + 7;
            break;
        case 'BST':
            preHours = date.getUTCHours() + 6;
            break;
        case 'UZT':
            preHours = date.getUTCHours() + 5;
            break;
        case 'GST':
            preHours = date.getUTCHours() + 4;
            break;
        case 'MSK':
            preHours = date.getUTCHours() + 3;
            break;
        case 'EET':
            preHours = date.getUTCHours() + 2;
            break;
        case 'CET':
            preHours = date.getUTCHours() + 1;
            break;
        case 'GMT':
            preHours = date.getUTCHours();
            break;
        case 'UTC':
            preHours = date.getUTCHours();
            break;
        case 'CVT':
            preHours = date.getUTCHours() - 1;
            break;
        case 'GST':
            preHours = date.getUTCHours() - 2;
            break;
        case 'ART':
            preHours = date.getUTCHours() - 3;
            break;
        case 'VET':
            preHours = date.getUTCHours() - 4;
            break;
        case 'EST':
            preHours = date.getUTCHours() - 5;
            break;
        case 'CST':
            preHours = date.getUTCHours() - 6;
            break;
        case 'MST':
            preHours = date.getUTCHours() - 7;
            break;
        case 'PST':
            preHours = date.getUTCHours() - 8;
            break;
        case 'AKST':
            preHours = date.getUTCHours() - 9;
            break;
        case 'HST':
            preHours = date.getUTCHours() - 10;
            break;
        case 'NUT':
            preHours = date.getUTCHours() - 11;
            break;
        case 'AoE':
            preHours = date.getUTCHours() - 12;
            break;
        default:
            preHours = date.getUTCHours();
            break;
    }

    let Max: number;
    let lastMax: number;
    day = date.getUTCDate();
    month = date.getUTCMonth();
    weekday = date.getUTCDay();
    year = date.getUTCFullYear();
    
    if (preHours > 23) {
        if (month === 1) {
            if (leapyear(year)) Max = yearObj[month].self.leapyear;
            else Max = yearObj[month].self.default;
        } else if (month === 0) Max = yearObj[month].self;
        else if (month === 2) Max = yearObj[month].self;
        else if (month === 3) Max = yearObj[month].self;
        else if (month === 4) Max = yearObj[month].self;
        else if (month === 5) Max = yearObj[month].self;
        else if (month === 6) Max = yearObj[month].self;
        else if (month === 7) Max = yearObj[month].self;
        else if (month === 8) Max = yearObj[month].self;
        else if (month === 9) Max = yearObj[month].self;
        else if (month === 10) Max = yearObj[month].self;
        else if (month === 11) Max = yearObj[month].self;
        else Max = 30;

        hours = preHours - 24;
        if (weekday === 6) weekday = 0;
        else weekday = weekday + 1;

        if (day === Max) {
            day = 1;
            if (month === 11) {
                month = 0;
                year = year + 1;
            } else month = month + 1;
        } else day = day + 1;
    } else if (preHours < 0) {
        if (month === 2) {
            if (leapyear(year)) lastMax = yearObj[month].before.leapyear;
            else lastMax = yearObj[month].before.default;
        } else if (month === 0) lastMax = yearObj[month].before;
        else if (month === 1) lastMax = yearObj[month].before;
        else if (month === 3) lastMax = yearObj[month].before;
        else if (month === 4) lastMax = yearObj[month].before;
        else if (month === 5) lastMax = yearObj[month].before;
        else if (month === 6) lastMax = yearObj[month].before;
        else if (month === 7) lastMax = yearObj[month].before;
        else if (month === 8) lastMax = yearObj[month].before;
        else if (month === 9) lastMax = yearObj[month].before;
        else if (month === 10) lastMax = yearObj[month].before;
        else if (month === 11) lastMax = yearObj[month].before;
        else lastMax = 30;

        hours = preHours + 24;
        if (weekday === 0) weekday = 6;
        else weekday = weekday - 1;

        if (day === 0) {
            day = lastMax;
            if (month === 0) {
                month = 11;
                year = year - 1;
            } else month = month - 1;
        } else day = day - 1;
    } else hours = preHours;

    let customDate = ``;

    if (showWeekday) {
        if (showDate || showHours || showMinutes || showSeconds || showMiliseconds || showTimezone) {
            if (weekday === 0) customDate += `${Weekday[weekday]}, `;
            else if (weekday === 1) customDate += `${Weekday[weekday]}, `;
            else if (weekday === 2) customDate += `${Weekday[weekday]}, `;
            else if (weekday === 3) customDate += `${Weekday[weekday]}, `;
            else if (weekday === 4) customDate += `${Weekday[weekday]}, `;
            else if (weekday === 5) customDate += `${Weekday[weekday]}, `;
            else if (weekday === 6) customDate += `${Weekday[weekday]}, `;
        }
        else {
            if (weekday === 0) customDate += Weekday[weekday];
            else if (weekday === 1) customDate += Weekday[weekday];
            else if (weekday === 2) customDate += Weekday[weekday];
            else if (weekday === 3) customDate += Weekday[weekday];
            else if (weekday === 4) customDate += Weekday[weekday];
            else if (weekday === 5) customDate += Weekday[weekday];
            else if (weekday === 6) customDate += Weekday[weekday];
        }
    }
    if (showDate) {
        let Day: string;
        let Month: string;

        if (day < 10) Day = `0${day}`;
        else Day = day.toString();
        if (monthName) {
            if (month === 0) Month = yearObj[month].name;
            else if (month === 1) Month = yearObj[month].name;
            else if (month === 2) Month = yearObj[month].name;
            else if (month === 3) Month = yearObj[month].name;
            else if (month === 4) Month = yearObj[month].name;
            else if (month === 5) Month = yearObj[month].name;
            else if (month === 6) Month = yearObj[month].name;
            else if (month === 7) Month = yearObj[month].name;
            else if (month === 8) Month = yearObj[month].name;
            else if (month === 9) Month = yearObj[month].name;
            else if (month === 10) Month = yearObj[month].name;
            else if (month === 11) Month = yearObj[month].name;
            else Month = '';
        } else {
            if (month < 10) Month = `0${month}`;
            else Month = `${month}`;
        }

        if (firstDay) {
            if (showHours || showMinutes || showSeconds || showMiliseconds || showTimezone) customDate += `${Day}.${Month}.${year} `;
            else customDate += `${Day}.${Month}.${year}`;
        } else {
            if (showHours || showMinutes || showSeconds || showMiliseconds || showTimezone) customDate += `${Month}.${Day}.${year} `;
            else customDate += `${Month}.${Day}.${year}`;
        }
    }
    if (showHours) {
        let Hours: string;

        if (hours < 10) Hours = `0${hours}`;
        else Hours = hours.toString();

        if (showMinutes || showSeconds || showMiliseconds) customDate += `${Hours}:`;
        else if (timezone) customDate += `${Hours} `;
        else customDate += Hours;
    }
    if (showMinutes) {
        let minutes: string;

        if (date.getUTCMinutes() < 10) minutes = `0${date.getUTCMinutes()}`;
        else minutes = date.getUTCMinutes().toString();

        if (showSeconds || showMiliseconds) customDate += `${minutes}:`;
        else if (showTimezone) customDate += `${minutes} `;
        else customDate += minutes;
    }
    if (showSeconds) {
        let seconds: string;

        if (date.getUTCSeconds() < 10) seconds = `0${date.getUTCSeconds()}`;
        else seconds = date.getUTCSeconds().toString();

        if (showMiliseconds) customDate += `${seconds}:`;
        else if (showTimezone) customDate += `${seconds} `;
        else customDate += seconds;
    }
    if (showMiliseconds) {
        let miliseconds: string;

        if (date.getUTCMilliseconds() < 10) miliseconds = `0${date.getUTCMilliseconds()}`;
        else miliseconds = date.getUTCMilliseconds().toString();
        
        if (showTimezone) customDate += `${miliseconds} `;
        else customDate += miliseconds;
    }
    if (showTimezone) customDate += timezone;

    return customDate;
};

export { leapyear, smltime };

const Weekday = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
}

const yearObj = {
    0: {
        self: 31,
        before: 31,
        name: "January"
    },
    1: {
        self: {
            leapyear: 29,
            default: 28
        },
        before: 31,
        name: "February"
    },
    2: {
        self: 31,
        before: {
            leapyear: 29,
            default: 28
        },
        name: "March"
    },
    3: {
        self: 30,
        before: 31,
        name: "April"
    },
    4: {
        self: 31,
        before: 30,
        name: "May"
    },
    5: {
        self: 30,
        before: 31,
        name: "June"
    },
    6: {
        self: 31,
        before: 30,
        name: "July"
    },
    7: {
        self: 31,
        before: 31,
        name: "August"
    },
    8: {
        self: 30,
        before: 31,
        name: "September"
    },
    9: {
        self: 31,
        before: 30,
        name: "October"
    },
    10: {
        self: 30,
        before: 31,
        name: "November"
    },
    11: {
        self: 31,
        before: 30,
        name: "December"
    }
}