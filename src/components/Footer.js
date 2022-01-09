import React from 'react'

import footer from "../assets/styles/jss/footer";
import { createUseStyles } from "react-jss";
import Icon from './Icon';

const Footer = () => {
  const useStyles = createUseStyles(footer);
  const css = useStyles();
  return (
    <footer className={css.generalDivFooter}>
      <div className={css.divFooter}>
        <button onClick={() => (window.open('ff'))}>
          <Icon iconType={'github'} size={'30'} bgHover={'grey'}/>
        </button>
        <button onClick={() => (window.open('ff'))}>
          <Icon iconType={'linkedin'} size={'30'} bgHover={'grey'}/>
        </button>
        <button onClick={() => (window.open('ff'))}>
          <Icon iconType={'mail'} size={'30'} bgHover={'grey'}/>
        </button>
      </div>
      <p>Developed in React by apalacios.dev</p>
    </footer>
  )
}

export default Footer
