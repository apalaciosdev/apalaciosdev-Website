import React from "react";

import { IconContext } from "react-icons";
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaAngleDoubleUp } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { AiFillFileMarkdown } from "react-icons/ai";
import { SiAdobephotoshop, SiStyledcomponents, SiJss, SiMongodb, SiNextdotjs, SiJavascript, SiAdobepremierepro, SiExpress } from "react-icons/si";

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
          
          case "styled-components":
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
          
          case "nodejs":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <FaNodeJs size={size}/>
            </IconContext.Provider>
          );
          
          case "express":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <SiExpress size={size}/>
            </IconContext.Provider>
          );
          
          case "mail":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <IoMdMail size={size}/>
            </IconContext.Provider>
          );
          
          case "arrowup":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <FaAngleDoubleUp size={size}/>
            </IconContext.Provider>
          );
          
          case "mdx":
          return (
            <IconContext.Provider value={{className: css.icon}}>
              <AiFillFileMarkdown size={size}/>
            </IconContext.Provider>
          );

          default:
            return <div>icon not available</div>;
        }
      })()}
    </div>
  );
};

export default Icon;
