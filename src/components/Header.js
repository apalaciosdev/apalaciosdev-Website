import React from 'react'
import header from '../assets/styles/jss/header'
import {createUseStyles} from 'react-jss'

const Header = ({data}) => {
  const useStyles = createUseStyles(header);
  const classes = useStyles();
  

  return (
      <div class="area" >
    <div className={classes.generalDiv}>
      <p className={classes.letras}>{data.welcomeTitle}</p>
      <h2 className={classes.nameTitle}>{data.name} <span className={classes.surnameTitle}>{data.surname}</span></h2>
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
    </div >
    </div>
  )
}

export default Header
