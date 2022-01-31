import React from "react";
import {data} from '../../resumeData.js'

import buttonLink from '../../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'
import Icon from './../Icon';



const Button2 = ({type, colorType, buttonType, iconBg, iconBgHover, text}) => {
  const useStyles = createUseStyles(buttonLink);
  const css = useStyles(colorType);

  
  return (
    <div>
      {(() => {
        switch (type) {
          case "github":
            return(  
              <button className={css.type2} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"code"} bg={iconBg} bgHover={iconBgHover}/>
                <p className={css.aButton}>Code</p>
              </button>
            );

          case "code":
            return (
              <button className={css.type2} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"github"} bg={iconBg} bgHover={iconBgHover}/>
                <p className={css.aButton}>Github</p>
              </button>
            );
          
          case "linkedin":
            return (
              <button className={css.type2} onClick={() => (window.open(data.links.linkedin))}>
                <Icon iconType={"linkedin"} bg={iconBg} bgHover={iconBgHover}/>
                <p className={css.aButton}>LinkedIn</p>
              </button>
            );
            
            case "cv":
              return (
                <button className={css.type3} onClick={() => (window.open("/CV-Aaron_Palacios_Olea.pdf"))}>
                <Icon iconType={"cv"} bg={iconBg} bgHover={iconBgHover}/>
                <p className={css.aButton}>{text}</p>
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
