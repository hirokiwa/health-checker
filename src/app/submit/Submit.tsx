import React, { useState } from 'react';
import './Submit.css';
import Header from '../components/header/Header'
import Calendar from '../components/calendar/Calelndar';
import CalendarHead from '../components/calendar_head/CalendarHead';
import TakeTemperture from './TakeTemperture/TakeTemperture';
// import console from 'console';


const Submit = ():JSX.Element => {
    const today:Date = new Date();
    // const [year, setYear] = useState<number>(Number(today.getFullYear()))
    // const [month, setMonth] = useState<number>(Number(today.getMonth()))
    
    return(
        <div className="Submit">
            <Header/>
            <TakeTemperture/>
        </div>
    )
}

export default Submit