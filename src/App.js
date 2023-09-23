import React from 'react';
import './App.css';
import Fixedtp from './components/fixedtp';
import Navbar from './components/navbar';
import Home from './components/home';
import { BrowserRouter as Main, Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Main>
    <Fixedtp/>
    <Navbar/>
    <Routes>

      <Route exact path='/' element= {<Home/>} />
    </Routes>
    </Main>
    </>
  )
}

export default App;
