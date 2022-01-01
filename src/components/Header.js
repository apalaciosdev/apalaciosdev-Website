import React from "react";
import header from "../assets/styles/jss/header";


import { createUseStyles } from "react-jss";
import { Link, animateScroll as scroll } from "react-scroll";
import { FaAngleDoubleDown, FaGithub } from "react-icons/fa";
import ButtonLink from './ButtonLink';

const Header = ({ data, buttonData }) => {
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
        
        <ButtonLink type={'github'} color={'blue'}></ButtonLink>
        <ButtonLink type={'code'} color={'red'}></ButtonLink>
      
        
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
        >
          <FaAngleDoubleDown className="scroll-down"/>
        </Link>

       {/* <ul class="circles"> 
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
        </ul>  */}


      </div>
    </div>
  );
};

export default Header;
