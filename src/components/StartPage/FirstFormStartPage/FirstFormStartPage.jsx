import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";
import circleForm from '../../../assets/images/circleForm.png';
import btnBanner from '../../../assets/images/btnBanner.png';
import flagForm from '../../../assets/images/flagForm.png';


const FirstFormStartPage = () => {
  
        
            
        
  return (
    
    <div className={s.firstForm}>

      <div className={s.infoForm}>

        <div className={s.photoForm}>

          <img className={s.circleForm} src={circleForm} />
          <img className={s.flagForm} src={flagForm} />

          <h2>5</h2>
          <h4>перших уроків</h4>
          <h3>БЕЗКОШТОВНО!</h3>

        </div>

        <div className={s.textForm}>
          <h2>Спробуй просто зараз!</h2>

          <img className={s.btnStartStudy} src={btnBanner} />

          <span>З  унікальною пропозицією на 5 безкоштовних занять  ти зможеш познайомитись з нашою школою, 
            подивитись, як проходять заняття і зрозуміти як працює наша методика.</span>
        </div>

      </div>


      <div className={s.form}>
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


export default FirstFormStartPage;