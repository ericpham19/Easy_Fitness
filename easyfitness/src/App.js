
import './App.css';
import react from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import Sessions from "./components/Sessions";
import Users from "./components/Users";
import Home from "./Pages/Home";
import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./components/SignUp";
import AuthDemo from "./components/AuthDemo";
import { BrowserRouter , Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';





function App() {

  



  // useEffect(() => {
  //   let mounted = true;
  //   getAPIData(). then((items) => {
  //     if (mounted) {
  //       setUsers(items);

  //     }
  //   });
  //   return () => (mounted = false);
  // } , [])


  return (

    
    

      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          

        </Routes>

      </BrowserRouter>
    
  );
}
export default App;
