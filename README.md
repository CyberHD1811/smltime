# XTIME

---

<br>

### Description

---

With this small npm package is it possible go get a date for every timezone. This is available in different languages.

<br>

### Installation

---

```bash
$ npm i xtime
```

<br>

### Usage (Example)

---

It returns a string of an (almost) indivual date.

```js
const xtime = require('xtime');

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

const date = xtime(Options, additionalOptions);

console.log(date);
```

<br>

### Documentation

---

#### Options

- language: Any shortcut of a language in capital letters, default: 'EN'. (List is below)
- timezone: Any timezone with full hours in capital letters, default: 'UTC'.

#### additionalOptions

- showDate: shows the whole Date (Weekday, Date.Month.Year). (Type: boolean, Default: false)
- showDays: shows the Weekday. (Only useful if showDate is true) (Type: boolean, Default: false)
- showMilliseconds: shows the milliseconds after the seconds. (Type: boolean, Default: false)
- showSeconds: shows the seconds after the minutes. (Type: boolean, Default: true)
- showLanguage: shows the defined language as a shortcut at the beginning of the string. (Type: boolean, Default: false)
- showTimezone: shows the defined timezone at the end of the string. (Type: boolean, Default: false)
- Month: 'letters' or 'numbers' shows Month in letters or as number. (Only useful if showDate is true) (Type: string, Default: 'numbers')

#### Attention

There is no way to deactivate the hours and minutes. If you could, there would be a way to get an empty string out of the function and this isn't wanted.

<br>

#### Lists

- Language:
    ```js
    'EN': English
    'DE': German
    ```
- Timezone:
    ```js
    'LINT': UTC + 14
    'NZDT': UTC + 13
    'ANAT': UTC + 12
    'AEDT': UTC + 11
    'AEST': UTC + 10
    'JST': UTC + 9
    'CST': UTC + 8
    'WIB': UTC + 7
    'BST': UTC + 6
    'UZT': UTC + 5
    'GST': UTC + 4
    'MSK': UTC + 3
    'OEZ': UTC + 2
    'MEZ': UTC + 1
    'GMT': UTC + 0
    'CVT': UTC - 1
    'GST': UTC - 2
    'ART': UTC - 3
    'VET': UTC - 4
    'EST': UTC - 5
    'CST': UTC - 6
    'MST': UTC - 7
    'PST': UTC - 8
    'AKST': UTC - 9
    'HST': UTC - 10
    'NUT': UTC - 11
    'AoE': UTC - 12

    'UTC': UTC
    ```