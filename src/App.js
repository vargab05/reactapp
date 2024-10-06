import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [bgColor, setBgColor] = useState('white');
  const [navbarColor, setNavbarColor] = useState('light');
  const [componentColor, setComponentColor] = useState('white');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#132232';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
  const changePageColor = (color) => {
    setBgColor(color);
    document.body.style.backgroundColor = color;
  }
  const changeNavbarColor = (color) => {
    setNavbarColor(color);
  }
  return (
    <>
      <Router>
        <Navbar title="React" element1="Home" mode={mode} toggleMode={toggleMode} changeNavbarColor={changeNavbarColor} navbarColor={navbarColor} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} changePageColor={changePageColor} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
