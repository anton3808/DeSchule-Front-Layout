import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import titleIcon from '../../../../../assets/images/titleIcon.png';
import videoIntro from '../../../../../assets/images/videoIntro.png';
import buttonIntro from '../../../../../assets/images/buttonIntro.png';
import circleIntroPink from '../../../../../assets/images/circleIntroPink.png';
import circleIntroSilver from '../../../../../assets/images/circleIntroSilver.png';


const BlockIntro = (props) => {


  return (
    <div className={s.blockIntro}>

            <img className={s.circleIntroPink} src={circleIntroPink} alt="" />
            <img className={s.circleIntroSilver} src={circleIntroSilver} alt="" />
            
            <div className={s.titleBlockInto}>
                <img className={s.titleIcon} src={titleIcon} alt="" />
                <h3>Перегляньте відео та дайте відповіді на запитання</h3>
            </div>
            
            <p>За потреби перегляньте відео українською мовою.</p>
            
            <div className={s.introContent}>
                <img src={videoIntro} className={s.videoIntro} alt="" />

                <div className={s.introQuestions}>
                    <div>
                        <h2>НОВІ СЛОВА</h2>
                        <h4>Mein Name ist ... - Мене звуть ... </h4>
                    </div>
                    <div className={s.giveAnswers}>
                        <h2>ДАЙТЕ ВІДПОВІДІ</h2>
                        <h4>А як Вас звуть?</h4>
                        <input type="text" placeholder='Mein Name ist ...'/>
                    </div>
                    
                    <div className={s.buttonIntro}>
                        <span>Далі</span>
                        <img src={buttonIntro} alt="" />
                    </div>                
                </div>     
            </div>
        </div>

  )
}


export default BlockIntro;