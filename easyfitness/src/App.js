
import './App.css';
import react from 'react';
import {useState, useEffect} from "react";
import axios from "axios";
import Sessions from "./components/Sessions";
import Users from "./components/Users";

import LogInPage from "./Pages/LogInPage";
import SignUpPage from "./components/SignUp";

import { BrowserRouter , Routes, Route, } from 'react-router-dom';
import Navbar from './components/Navbar';
import SessionsPage from "./Pages/SessionsPage"
import FrontPage from './Pages/FrontPage';
import UserPage from './Pages/UserPage';





function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  function setCurrentUser(currentUser) {
    setUser(currentUser);
    setLoggedIn(true);
  }

  function logOut() {
    setUser({});
    setLoggedIn(false);
    localStorage.token = '';
  }

  useEffect(() => {
    const token = localStorage.token;
    if (typeof token !== 'undefined' && token.length > 1
      && token !== 'undefined'
    ) {
      fetch('http://localhost:3000/auto_login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      })
        .then((r) => r.json())
        .then((user) => setCurrentUser(user));
    } else {
      console.log('No token found, try logging in!');
    }
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<FrontPage/>} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/sessionspage" element={<SessionsPage />} />
          <Route path="/user" element={<UserPage />} />

        </Routes>

      </BrowserRouter>
    </div>
  );
}
export default App;
