import React from 'react'
;
import projects from "../assets/styles/jss/projects";
import { createUseStyles } from "react-jss";
import Card from './Card';




const Projects = ({data}) => {
  const useStyles = createUseStyles(projects);
  const css = useStyles();

  return (
    <>
      <div className={css.divGradient}></div>
      <div id="projects" className={css.divProjects}>
        <Card title={data.gifia.title} description={data.gifia.description} img={data.gifia.img}/>
      </div>
    </>
    
  )
}

export default Projects
