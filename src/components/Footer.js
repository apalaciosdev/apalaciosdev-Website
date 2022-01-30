import React from 'react'

import footer from "../assets/styles/jss/footer";
import { createUseStyles } from "react-jss";
import Icon from './Icon';
import { Link, animateScroll as scroll } from "react-scroll";
import { FaAngleDoubleDown, FaGithub } from "react-icons/fa";

const Footer = ({data}) => {
  const useStyles = createUseStyles(footer);
  const css = useStyles();
  return (
    <footer className={css.generalDivFooter}>
      <Link
        activeClass="active"
        to="header"
        spy={true}
        smooth={true}
        offset={0}
        duration={2500}
        className={css.upFooter}
      >
        <Icon iconType={'arrowup'} size={30} bg={'deadGrey'} className={css.iconFooter}/>
      </Link>
      <div className={css.contactDivFooter}><p className={css.contactFooter}>Contact me</p></div>
      <div className={css.divFooter}>
        <button className={css.buttonFooter} onClick={() => (window.open(data.github))}>
          <Icon iconType={'github'} size={'30'} bgHover={'grey'}/>
        </button>
        <button className={css.buttonFooter} onClick={() => (window.open(data.linkedin))}>
          <Icon iconType={'linkedin'} size={'30'} bgHover={'grey'}/>
        </button>
        <button className={css.buttonFooter} onClick={() => (window.open(data.mailTo))}>
          <Icon iconType={'mail'} size={'30'} bgHover={'grey'}/>
        </button>
      </div>
      <p>Developed in React by apalacios.dev</p>

    </footer>
  )
}

export default Footer
