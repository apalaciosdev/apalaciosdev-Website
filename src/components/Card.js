import React from 'react'

import projects from "../assets/styles/jss/projects";
import { createUseStyles } from "react-jss";
import card from '../assets/styles/jss/card';

const Card = ({title, description, img}) => {
  const useStyles = createUseStyles(card);
  const css = useStyles();

  return (
    <div className={css.generalDivCard}>
      <div className={css.divCard}>
        <h3 className={css.titleCard}>{title}</h3>
        <p className={css.textCard}>{description}</p>
        <img src={`/images/${img}`} alt="" className={css.imgCard}/>
      </div>
    </div>
  )
}

export default Card
