import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";
import Modal from 'react-modal';

import photoAboutTest from '../../../assets/images/StartPage/photoAboutTest.svg';
import btnStartTest from '../../../assets/images/StartPage/testBtn-StartTest.svg';
import uderlineStartTest from '../../../assets/images/StartPage/testBtn-Underline.svg';


import btnBanner from '../../../assets/images/StartPage/bannerBtn-StartStudy.svg';
// import uniqueTechniqueUnderline from '../../../assets/images/StartPage/uniqueTechnique-Underline.svg';

// const customStyles = {
//   content: {
//     top: '50%',
//     left: '50%',
//     right: 'auto',
//     bottom: 'auto',
//     marginRight: '-50%',
//     transform: 'translate(-50%, -50%)',
//   },
// };

const BlockAboutTest = () => {
  
        
  return (
    
    <div id={'aboutTest'} className={s.blockAboutTest}>

      <div className={s.blockAboutTestText}>
        <h3>Тест для визначення рівня</h3>

        <img className={s.uderlineStartTest} src={uderlineStartTest} />

        <p>Пройдіть безкоштовний швидкий тест для визначення рівня володіння мовою.</p>
        <p>Тест складається з 10 питань з можливістю обрати одну з запропонованих відповідей.</p>

        <div className={s.line}></div>

        <p>Результати оцінювання ви отримаєте одразу після завершення тесту.</p>
        <p>Також після завершення тестування, у вас буде можливість отримати результати на вашу особисту електронну адресу.</p>

        <NavLink to="/test">
          <div className={s.btnStartTest}>
            <img src={btnStartTest} />
            <span>Розпочати тестування</span>
          </div>
        </NavLink>

      </div>

      <img className={s.blockAboutTestPhoto} src={photoAboutTest}  />

      {/* <div className={s.blockAboutTestPhoto}>
        
      </div> */}
      
    </div>
  );

}


export default BlockAboutTest;