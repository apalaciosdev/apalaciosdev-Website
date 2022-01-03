import React from "react";

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

import icon from "../assets/styles/jss/icon";
import { createUseStyles } from "react-jss";



const Icon = ({iconType, bg, bgHover}) => {
  const props = {bg, bgHover}

  const useStyles = createUseStyles(icon);
  const css = useStyles(props);

  return (
    <div>
      {(() => {
        switch (iconType) {
          case "github":
            return (
              <IconContext.Provider value={{className: css.icon}}>
                <FaGithub />
              </IconContext.Provider>
            );

          case "code":
            return (
              <IconContext.Provider value={{className: css.icon}}>
                <BiCodeAlt />
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
