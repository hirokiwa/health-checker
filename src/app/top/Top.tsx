import React from 'react';
import { Link } from "react-router-dom";
import './Top.css';


const Top = () => {
    return(
        <div className="Top">
            <h1>Health Checker</h1>
            <div>
                <Link to={`/login/`}>ログイン</Link>
            </div>
        </div>
    )
}

export default Top