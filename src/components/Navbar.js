import React from "react";
import navbar from "../assets/styles/jss/navbar";
import { createUseStyles } from "react-jss";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const useStyles = createUseStyles(navbar);
  const css = useStyles();

  return (
    <header className={css.body}>
      <ul className={css.ul}>
        <li className={css.li}>
          <Link
            activeClass="active"
            to="header"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
            className={css.link}
          >
            Home
          </Link>
        </li>
        <li className={css.li}>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
            className={css.link}
          >
            About
          </Link>
        </li>
        <li className={css.li}>
          <Link
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={1500}
            className={css.link}
          >
            Projects
          </Link>
        </li>
      </ul>

      {/*<div className={css.body}>
          <ul className={css.ul}>
            <li className={css.li}>
              <NavLink/>
            </li>
            <li className={css.li}><Link
              className={css.link}
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
            >About</Link></li>
            <li className={css.li}>CV</li>
          </ul>
        </div>*/}
    </header>
  );
};

export default Navbar;
