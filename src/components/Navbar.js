import React from 'react'
import navbar from '../assets/styles/jss/navbar'
import {createUseStyles} from 'react-jss'

  
const Navbar = () => {
  const useStyles = createUseStyles(navbar);
  const css = useStyles();

  return (
    <div className={css.body}>
      <ul className={css.ul}>
        <li className={css.li}>Home</li>
        <li className={css.li}>Works</li>
        <li className={css.li}>CV</li>
      </ul>
    </div>
  )
}

export default Navbar
