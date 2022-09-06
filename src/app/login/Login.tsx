import React from 'react';
import { Link } from "react-router-dom";
import './Login.css';
import Header from '../components/header/Header'


const Login = () => {
    return(
        <div className="Login">
            <Header/>
            this is Login page
            <div>
                <Link to={`/home`}>Enter</Link>
            </div>
            <div>
                <Link to={`/`}>トップに戻る</Link>
            </div>
        </div>
    )
}

export default Login