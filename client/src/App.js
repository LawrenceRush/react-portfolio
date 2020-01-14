import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Pages&Nav/Nav'
import Welcome from './Pages&Nav/Welcome'
import Projects from './Pages&Nav/Projects'
import Contact from "./Pages&Nav/Contact"

function App() {
  return (
    <body>
      <Navbar/>
      <Welcome />
      <Projects />
      <Contact/>
    </body>
  );
}

export default App;
