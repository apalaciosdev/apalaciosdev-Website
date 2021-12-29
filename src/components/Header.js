import React from 'react'
import header from '../assets/css/header'
import {createUseStyles} from 'react-jss'

const Header = ({data}) => {
  const useStyles = createUseStyles(header);
  const classes = useStyles();
  

  return (
    <div>
      <p className={classes.letras}>{data.welcomeTitle}</p>
      <p className='name'>{data.name}</p>
      <p>{data.descriptionTitle}</p>
    </div>
  )
}

export default Header
