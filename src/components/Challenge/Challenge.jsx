import React from 'react';
import s from './Challenge.module.css';

import challengePhotoMan from '../../assets/images/challengePhotoMan.png';


const Challenge = (props) => {
  return (
    <div className={s.wrapperChallengePage}>
      
      <div className={s.challengeHeader}>
        <img src={challengePhotoMan} className={s.challengePhotoMan} alt="" />

        <div className={s.challengeHeaderItems}>
          <div className={s.challengeHeaderItem}>
            <div className={s.circlePoint}></div>
            <h5>Додаткові бали</h5>
          </div>

          <div className={s.challengeHeaderItem}>
            <div className={s.circlePoint}></div>
            <h5>Дух суперництва</h5>
          </div>

          <div className={s.challengeHeaderItem}>
            <div className={s.circlePoint}></div>
            <h5>Поглиблені знання</h5>
          </div>

          <div className={s.challengeHeaderItem}>
            <div className={s.circlePoint}></div>
            <h5>Подарунки</h5>
          </div>
        </div>

        <p>Це все і більше ти отрамаєш регулярно беручи участь у спеціальних змаганнях від школи Deschtule !</p>


      </div>
    </div>
  )
}

export default Challenge;