import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";

import trainCircle from '../../../assets/images/trainCircle.png';
import trainPhoto from '../../../assets/images/trainPhoto.png';

import readCircle from '../../../assets/images/readCircle.png';
import readPhoto from '../../../assets/images/readPhoto.png';

import developCircle from '../../../assets/images/developCircle.png';
import developPhoto from '../../../assets/images/developPhoto.png';

import travelCircle from '../../../assets/images/travelCircle.png';
import travelPhoto from '../../../assets/images/travelPhoto.png';



const WhyWe = () => {
  
        
            
        
  return (
    
    <div className={s.WhyWe}>

      <div className={s.trainBlock}>
        <img className={s.trainCircle} src={ trainCircle }  />
        <img className={s.trainPhoto} src={ trainPhoto }  />
        <div> <span>ТРЕНУЙ</span> ПАМ’ЯТЬ</div>
      </div>

      <div className={s.readBlock}>
        <img className={s.readCircle} src={ readCircle }  />
        <img className={s.readPhoto} src={ readPhoto }  />
        <div> <span>ЧИТАЙ</span> ЛІТЕРАТУРУ</div>
      </div>

      <div className={s.developBlock}>
        <img className={s.developCircle} src={ developCircle }  />
        <img className={s.developPhoto} src={ developPhoto }  />
        <div> <span>РОЗВИВАЙ</span> ВПЕВНЕНІСТЬ</div>
      </div>

      <div className={s.travelBlock}>
        <img className={s.travelCircle} src={ travelCircle }  />
        <img className={s.travelPhoto} src={ travelPhoto }  />
        <div> <span>ПОДОРОЖУЙ</span> </div>
      </div>
    </div>
  );

}


export default WhyWe;