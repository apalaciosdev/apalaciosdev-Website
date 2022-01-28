import React from 'react'

import projects from "../assets/styles/jss/projects";
import { createUseStyles } from "react-jss";
import card from '../assets/styles/jss/card';

const Card = ({title, description, img, imgMobile, url}) => {
  const useStyles = createUseStyles(card);
  const css = useStyles();

  return (
    <div className={css.generalDivCard}>
      <h2 className={css.titleCard}>{title}</h2>
      <div className={css.divCard}>
        <div className={css.imagesCard}>
          <img src={`/images/${img}`} alt="" className={css.imgCard} onClick={() => (window.open(url))}/>
          <img src={`/images/${imgMobile}`} alt="" className={css.imgMobileCard} onClick={() => (window.open(url))}/>
        <p className={css.textCard}>{description}</p>
        </div>
        <h3 className={css.tecnologiesCard}>{title}</h3>
      </div>
    </div>
  )
}

export default Card
