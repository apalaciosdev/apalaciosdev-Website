import React from "react";
import projects from "../assets/styles/jss/projects";
import { createUseStyles } from "react-jss";
import Card from "./Card";

const Projects = ({ data }) => {
  const useStyles = createUseStyles(projects);
  const css = useStyles();

  console.log(data)
  return (
    <>
      <div className={css.divGradient}>
        <h1>PORTFOLIO</h1>
      </div>
        {data.map(info => (
          <div id="projects" className={css.divProjects}>
            <Card
              title={info.title}
              description={info.description}
              img={info.img}
            />
          </div>
          
        ))}

    </>
  );
};

export default Projects;
