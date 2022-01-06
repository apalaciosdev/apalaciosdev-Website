import React from "react";
import { FaGithub,} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

import {data} from '../../resumeData.js'


import buttonLink from '../../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'
import { Colors } from '../../assets/styles/colors';
import { IconContext } from "react-icons";
import Icon from './../Icon';



const Button2 = ({type, colorType, buttonType, iconBg, iconBgHover}) => {
  console.log(colorType)
  const useStyles = createUseStyles(buttonLink);
  const css = useStyles(colorType);

  var butt = buttonType
  
  
  return (
    <div>
      {(() => {
        switch (type) {
          case "github":
            return(  
              <button className={css.type2} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"code"} bg={iconBg} bgHover={iconBgHover}/>
                <a className={css.aButton}>Code</a>
              </button>
            );

          case "code":
            return (
              <button className={css.type2} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"github"} bg={iconBg} bgHover={iconBgHover}/>
                <a className={css.aButton}>Github</a>
              </button>
            );
          
          case "linkedin":
            return (
              <button className={css.type2} onClick={() => (window.open(data.links.linkedin))}>
                <Icon iconType={"linkedin"} bg={iconBg} bgHover={iconBgHover}/>
                <a className={css.aButton}>LinkedIn</a>
              </button>
            );

          default:
            return(
              <button className={css.type2} onClick={() => (window.open(data.links.github))}>
                
              </button>
            );
        }
      })()}
    </div>
  );
};

export default Button2;
