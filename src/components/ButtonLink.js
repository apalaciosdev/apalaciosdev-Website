import React from "react";
import { FaGithub,} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

import {data} from '../resumeData.js'


import buttonLink from '../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'
import { Colors } from '../assets/styles/colors';
import { IconContext } from "react-icons";
import Icon from './Icon';



const ButtonLink = ({type, colorType}) => {
  console.log(colorType)
  const useStyles = createUseStyles(buttonLink);
  const css = useStyles(colorType);

  console.log(data.links.github)

  return (
    <div>
      {(() => {
        switch (type) {
          case "github":
            return(  
              <button className={css.buttonT2} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"github"} bg={"buttonT2"}/>
                <a className={css.aButton}>Github</a>
              </button>
            );

          case "code":
            return (
              <button className={css.buttonT1} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"code"}/>
                <a className={css.aButton}>Code</a>
              </button>
            );

          default:
            return <div>You are a User.</div>;
        }
      })()}
    </div>
  );
};

export default ButtonLink;
