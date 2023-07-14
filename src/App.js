import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"

// The main JS file that is rendering all the components of the React App
function App() {

  // =========== States ==========
  const [bgStyle, setBgStyle] = useState('light')
  const [alert, setAlert] = useState(null)

  // ============= Functions ============
  // function to change the alert
  const toggleAlert = (message, type) => {
      
    setAlert({
        msg: message,
        alertType: type
      })

      setTimeout(() => {
        setAlert(null)
      }, 1500)
  }

  // function to change the theme of the page
  const toggleStyle = () => {
    if (bgStyle === "light") {
      setBgStyle("dark")
      toggleAlert("Dark Mode Enabled!", 'success');
      document.body.style.backgroundColor = '#012e02';
    }

    else {
      setBgStyle("light")
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <div>
      <Router basename='/'>
        <Navbar title="TextUtils" aboutText='About Us' mode={bgStyle} toggleStyle={toggleStyle} />
        <Alert alert={alert} />

        {/* Components with paths should be written inside Routes tag */}
        <Routes>
          <Route path='/about' element={<About mode={bgStyle} />}></Route>
          <Route path='/' element={<TextForm name="Type your text and let this tool do the magic!!" mode={bgStyle} toggleAlert={toggleAlert} />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
