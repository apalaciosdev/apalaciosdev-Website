import React from "react";
import projects from "../assets/styles/jss/projects";
import { createUseStyles } from "react-jss";
import Card from "./Card";

const Projects = ({ data }) => {
  const useStyles = createUseStyles(projects);
  const css = useStyles();

  return (
    <div id="projects">
      <div className={css.divGradient}> 
      </div>
      <div className={css.divProjects}>
        <h2 className={css.h1Projects} >PORTFOLIO</h2>
        {data.map(info => (
          <Card
            title={info.title}
            description={info.description}
            img={info.img}
            imgMobile={info.imgMobile}
            url={info.url}
            githubUrl={info.githubUrl}
            tecnologies={info.tecnologies}
            key={info.title}
          />
        ))}
      </div>

    </div>
  );
};

export default Projects;
