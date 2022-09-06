import React from 'react';
import Make_calendar from '../../function/Make_calendar';
import Repeat from '../../function/Repeat';
import Column from '../column/Column';
import './Calendar.css';

const Calendar = () => {
    
    const today:Date = new Date()
    // let year:number = 2022
    // let month:number = 9
    const calendar:number[][] = Make_calendar(today.getFullYear(), today.getDate())
    console.log(calendar)
    
    return(
        <div className="Calendar">
            <h1>
                {today.getFullYear()} {today.getMonth() + 1}月
            </h1>
            {/* <h1>{year}+ +{month}+月</h1> */}
            {/* <Repeat numTimes={4} display_flex={false}>
                {(index:number) => <div key={index}>
                    <Column/>
                </div>
                }
            </Repeat> */}
            {calendar.map((week, index) => <Column week = {week} />)}
        </div> 
    )
}

export default Calendar