import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const NavLink = ({ active, name, to }) => {
  return (
    <div>
      <Link
        to={to}
        smooth={true}
        duration={1000}
        activeClass={active ? 'active' : ''}
        spy={true}
        offset={-70}
        duration={1000}
      >
        {name}
      </Link>
    </div>
  );
};

export default NavLink;
