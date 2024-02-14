import React, {useEffect} from 'react'

import Navbar from './components/Navbar';
import Header from './components/Header'
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';

import {data} from './resumeData.js'

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div></div>
  );
}

export default App;
