import React from "react";
import { FaGithub,} from "react-icons/fa";
import { BiCodeAlt } from "react-icons/bi";

const ButtonLink = ({ type }) => {
  const name = type;
  return (
    <div>
      {(() => {
        switch (name) {
          case "github":
            return  <button><FaGithub/> Github</button>;

          case "code":
            return <button><BiCodeAlt/> Projects</button>;

          default:
            return <div>You are a User.</div>;
        }
      })()}
    </div>
  );
};

export default ButtonLink;
