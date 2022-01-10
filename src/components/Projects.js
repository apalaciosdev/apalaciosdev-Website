import React from "react";
import projects from "../assets/styles/jss/projects";
import { createUseStyles } from "react-jss";
import Card from "./Card";

const Projects = ({ data }) => {
  const useStyles = createUseStyles(projects);
  const css = useStyles();

  console.log(data)
  return (
    <div >
      <div className={css.divGradient}> 
      {/* añadir simbolos de </> */}
      </div>
      <div id="projects" className={css.divProjects}>
        <h1>PORTFOLIO</h1>
        {data.map(info => (
            <Card
              title={info.title}
              description={info.description}
              img={info.img}
              imgMobile={info.imgMobile}
            />
            
            ))}
      </div>

    </div>
  );
};

export default Projects;
