import React from "react";

import {data} from '../../resumeData.js'

import buttonLink from '../../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'
import Icon from './../Icon';



const Button1 = ({type, colorType, buttonType, iconBg, iconBgHover, text}) => {
  const useStyles = createUseStyles(buttonLink);
  const css = useStyles(colorType);

  return (
    <div>
      {(() => {
        switch (type) {

          case "github":
            return (
              <button className={css.type1} onClick={() => (window.open(data.links.github))}>
                <Icon iconType={"github"} bg={iconBg} bgHover={iconBgHover}/>
                <p className={css.aButton}>Github</p>
              </button>
            );
         
          case "linkedin":
            return (
              <button className={css.type1} onClick={() => (window.open(data.links.linkedin))}>
                <Icon iconType={"linkedin"} bg={iconBg} bgHover={iconBgHover}/>
                <p className={css.aButton}>LinkedIn</p>
              </button>
            );
         
          case "textType":
            return (
              <button className={css.type1} onClick={() => (window.open(data.links.linkedin))}>
                <p className={css.aButton}>{text}</p>
              </button>
            );

          default:
            return <div>Button not available</div>;
        }
      })()}
    </div>
  );
};

export default Button1;
