import React from 'react';
import Make_calendar from '../../function/Make_calendar';
import CalendarDay from '../calendar_day/CalendarDay';
import Column from '../column/Column';
import './Calendar.css';

interface type_calendar {
    year:number
    month:number
}

const Calendar = (props:type_calendar) => {

    let calendar:number[][] = Make_calendar(props.year, props.month)
    const Aweek:string[] = ["日", "月", "火", "水", "木", "金", "土"]

    return(
        <div className="Calendar">
            <div className='calendar_day_outer'>
              {Aweek.map((day) => <CalendarDay day = {day}/>)}
            </div>
            {calendar.map((week) => <Column week = {week} />)}
        </div> 
    )
}

export default Calendar