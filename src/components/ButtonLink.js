import React from "react";
import { FaGithub,} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

import buttonLink from '../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'



const ButtonLink = ({type, colorType}) => {
  const useStyles = createUseStyles(buttonLink);
  const css = useStyles(colorType);
  
  const name = type;
  return (
    <div>
      {(() => {
        switch (type) {
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
