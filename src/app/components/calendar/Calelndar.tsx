import React from 'react';
import Make_calendar from '../../function/Make_calendar';
import Column from '../column/Column';
import './Calendar.css';

interface type_calendar {
    year:number
    month:number
}

const Calendar = (props:type_calendar) => {

    let calendar:number[][] = Make_calendar(props.year, props.month)
    console.log(calendar)

    return(
        <div className="Calendar">
            {calendar.map((week, index) => <Column week = {week} />)}
        </div> 
    )
}

export default Calendar