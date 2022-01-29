import React from 'react'

import { createUseStyles } from "react-jss";
import card from '../assets/styles/jss/card';
import Icon from './Icon';

const Card = ({title, description, img, imgMobile, url, tecnologies}) => {
  const useStyles = createUseStyles(card);
  const css = useStyles();
  
  return (
    <div className={css.generalDivCard}>
      <h2 className={css.titleCard} data-aos="fade-right">{title}</h2>
      <div className={css.divCard} data-aos="fade-left">
        <div className={css.imagesCard}>
          <img src={`/images/${img}`} alt="" className={css.imgCard} onClick={() => (window.open(url))}/>
          <img src={`/images/${imgMobile}`} alt="" className={css.imgMobileCard} onClick={() => (window.open(url))}/>
          <p className={css.textCard}>{description}</p>
        </div>
        <h3 className={css.tecnologiesCard}>{title}</h3>
        <div>
          {tecnologies.map(info => (
            <Icon iconType={info} bg={'grey'} size={30}/>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Card
