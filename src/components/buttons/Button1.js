import React from "react";
import { FaGithub,} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

import {data} from '../../resumeData.js'


import buttonLink from '../../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'
import { Colors } from '../../assets/styles/colors';
import { IconContext } from "react-icons";
import Icon from './../Icon';



const Button1 = ({type, colorType, buttonType, iconBg, iconBgHover, text}) => {
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
                <Icon iconType={"code"} bg={iconBg} bgHover={iconBgHover}/>
                <a className={css.aButton}>Code</a>
              </button>
            );

          case "github":
            return (
              <button className={css.type1} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"github"} bg={iconBg} bgHover={iconBgHover}/>
                <a className={css.aButton}>Github</a>
              </button>
            );
         
          case "linkedin":
            return (
              <button className={css.type1} onClick={() => (window.open(data.links.linkedin))}>
                <Icon iconType={"linkedin"} bg={iconBg} bgHover={iconBgHover}/>
                <a className={css.aButton}>LinkedIn</a>
              </button>
            );
         
          case "textType":
            return (
              <button className={css.type1} onClick={() => (window.open(data.links.linkedin))}>
                <a className={css.aButton}>{text}</a>
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
