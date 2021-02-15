# smltime

---

This is a package to create a custom date string and to check if a FullYear is a leapyear or not.

<br>

```ts
import { leapyear, smltime } from 'smltime';

//leapyear function:
console.log(leapyear(2020)); //Expected output: true
console.log(leapyear(2021)); //Expected output: false

//smltime function:
const dateString = {
    firstDay: true,
    monthName: false,
    showDate: true,
    showHours: true,
    showMiliseconds: true,
    showMinutes: true,
    showSeconds: true,
    showTimezone: true,
    showWeekday: true,
    timezone: 'UTC'
};

console.log(smltime(dateString)); //Expected output (ONLY an example): 'Monday, 15.02.2021 00:35:07:1001 UTC'
```

---

#### Warning:

Version 3.0.0 doesn't have any language support like 2.X.X. Please remember that when you update from previous versions.

You will get an Output of true with the leapyear function, because it uses 0 as default value.
You will get an TypeError, if the input for the leapyear function is not a number.

You will get an TypeError, if the input for the smltime function is not an object.
If you don't define any properties in that object, the function will use this object as default: {
    firstDay = true,
    monthName = false,
    showDate = true,
    showHours = true,
    showMiliseconds = false,
    showMinutes = true,
    showSeconds = true,
    showTimezone = false,
    showWeekday = false,
    timezone = 'UTC'
}

---

## Documentation:

- #### leapyear(year):
    - ##### year: A number greater than 0

- #### smltime(options):
    - ##### options: An object to customize the output of the function
        - properties: 
            - firstDay: boolean
            - monthName: boolean
            - showDate: boolean
            - showHours: boolean
            - showMiliseconds: boolean
            - showMinutes: boolean
            - showSeconds: boolean
            - showTimezone: boolean
            - showWeekday: boolean
            - timezone: string

    A list with all possible timezones (if timezone doesn't exist it will use UTC as default):
    
    | name | difference |
    | :---: | :---: |
    | LINT | UTC+14 |
    | NZDT | UTC+13 |
    | ANAT | UTC+12 |
    | AEDT | UTC+11 |
    | AEST | UTC+10 |
    | JST | UTC+9 |
    | AWST | UTC+8 |
    | WIB | UTC+7 |
    | BST | UTC+6 |
    | UZT | UTC+5 |
    | GST | UTC+4 |
    | MSK | UTC+3 |
    | EET | UTC+2 |
    | CET | UTC+1 |
    | GMT | UTC+0 |
    | UTC | UTC+0 |
    | CVT | UTC-1 |
    | GST | UTC-2 |
    | ART | UTC-3 |
    | VET | UTC-4 |
    | EST | UTC-5 |
    | CST | UTC-6 |
    | MST | UTC-7 |
    | PST | UTC-8 |
    | AKST | UTC-9 |
    | HST | UTC-10 |
    | NUT | UTC-11 |
    | AoE | UTC-12 |

    Source: [timeanddate.com](https://www.timeanddate.com/time/current-number-time-zones.html)