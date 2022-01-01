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
        <p className={`${classes.letras} ${'animate__animated animate__fadeInRight'}`}>{data.welcomeTitle}</p>
        <h2 className={`${classes.nameTitle} ${'animate__animated animate__fadeInLeft  animate__delay-1s'}`}>
          {data.name}{" "}
          <span className={classes.surnameTitle}>{data.surname}</span>
        </h2>
        <p className={`${classes.letras} ${'animate__animated animate__fadeInUp  animate__delay-2s'}`}>{data.descriptionTitle}</p>
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
        {/* <ul class="circles">  animate__animated animate__fadeInLeft
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
        </ul> */}


      </div>
    </div>
  );
};

export default Header;
