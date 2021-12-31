import React from "react";
import header from "../assets/styles/jss/header";
import { createUseStyles } from "react-jss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaAngleDoubleDown } from "react-icons/fa";

const Header = ({ data }) => {
  const useStyles = createUseStyles(header);
  const classes = useStyles();

  return (
    <div class="area" id="header">
      <div className={classes.generalDiv}>
        <p className={classes.letras}>{data.welcomeTitle}</p>
        <h2 className={classes.nameTitle}>
          {data.name}{" "}
          <span className={classes.surnameTitle}>{data.surname}</span>
        </h2>
        <p className={classes.letras}>{data.descriptionTitle}</p>
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>


        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          
        <FaAngleDoubleDown className="scroll-down"/>
         
        </Link>
      </div>
    </div>
  );
};

export default Header;
