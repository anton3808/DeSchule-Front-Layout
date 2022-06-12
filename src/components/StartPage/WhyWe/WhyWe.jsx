import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";

import trainCircle from '../../../assets/images/trainCircle.png';
import trainIcon from '../../../assets/images/StartPage/whyWe-TrainIcon.svg';

import readCircle from '../../../assets/images/readCircle.png';
import readIcon from '../../../assets/images/StartPage/whyWe-ReadIcon.svg';

import developCircle from '../../../assets/images/developCircle.png';
import developIcon from '../../../assets/images/StartPage/whyWe-DevelopIcon.svg';

import travelCircle from '../../../assets/images/travelCircle.png';
import travelIcon from '../../../assets/images/StartPage/whyWe-TravelIcon.svg';



const WhyWe = () => {
  
        
            
        
  return (
    
    <div className={s.WhyWe}>

      <div className={s.trainBlock}>
        <img className={s.trainCircle} src={ trainCircle }  />
        <img className={s.trainPhoto} src={ trainIcon }  />
        <div> <span>ТРЕНУЙ</span> ПАМ’ЯТЬ</div>
      </div>

      <div className={s.readBlock}>
        <img className={s.readCircle} src={ readCircle }  />
        <img className={s.readPhoto} src={ readIcon }  />
        <div> <span>ЧИТАЙ</span> ЛІТЕРАТУРУ</div>
      </div>

      <div className={s.developBlock}>
        <img className={s.developCircle} src={ developCircle }  />
        <img className={s.developPhoto} src={ developIcon }  />
        <div> <span>РОЗВИВАЙ</span> ВПЕВНЕНІСТЬ</div>
      </div>

      <div className={s.travelBlock}>
        <img className={s.travelCircle} src={ travelCircle }  />
        <img className={s.travelPhoto} src={ travelIcon }  />
        <div> <span>ПОДОРОЖУЙ</span> </div>
      </div>
    </div>
  );

}


export default WhyWe;