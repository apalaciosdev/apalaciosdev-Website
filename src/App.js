import React, {useEffect} from 'react'

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
