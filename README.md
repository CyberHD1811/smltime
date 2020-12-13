# SMLTIME

---

<br>

### Description

---

With this small npm package is it possible go get a date for every timezone. This is available in different languages. It returns a string of an (almost) indivual date.
There is also a function to check if a year is a leapyear.

<br>

### Installation

---

```bash
$ npm i smltime
```

<br>

### Usage (Example)

---

```js
const smltime = require('smltime');

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

let number = 2020;

const date = smltime.smltime(Options, additionalOptions);
const leapyear = smltime.leapyear(number);

console.log(date); //Expected output: 'Weekday, Date.Month(letters).year, Hours:Minutes:Seconds Timezone.' 
console.log(leapyear); //Expected output: true
```

<br>

### Changelog

---

Click [here](https://www.github.com/CyberHD1811/smltime/blob/main/changelog/latestVersion.md "Latest Version") to view the latest Version or click [here](https://github.com/CyberHD1811/smltime/blob/main/changelog/allVersions.md "All Versions") to see all Versions.

<br>

### Documentation

---

### leapyear()
- ### Year
    - An integer between 0 and infinity.

<br>

### smltime()
- #### Options

    - language: Any shortcut of a language in capital letters, default: 'EN'. (List is below)
    - timezone: Any timezone with full hours in capital letters, default: 'UTC'.

- #### additionalOptions

    - showDate: shows the whole Date.
    - showDays: shows the Weekday.
    - showMilliseconds: shows the milliseconds after the seconds.
    - showSeconds: shows the seconds after the minutes.
    - showLanguage: shows the defined language as a shortcut at the beginning of the string.
    - showTimezone: shows the defined timezone at the end of the string.
    - Month: 'letters' or 'numbers' shows Month in letters or as number.

- #### Attention

    There is no way to deactivate the hours and minutes. If you could, there would be a way to get an empty string out of the function and this isn't wanted.

<br>

#### Lists

---

Object | Property | Type | DefaultValue | OtherValues | Language | Time
| :---: | :---: | :---: | :---: | :---: | :---: | :---:
Options | language | String | 'EN' | | German
| | | | | 'DE' | German
| | | | | 'ES' | Spanish
| | timezone | String | 'UTC | | | UTC
| | | | | 'LINT'| | UTC + 14
| | | | | 'NZDT' | | UTC + 13
| | | | | 'ANAT' | | UTC + 12
| | | | | 'AEDT' | | UTC + 11
| | | | | 'AEST' | | UTC + 10
| | | | | 'JST' | | UTC + 9
| | | | | 'CST' | | UTC + 8
| | | | | 'WIB' | | UTC + 7
| | | | | 'BST' | | UTC + 6
| | | | | 'UZT' | | UTC + 5
| | | | | 'GST' | | UTC + 4
| | | | | 'MSK' | | UTC + 3
| | | | | 'OEZ' | | UTC + 2
| | | | | 'MEZ' | | UTC + 1
| | | | | 'GMT' | | UTC + 0
| | | | | 'CVT' | | UTC - 1
| | | | | 'GST' | | UTC - 2
| | | | | 'ART' | | UTC - 3
| | | | | 'VET' | | UTC - 4
| | | | | 'EST' | | UTC - 5
| | | | | 'CST' | | UTC - 6
| | | | | 'MST' | | UTC - 7
| | | | | 'PST' | | UTC - 8
| | | | | 'AKST' | | UTC - 9
| | | | | 'HST' | | UTC - 10
| | | | | 'NUT' | | UTC - 11
| | | | | 'AoE' | | UTC - 12
| | | | | | | |
| | | | | | | |
additionalOptions | Month | String | 'numbers' | 'letters' 
| | showDate | Boolean | false
| | showDays | Boolean | false
| | showLanguage | Boolean | false
| | showMilliseconds | Boolean | false
| | showSeconds | Boolean | true
| | showTimezone | Boolean | false

#### Information

---

additionalOptions.Month and additionalOptions.showDays is only necessary if additionalOptions.showDate is true. 