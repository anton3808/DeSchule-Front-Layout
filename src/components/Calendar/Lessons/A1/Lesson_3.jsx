import React, {useState} from 'react'
import { ProgressBar } from 'react-line-progress-bar';
import s from '../Lessons.module.css';

import videoIntro from '../../../../assets/images/videoIntro.png';
import buttonIntro from '../../../../assets/images/buttonIntro.png';
import circleIntroPink from '../../../../assets/images/circleIntroPink.png';
import circleIntroSilver from '../../../../assets/images/circleIntroSilver.png';


import titleIcon from '../../../../assets/images/titleIcon.png';

import videoMedia from '../../../../assets/images/videoMedia.png';

import stoneDownTitle from '../../../../assets/images/stoneDownTitle.png';
import BlockIntro from './Components/BlockIntro';
import BlockMediaTask from './Components/BlockMediaTask';
import FooterLesson from './Components/FooterLesson';



const Lesson_3 = (props) => {

  return (
    <div className={s.wrapperLesson}>
        
        <div className={s.progressBarWrapper}>
            <span className={s.progressBarWrapperTitle}>Етапи уроку:</span>

            <div className={s.progressBar}>
                <div className={s.wrapperProgressBar_block} style={{width: "20%"}}>
                    <h5 className={s.progressBar_title}>Intro</h5>
                    <div className={s.progressBar_block}>
                        <span className={s.progressBar_block_line} id={s.first_progressBar_block_line}></span>
                        <span className={s.progressBar_block_active} id={s.first_progressBar_block_active} style={{width: "85%"}}></span>
                    </div>
                    
                </div>

                <div className={s.wrapperProgressBar_block} style={{width: "20%"}}>
                    <h5 className={s.progressBar_title}>Перевірка тексту</h5>
                    <div className={s.progressBar_block}>
                        <span className={s.progressBar_block_line}></span>
                        <span className={s.progressBar_block_active} style={{width: "0%"}}></span>
                    </div>
                </div>

                <div className={s.wrapperProgressBar_block} style={{width: "20%"}}>
                    <h5 className={s.progressBar_title}>Лексика</h5>
                    <div className={s.progressBar_block}>
                        <span className={s.progressBar_block_line}></span>
                        <span className={s.progressBar_block_active} style={{width: "0%"}}></span> 
                    </div>
                </div>

                <div className={s.wrapperProgressBar_block} style={{width: "20%"}}>
                    <h5 className={s.progressBar_title}>Граматика</h5>
                    <div className={s.progressBar_block}>
                        <span className={s.progressBar_block_line}></span>
                        <span className={s.progressBar_block_active} style={{width: "0%"}}></span>
                    </div>
                </div>

                <div className={s.wrapperProgressBar_block} style={{width: "20%"}}>
                    <h5 className={s.progressBar_title}>Медіа</h5>
                    <div className={s.progressBar_block}>
                        <span className={s.progressBar_block_line} id={s.last_progressBar_block_line}></span>
                        <span className={s.progressBar_block_active} id={s.last_progressBar_block_line} style={{width: "0%"}}></span>
                    </div>
                </div>

            </div>
        </div>


        <h1 className={s.titleOfLesson}>Урок 3</h1>


        <BlockIntro />

        <BlockMediaTask />

        <FooterLesson />

    </div>
  )

}


export default Lesson_3;