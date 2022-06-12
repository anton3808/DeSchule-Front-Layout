import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";
import Modal from 'react-modal';

import uniqueVideo from '../../../assets/images/uniqueVideo.png';
import uniqueTechniqueUnderline from '../../../assets/images/StartPage/uniqueTechnique-Underline.svg';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const UniqueTechnique = () => {
  
        
  return (
    
    <div id={'about'} className={s.uniqueTechniqueWrapper}>
      
      <div className={s.uniqueTechnique}>
        <img className={s.uniqueVideo} src={uniqueVideo}  />

        <div className={s.uniqueTechniqueText}>
          <h3>Унікальна методика</h3>

          <img className={s.btnStartStudy} src={uniqueTechniqueUnderline} />

          <span>Техніки мнемоніки – звучить страшно, а на практиці все набагато цікавіше. 
            Це така штука, за допомогою якої можна вчити німецьку мову набагато цікавіше, 
            легше і результативніше. Тому саме про запам’ятовування слів ми сьогодні і поговоримо.</span>


          <div className={s.pagination}>
            
          </div>
        </div>
      </div>
      


      <h2>DESCHULE</h2>
    </div>
  );

}


export default UniqueTechnique;