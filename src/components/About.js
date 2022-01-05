import React from "react"
import TabPanel from './tabPanel/TabPanel';

import about from "../assets/styles/jss/about";
import { createUseStyles } from "react-jss";


const About = () => {
  const useStyles = createUseStyles(about);
  const css = useStyles();

  return (
    <div className={css.div}>
      <section id="about" data-aos="fade-right">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, aperiam dolorum, ducimus porro vel placeat quia sed alias velit id sunt culpa quas voluptas molestias asperiores? Nesciunt quos sint odio.
      Quidem vitae cupiditate ipsum ipsa ea, totam iure libero quos eos. Quaerat, fuga praesentium itaque dignissimos vero odit, recusandae aspernatur architecto culpa vitae quibusdam. Rerum iusto dolores eveniet doloribus esse.</p>
        <TabPanel/>
      </section>
    </div>
  );
};

export default About;
