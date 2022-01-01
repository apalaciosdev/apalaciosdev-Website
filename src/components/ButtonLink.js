import React from "react";
import { FaGithub,} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";


import buttonLink from '../assets/styles/jss/buttonLink'
import {createUseStyles} from 'react-jss'
import { Colors } from '../assets/styles/colors';
import { IconContext } from "react-icons";
import Icon from './Icon';



const ButtonLink = ({type, colorType}) => {
  console.log(colorType)
  const useStyles = createUseStyles(buttonLink);
  const css = useStyles(colorType);
  
  return (
    <div>
      {(() => {
        switch (type) {
          case "github":
            return  <button className={css.button}>
              <Icon iconType={"github"}/>
            
              
              Github</button>;

          case "code":
            return <button className={css.button}>
              <IconContext.Provider value={{ color: "white", size: '25px' }}>
              <BiCodeAlt/> 
                
            </IconContext.Provider>
              Projects</button>;

          default:
            return <div>You are a User.</div>;
        }
      })()}
    </div>
  );
};

export default ButtonLink;
