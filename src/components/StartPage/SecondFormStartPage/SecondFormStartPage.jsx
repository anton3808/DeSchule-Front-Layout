import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";
import photoSecondForm from '../../../assets/images/photoSecondForm.png';
import flagForm from '../../../assets/images/flagForm.png';
import btnBanner from '../../../assets/images/btnBanner.png';

const SecondFormStartPage = () => {
  
        
            
        
  return (
    
    <div className={s.secondFormWrapper}>
      <div className={s.leftVoice}>

        <img className={s.photoSecondForm} src={photoSecondForm} alt="" />
        <img className={s.flagForm} src={flagForm} />

        <h1>5</h1>
        <h4>уроків</h4>
        <h3>БЕЗКОШТОВНО!</h3>
        
      </div>

      <div className={s.rightForm}>
        <h2>Спробуй просто зараз!</h2>
        <span>Залиши заявку і ми звяжемось з тобою найближчим часом!</span>
        <input type="text" value="Ваше ім’я"/>
        <input type="text" value="Номер телефону"/>

        <div className={s.regisButton}>
          <img className={s.btnStartStudy} src={btnBanner} />
          <span>Розпочати навчання</span>
        </div>

      </div>
    </div>
  );

}


export default SecondFormStartPage;