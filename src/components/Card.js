import React from 'react'

import { createUseStyles } from "react-jss";
import card from '../assets/styles/jss/card';
import PopupIconHover from './PopupIconHover';

const Card = ({title, description, img, imgMobile, url, tecnologies}) => {
  const useStyles = createUseStyles(card);
  const css = useStyles();
  
  return (
    <div className={css.generalDivCard} data-aos="zoom-in-up">
      <h2 className={css.titleCard}>{title}</h2>
      <div className={css.divCard}>
        <div className={css.imagesCard}>
          <img src={`/images/${img}`} alt="" className={css.imgCard} onClick={() => (window.open(url))}/>
          <img src={`/images/${imgMobile}`} alt="" className={css.imgMobileCard} onClick={() => (window.open(url))}/>
          <p className={css.textCard}>{description}</p>
        </div>
        <div className={css.tecnologiesCard}>
          <h3 className={css.tecnologiesH3}>Technologies</h3>
          <div className={css.tecnologiesDiv}>
            {tecnologies.map(info => (
              <PopupIconHover bg={'grey'} size={45} bgHover={'darkOcean'} info={info} key={info}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
