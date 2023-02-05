import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './authentication/SighnUp';
import Home from "./home/Home";
import Submit from './submit/Submit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Submit />} />
        <Route path={`/home`} element={< Home/>} />
        <Route path={`/login`} element={< Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;