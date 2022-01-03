import React from "react";
import { FaGithub,} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

import {data} from '../../resumeData.js'


import buttonLink from '../../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'
import { Colors } from '../../assets/styles/colors';
import { IconContext } from "react-icons";
import Icon from './../Icon';



const Button1 = ({type, colorType, buttonType}) => {
  console.log(colorType)
  const useStyles = createUseStyles(buttonLink);
  const css = useStyles(colorType);

  
  
  return (
    <div>
      {(() => {
        switch (type) {
          case "code":
            return(  
              <button className={css.type1} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"code"}/>
                <a className={css.aButton}>Code</a>
              </button>
            );

          case "github":
            return (
              <button className={css.type1} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"github"}/>
                <a className={css.aButton}>Github</a>
              </button>
            );

          default:
            return <div>You are a User.</div>;
        }
      })()}
    </div>
  );
};

export default Button1;
