import React from 'react';
import s from './Courses.module.css';

import searchNewsButtonPhoto from '../../assets/images/searchNewsButtonPhoto.png';
import additionalTopicsPhoto from '../../assets/images/additionalTopicsPhoto.png';
import deschuleShopItemPhoto from '../../assets/images/deschuleShopItemPhoto.png';

import stoneDownTitle from '../../assets/images/stoneDownTitle.png';
import DeschuleShop from './DeschuleShop';


const AdditionalTopics = (props) => {
  return (

      <div className={s.blockAdditionalTopicsWrapper}>
        <div className={s.searchAdditionalTopicsInput}>
          <input type="text" placeholder='Введіть слово для пошуку' />
          <div className={s.searchAdditionalTopicsButton}>
            <img src={searchNewsButtonPhoto} alt="" />
          </div>
        </div>

        <h2>Обери додаткові теми для вивчення:</h2>

        <div className={s.additionalTopicsWrapper}>
          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>

          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>

          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>

          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>

          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>

          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>

          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>

          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>

          <div className={s.additionalTopics}>
            <img src={additionalTopicsPhoto} alt="" />
            <h3>Як першому розпочати діалог</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
            <p>Вартість теми:</p>
          </div>
        </div>
      </div>
  )
}


export default AdditionalTopics;