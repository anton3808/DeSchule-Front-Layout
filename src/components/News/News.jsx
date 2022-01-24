import React from 'react'; 
import s from './News.module.css';

import searchNewsButtonPhoto from '../../assets/images/searchNewsButtonPhoto.png';

import newsPhoto_1 from '../../assets/images/newsPhoto_1.png';
import newsPhoto_2 from '../../assets/images/newsPhoto_2.png';
import newsPhoto_3 from '../../assets/images/newsPhoto_3.png';
import newsPhoto_4 from '../../assets/images/newsPhoto_4.png';
import newsPhoto_5 from '../../assets/images/newsPhoto_5.png';
import newsPhoto_6 from '../../assets/images/newsPhoto_6.png';



let News = (props) => {

  return (
    <div className={s.pageNewsWrapper}>

      <div className={s.searchNewsInput}>
        <input type="text" placeholder='Введіть слово для пошуку' />
        <div className={s.searchNewsButton}>
          <img src={searchNewsButtonPhoto} alt="" />
        </div>
      </div>

      <div className={s.blockNewsWrapper}>
        <div className={`${s.newsPost} ${s.news_1}`} >
          <img src={newsPhoto_1} alt="" />
          <h3>6 способів краще запамятовувати вивчений матеріал </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className={`${s.newsPost} ${s.news_2}`}>
          <img src={newsPhoto_2} alt="" />
          <h3>Як першому розпочати діалог</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>
        <div className={`${s.newsPost} ${s.news_3}`}>
          <img src={newsPhoto_3} alt="" />
          <h3>6 способів краще запамятовувати вивчений матеріал </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
        <div className={`${s.newsPost} ${s.news_4}`}>
          <img src={newsPhoto_4} alt="" />
          <h3>6 способів краще запамятовувати вивчений матеріал </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>
        <div className={`${s.newsPost} ${s.news_5}`}>
          <img src={newsPhoto_5} alt="" />
          <h3>Новинки фільмів німецькою</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
        </div>
        <div className={`${s.newsPost} ${s.news_6}`}>
          <img src={newsPhoto_6} alt="" />
          <h3>6 способів краще запамятовувати вивчений матеріал </h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
        </div>
      </div>

    </div>
  );
}


export default News;
