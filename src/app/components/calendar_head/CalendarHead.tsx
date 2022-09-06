import React from 'react';
import './CalendarHead.css';

interface type_calendar_head {
    year :number
    setYear :React.Dispatch<React.SetStateAction<number>>
    month :number
    setMonth :React.Dispatch<React.SetStateAction<number>>
}

const CalendarHead = (props :type_calendar_head):JSX.Element => {

    const add_month = ():void => {
        if(props.month !== 11){
            props.setMonth(props.month + 1)
        }else{
            props.setMonth(0)
            props.setYear(props.year + 1)
        }
    }
    
    const sub_month = ():void => {
        if(props.month !== 0){
            props.setMonth(props.month - 1)
        }else{
            props.setMonth(11)
            props.setYear(props.year - 1)
        }
    }

    return(
        <div className='Calendar_head'>
            <button onClick={sub_month}>&lt;</button>
                <h1>
                    {props.year} {props.month + 1}月
                </h1>
            <button onClick={add_month}>&gt;</button>
        </div> 
    )
}

export default CalendarHead