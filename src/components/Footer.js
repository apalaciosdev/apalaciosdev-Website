import React from 'react'

import footer from "../assets/styles/jss/footer";
import { createUseStyles } from "react-jss";
import Icon from './Icon';

const Footer = () => {
  const useStyles = createUseStyles(footer);
  const css = useStyles();
  return (
    <footer className={css.divFooter}>
      <p>footer</p>
      <Icon iconType={'github'}/>
      <Icon iconType={'linkedin'}/>
      <Icon iconType={'mail'}/>
    </footer>
  )
}

export default Footer
