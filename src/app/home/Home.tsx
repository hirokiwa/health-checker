import React from 'react';
// import { Link } from "react-router-dom";
import './Home.css';
import Header from '../components/header/Header'
import Calendar from '../components/calendar/Calelndar';


const Home = () => {

    // const get_now = () =>  {
    //     const today:Date = new Date();
    // }

    const today:Date = new Date();
    console.log(today)

    return(
        <div className="Home">
            <Header/>
            this is Home
            <Calendar/>
        </div>
    )
}

export default Home