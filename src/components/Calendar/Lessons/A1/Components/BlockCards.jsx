import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import photoCard from '../../../../../assets/images/photoCard.png';
import buttonCard from '../../../../../assets/images/buttonCard.png';
import volumeCard from '../../../../../assets/images/volumeCard.png';
import circlePinkCard from '../../../../../assets/images/circlePinkCard.png';
import circleGreyCard from '../../../../../assets/images/circleGreyCard.png';
import rowBack from '../../../../../assets/images/rowBack.png';
import rowForwars from '../../../../../assets/images/rowForwars.png';

const BlockCards = (props) => {


  return (
      <div>
        <div className={s.blockCards}>
            <img src={circleGreyCard} className={s.circleGreyCard} alt="" />
            <img src={circlePinkCard} className={s.circlePinkCard} alt="" />   
            <img src={rowBack} className={s.rowBack} alt="" />   
            <img src={rowForwars} className={s.rowForwars} alt="" />   
            
            <h1>Переклади слово на німецьку:</h1>

            <div className={s.currentCard}>
                <img src={photoCard} className={s.photoCard} alt="" />
                <h4 className={s.translateToUkraine}>???</h4>

                <input type="text" placeholder='Введіть слово німецькою' />

                <div className={s.checkAnswear}>
                    <span className={s.hintCard}>Підказка</span>
                    <div className={s.buttonCard}>
                        <span>Перевірити</span>
                        <img src={buttonCard} alt="" />
                    </div>
                    <img src={volumeCard} className={s.volumeCard} alt="" />
                </div>

            </div>
        </div>



        <div className={s.blockCards}>
            <img src={circleGreyCard} className={s.circleGreyCard} alt="" />
            <img src={circlePinkCard} className={s.circlePinkCard} alt="" />   
            <img src={rowBack} className={s.rowBack} alt="" />   
            <img src={rowForwars} className={s.rowForwars} alt="" />   
            
            <h1>Переклади слово на німецьку:</h1>

            <div className={s.currentCard}>
                <img src={photoCard} className={s.photoCard} alt="" />
                <h4 className={s.translateToUkraine}>Студент</h4>

                <input type="text" placeholder='Введіть слово німецькою' />

                <div  className={s.checkAnswear}>
                    <span>Оберіть правильний варіант :</span>
                    <img src={volumeCard} className={s.volumeCard} alt="" />
                </div>

                <div className={s.singleChoice}>
                    <div className={s.choiceWordFirst}>der Student</div>
                    <div className={s.choiceWordSecond}>die Studentin</div>
                    <div className={s.choiceWordThird}>die Studenten</div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default BlockCards;