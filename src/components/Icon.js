import React from "react";

import { IconContext } from "react-icons";
import { FaGithub } from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const Icon = ({iconType}) => {

  return (
    <div>
      {(() => {
        switch (iconType) {
          case "github":
            return (
              <IconContext.Provider value={{ color: "white", size: "25px" }}>
                <FaGithub />
              </IconContext.Provider>
            );

          case "code":
            return (
              <IconContext.Provider value={{ color: "white", size: "25px" }}>
                <FaGithub />
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
