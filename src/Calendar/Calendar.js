import React, { useEffect, useState } from 'react';
import { weeks, months, monthCodeList, checkLeapYear, monthWith31 } from './helper';
import './Calender.css'


const Calendar = ({ date }) => {
    const calenderDate = date.split("-");
    const [YYYY,MM,DD] = calenderDate
    const [dateArray, setDateArray] = useState(Array.from({ length: 30 }, (_, i) => i + 1))
    let selectedMonth= (months[(MM - 1)]) ;
    
    

    const YY = (YYYY.slice(2) - 0);
    const monthCode = () => {
        return monthCodeList[months[MM - 1]]

    }


    const yearCode = () => {

        let YYCode = (YY + Math.floor(YY / 4)) % 7
        return Math.floor(YYCode);
    }
    const centuryCode = () => {
        let centuryYear = (YYYY) - 0;

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
    const countMonthDate = () => {
        
        if (selectedMonth === "February") {
            let leapYearValue = checkLeapYear(YYYY);
            if (leapYearValue === 1) {
                return (Array.from({ length: 29 }, (_, i) => i + 1))
            }
            else {
                return (Array.from({ length: 28 }, (_, i) => i + 1))
            }
        }
        else if(monthWith31[selectedMonth]){
            return Array.from({ length: 31 }, (_, i) => i + 1)
        }
        else{
            return Array.from({ length: 30 }, (_, i) => i + 1)
        }
        
    }

    const getWeekBasedOnDate = () => {
        let res = (yearCode() + monthCode() + centuryCode() + 1 - checkLeapYear(YYYY)) % 7;
        let spaceArray = Array.from({ length: res }, (_, i) => " ");
        countMonthDate()
        setDateArray([...spaceArray, ...(countMonthDate())]);
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
                <div className='year'>{YYYY}</div>
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

                            i === (DD - 0) ? <div key={e} className='calendar-selectedDate'>{i}</div> : i === " " ? <div key={e}>{i}</div> : <div key={e} className='calendar-Dates'>{i}</div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Calendar