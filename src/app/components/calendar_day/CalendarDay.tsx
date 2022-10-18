import React from 'react';
import './CalendarDay.css';

type type_CalendarDay = {
    day:string;
}

const CalendarDay = (props:type_CalendarDay) => {
    return(
        <div className="CalendarDay">
            {props.day}
        </div>
    )
}

export default CalendarDay