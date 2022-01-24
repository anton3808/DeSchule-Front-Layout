import React from 'react'; 
import s from '../News.module.css';

import searchNewsButtonPhoto from '../../../assets/images/searchNewsButtonPhoto.png';

import newsPhoto_1 from '../../../assets/images/newsPhoto_1.png';
import comentarIcon from '../../../assets/images/comentarIcon.png';
import commentUserPhoto from '../../../assets/images/commentUserPhoto.png';
import commentLikeActive from '../../../assets/images/commentLikeActive.png';
import commentForCommentUserPhoto from '../../../assets/images/commentForCommentUserPhoto.png';
import commentForCommentLike from '../../../assets/images/commentForCommentLike.svg';

import myCommentUserPhoto from '../../../assets/images/myCommentUserPhoto.png';

import stoneDownTitle from '../../../assets/images/stoneDownTitle.png';

import checkDialogButtonPhoto from '../../../assets/images/checkDialogButtonPhoto.png';

// import newsPhoto_2 from '../../assets/images/newsPhoto_2.png';
// import newsPhoto_3 from '../../assets/images/newsPhoto_3.png';
// import newsPhoto_4 from '../../assets/images/newsPhoto_4.png';
// import newsPhoto_5 from '../../assets/images/newsPhoto_5.png';
// import newsPhoto_6 from '../../assets/images/newsPhoto_6.png';


let CurrentNews = (props) => {

  return (
    <div className={s.pageCurrentNewsWrapper}>

      <div className={s.currentNews}>
        <img src={newsPhoto_1} alt="" />
        <div className={s.currentNewsContent}>
          <h1>6 способів краще запамятовувати вивчений матеріал</h1>
          <div className={s.publishedTime}>
            <span className={s.publishedTimeDate}>18.09.2020</span>
            <span className={s.publishedTimeHours}>13:47</span>
          </div>

          <p>Існує декілька прийомів для того, щоб краще запам’ятовувати інфорацію. Але передусім потрібно визначити, який саме вид пам’яті переважає саме у вас:
              <br />
              <br />
            - образна пам’ять (до неї входять зорова, слухова, дотикова, нюхова і смакова);
            <br />
            - словесно-логічна (думки, поняття, формулювання та їх логічні взаємозв’язки);
            <br />
            - рухова (також моторна і кінестетична);
            <br />
            - емоційна (заснована на почуттях).
            <br />
            <br />
            Звичайно, варто надавати перевагу провідному виду пам’яті, однак для ідеального запам’ятовування краще провести об’єкт усіма основними каналами сприйняття та утримання інформації.
            <br />
            <br />
            Наприклад, для щоб запам’ятати тригонометричні формули, треба підключити словесно-логічну пам’ять. </p>
        
        </div>
      </div>




      <div className={s.blockCommentsWrappers}>
          <div className={s.commentsTitle}>
            <img src={comentarIcon} alt="" />
            <h3>Коментарі</h3>
          </div>


          <div className={s.blockComments}>


            <div className={s.myCommentWrapper}>
              <img src={myCommentUserPhoto} alt="" />

              <div className={s.myCommentContent}>
                <div className={s.myCommentContentText}>
                  <h5>Андрій Андрієнко</h5>
                  <textarea name="" id="" cols="30" rows="10" placeholder='Залишити коментар ...'></textarea>
                </div>
                
                <div className={s.myCommentContentOptions}>
                  <div className={s.checkDialogButton}>
                    <img src={checkDialogButtonPhoto} alt="" />
                    <span>Коментувати</span>
                  </div>
                </div>
              </div>
            </div>



            <div className={s.commentWrapper}>
              <img src={commentUserPhoto} alt="" />

              <div className={s.commentContent}>
                <div className={s.commentContentText}>
                  <h5>Тарас</h5>
                  <p>Зорова пам’ять спрацює, якщо об’єкт буде завжди перед очима: треба розвісити усюди 
                    таблиці з формулами й основними значеннями, графіки функцій, приклади задач тощо. 
                    Зорова й слухова в комплексі працюють ще краще, наприклад викладач може паралельно 
                    розповісти і показати основний матеріал з цієї теми. </p>
                </div>
                
                <div className={s.commentContentOptions}>
                  <div className={s.publishedTime}>
                    <span className={s.publishedTimeDate}>18.09.2020</span>
                    <span className={s.publishedTimeHours}>13:47</span>
                  </div>

                  <div className={s.commentButtons}>
                    <div className={s.likeButtonIcon}>
                      <img src={commentLikeActive} alt="" />
                      <span>Подобається</span>
                    </div>

                    <span className={s.commentButtonText}>Коментувати</span>
                  </div>
                </div>




                <div className={s.commentForCommentWrapper}>
                  <img src={commentForCommentUserPhoto} alt="" />

                  <div className={s.commentForCommentContent}>
                    <div className={s.commentForCommentContentText}>
                      <h5>Андрій Андрієнко</h5>
                      <p><span>@Тарас</span> Зорова пам’ять спрацює, якщо об’єкт буде завжди перед очима: треба розвісити усюди 
                        таблиці з формулами й основними значеннями, графіки функцій, приклади задач тощо. 
                        Зорова й слухова в комплексі працюють ще краще, наприклад викладач може паралельно 
                        розповісти і показати основний матеріал з цієї теми. </p>
                    </div>
                    
                    <div className={s.commentForCommentContentOptions}>
                      <div className={s.publishedTime}>
                        <span className={s.publishedTimeDate}>3 тижні тому</span>
                        {/* <span className={s.publishedTimeHours}>13:47</span> */}
                      </div>

                      <div className={s.commentForCommentButtons}>
                        <div className={s.likeButtonIcon}>
                          <img src={commentForCommentLike} alt="" />
                          <span>Подобається</span>
                        </div>

                        <span className={s.commentForCommentButtonText}>Коментувати</span>
                      </div>
                    </div>
                  </div>
                </div>



                <div className={s.commentForCommentWrapper}>
                  <img src={commentForCommentUserPhoto} alt="" />

                  <div className={s.commentForCommentContent}>
                    <div className={s.commentForCommentContentText}>
                      <h5>Андрій Андрієнко</h5>
                      <p><span>@Тарас</span> Зорова пам’ять спрацює, якщо об’єкт буде завжди перед очима: треба розвісити усюди 
                        таблиці з формулами й основними значеннями, графіки функцій, приклади задач тощо. 
                        Зорова й слухова в комплексі працюють ще краще, наприклад викладач може паралельно 
                        розповісти і показати основний матеріал з цієї теми. </p>
                    </div>
                    
                    <div className={s.commentForCommentContentOptions}>
                      <div className={s.publishedTime}>
                        <span className={s.publishedTimeDate}>3 тижні тому</span>
                        {/* <span className={s.publishedTimeHours}>13:47</span> */}
                      </div>

                      <div className={s.commentForCommentButtons}>
                        <div className={s.likeButtonIcon}>
                          <img src={commentForCommentLike} alt="" />
                          <span>Подобається</span>
                        </div>

                        <span className={s.commentForCommentButtonText}>Коментувати</span>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>




            <div className={s.commentWrapper}>
              <img src={commentUserPhoto} alt="" />

              <div className={s.commentContent}>
                <div className={s.commentContentText}>
                  <h5>Тарас</h5>
                  <p>Зорова пам’ять спрацює, якщо об’єкт буде завжди перед очима: треба розвісити усюди 
                    таблиці з формулами й основними значеннями, графіки функцій, приклади задач тощо. 
                    Зорова й слухова в комплексі працюють ще краще, наприклад викладач може паралельно 
                    розповісти і показати основний матеріал з цієї теми. </p>
                </div>
                
                <div className={s.commentContentOptions}>
                  <div className={s.publishedTime}>
                    <span className={s.publishedTimeDate}>18.09.2020</span>
                    <span className={s.publishedTimeHours}>13:47</span>
                  </div>

                  <div className={s.commentButtons}>
                    <div className={s.likeButtonIcon}>
                      <img src={commentLikeActive} alt="" />
                      <span>Подобається</span>
                    </div>

                    <span className={s.commentButtonText}>Коментувати</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>



        <footer>
            <h1 className={s.deschuleTitle}>DESCHULE</h1>
            <img src={stoneDownTitle} className={s.stoneDownTitle}/>
        </footer>


{/* 
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

    </div> */}
    </div>
  );
}


export default CurrentNews;
