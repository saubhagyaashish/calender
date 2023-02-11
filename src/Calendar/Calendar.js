import React, { useEffect, useState } from 'react';
import { weeks, months, monthCodeList, checkLeapYear } from './helper';
import './Calender.css'


const Calendar = ({ date }) => {
    
    const [dateArray, setDateArray] = useState(Array.from({ length: 31 }, (_, i) => i + 1))
    let selectedMonth= (months[(date.slice(5, 7) - 1)]) ;

    const YY = (date.slice(2, 4) - 0);
    const monthCode = () => {
        let MM = (date.slice(5, 7) - 0);
        return monthCodeList[months[MM - 1]]

    }


    const yearCode = () => {

        let YYCode = (YY + Math.floor(YY / 4)) % 7
        return Math.floor(YYCode);
    }
    const centuryCode = () => {
        let centuryYear = (date.slice(0, 4)) - 0;

        if (centuryYear >= 1700 && centuryYear < 1800) {
            return 4;
        }
        if (centuryYear >= 1800 && centuryYear < 1900) {
            return 2;
        }
        if (centuryYear >= 1900 && centuryYear < 2000) {
            return 0;
        }
        if (centuryYear >= 2000 && centuryYear < 2100) {
            return 6;
        }
        if (centuryYear >= 2100 && centuryYear < 2200) {
            return 4;
        }
        if (centuryYear >= 2200 && centuryYear < 2300) {
            return 2;
        }

        return 0;

    }
    const checkMonthFeb = () => {
        if (selectedMonth === "February") {
            let leapYearValue = checkLeapYear(date.slice(0, 4));
            if (leapYearValue === 1) {
                return (Array.from({ length: 29 }, (_, i) => i + 1))
            }
            else {
                return (Array.from({ length: 28 }, (_, i) => i + 1))
            }
        }
        return dateArray;
    }

    const getWeekBasedOnDate = () => {
        let res = (yearCode() + monthCode() + centuryCode() + 1 - checkLeapYear(date.slice(0, 4))) % 7;
        let spaceArray = Array.from({ length: res }, (_, i) => " ");
        checkMonthFeb()
        setDateArray([...spaceArray, ...(checkMonthFeb())]);
        return res;

    }


    useEffect(() => {
        getWeekBasedOnDate()
    }, [])
    useEffect(() => {
        getWeekBasedOnDate()
    }, [date])

    return (


        <div className='calendar-wrapper'>
            <div className='calendar-month-year'>
                <div className='month'>{selectedMonth}</div>
                <div className='year'>{date.slice(0, 4)}</div>
            </div>
            
            <div className='calendar-days'>
                {
                    weeks.map((i) => <div key={i}>{i}</div>)
                }
            </div>

            <div className='calender-date'>
                {
                    dateArray.map((i, e) => {
                        return (

                            i === (date.slice(8) - 0) ? <div key={e} className='calendar-selectedDate'>{i}</div> : i === " " ? <div key={e}>{i}</div> : <div key={e} className='calendar-Dates'>{i}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Calendar