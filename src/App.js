import React, {useEffect} from 'react'
import About from './components/About';
import Header from './components/Header'
import Navbar from './components/Navbar';
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
    </div>
  );
}

export default App;
