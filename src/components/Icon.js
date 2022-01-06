import React from "react";

import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { SiAdobephotoshop, SiStyledcomponents, SiJss, SiNextdotjs, SiMongodb, SiJavascript, SiAdobepremierepro } from "react-icons/si";

import icon from "../assets/styles/jss/icon";
import { createUseStyles } from "react-jss";



const Icon = ({iconType, bg, bgHover, size}) => {
  const props = {bg, bgHover, size}

  const useStyles = createUseStyles(icon);
  const css = useStyles(props);

  return (
    <div>
      {(() => {
        switch (iconType) {
          case "github":
            return (
              <IconContext.Provider value={{className: css.icon}}>
                <FaGithub size={size}/>
              </IconContext.Provider>
            );

          case "code":
            return (
              <IconContext.Provider value={{className: css.icon}}>
                <BiCodeAlt size={size}/>
              </IconContext.Provider>
            );
          
          case "linkedin":
            return (
              <IconContext.Provider value={{className: css.icon}}>
                <FaLinkedin size={size}/>
              </IconContext.Provider>
            );
          
          case "react":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <FaReact size={size}/>
            </IconContext.Provider>
          );
          
          case "html":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <FaHtml5 size={size}/>
            </IconContext.Provider>
          );
          
          case "css":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <FaCss3Alt size={size}/>
            </IconContext.Provider>
          );
          
          case "photoshop":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <SiAdobephotoshop size={size}/>
            </IconContext.Provider>
          );
          
          case "premierepro":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <SiAdobepremierepro size={size}/>
            </IconContext.Provider>
          );
          
          case "js":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <SiJavascript size={size}/>
            </IconContext.Provider>
          );
          
          case "mongodb":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <SiMongodb size={size}/>
            </IconContext.Provider>
          );
          
          case "styledcomponents":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <SiStyledcomponents size={size}/>
            </IconContext.Provider>
          );
          
          case "jss":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <SiJss size={size}/>
            </IconContext.Provider>
          );
          
          case "nextjs":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <SiNextdotjs size={size}/>
            </IconContext.Provider>
          );

          default:
            return <div>You are a User.</div>;
        }
      })()}
    </div>
  );
};

export default Icon;
