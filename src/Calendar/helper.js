export const weeks = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
export const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]
export const monthCodeList = {
    "January": 0,
    "February": 3,
    "March": 3,
    "April": 5,
    "May": 1,
    "June": 4,
    "July": 6,
    "August": 2,
    "September": 5,
    "October": 0,
    "November": 3,
    "December": 5
}
export const checkLeapYear = (year) => {
    
    if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        return 1;
      } else {
        return 0;
      }

}