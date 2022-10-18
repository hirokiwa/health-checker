import React, { useState } from 'react';
// import { Link } from "react-router-dom";
import './Home.css';
import Header from '../components/header/Header'
import Calendar from '../components/calendar/Calelndar';
import CalendarHead from '../components/calendar_head/CalendarHead';
// import console from 'console';


const Home = ():JSX.Element => {
    const today:Date = new Date();
    const [year, setYear] = useState<number>(Number(today.getFullYear()))
    const [month, setMonth] = useState<number>(Number(today.getMonth()))
    
    return(
        <div className="Home">
            <Header/>
            <CalendarHead
                year = {year}
                setYear = {setYear}
                month = {month}
                setMonth = {setMonth}
            />
            <Calendar 
                year = {year}
                month = {month}
            />
        </div>
    )
}

export default Home