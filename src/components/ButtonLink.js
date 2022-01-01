import React from "react";
import { FaGithub,} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

import buttonLink from '../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'



const ButtonLink = ({ type }) => {
  const useStyles = createUseStyles(buttonLink);
  const css = useStyles();
  
  const name = type;
  return (
    <div>
      {(() => {
        switch (name) {
          case "github":
            return  <button className={css.button}><FaGithub/> Github</button>;

          case "code":
            return <button className={css.button}><BiCodeAlt/> Projects</button>;

          default:
            return <div>You are a User.</div>;
        }
      })()}
    </div>
  );
};

export default ButtonLink;
