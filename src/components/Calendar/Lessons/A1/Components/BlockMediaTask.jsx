import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import videoMedia from '../../../../../assets/images/videoMedia.png';
import circleIntroPink from '../../../../../assets/images/circleIntroPink.png';
import circleIntroSilver from '../../../../../assets/images/circleIntroSilver.png';

import titleIcon from '../../../../../assets/images/titleIcon.png';

const BlockMediaTask = (props) => {


  return (
        <div className={s.blockMediaTask}>
            <img className={s.circleIntroPink} src={circleIntroPink} alt="" />
            <img className={s.circleIntroSilver} src={circleIntroSilver} alt="" />

            <div className={s.titleHeader}>
                <img src={titleIcon} className={s.titleIcon} alt="" />
                <h2>Перегляньте відео та дайте відповіді на запитання</h2>
            </div>
            
            <p className={s.titleHeaderText}>Запишіть німецькою, що бачите на картинці</p>
            
            <div className={s.blockMediaTaskContent}>
                <img src={videoMedia} className={s.videoMedia} alt="" />

                <div className={s.mediaQuestions}>
        
                    <div className={s.giveAnswersMedia}>
                        <h4> - Was ist er von Beruf? </h4>
                        <textarea type="text" placeholder='Дайте відповідь на запитання'/>
                    </div>

                    <div className={s.giveAnswersMedia}>
                        <h4> - Was ist er von Beruf? </h4>
                        <textarea type="text" placeholder='Дайте відповідь на запитання'/>
                    </div>

                    <div className={s.giveAnswersMedia}>
                        <h4> - Was ist er von Beruf? </h4>
                        <textarea type="text" placeholder='Дайте відповідь на запитання'/>
                    </div>
                         
                </div>     
            </div>
        </div>

  )
}


export default BlockMediaTask;