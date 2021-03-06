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
    <div className="App">
      <Navbar/>
      <Header data={data.main}/>
      <About/>
      <Projects data={data.projects}/>
      <Footer data={data.links}/>
    </div>
  );
}

export default App;
