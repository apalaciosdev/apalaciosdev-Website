import React from "react"
import TabPanel from './tabPanel/TabPanel';

import about from "../assets/styles/jss/about";
import { createUseStyles } from "react-jss";
import ProfileImg from './ProfileImg';


const About = () => {
  const useStyles = createUseStyles(about);
  const css = useStyles();

  return (
    <div className={css.div}>
      <section id="about" data-aos="fade-right" className={css.section}>
       
          <ProfileImg className={css.img}/>
          <TabPanel className={css.tab}/>
       
      </section>
    </div>
  );
};

export default About;
