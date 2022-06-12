import React from 'react';
import s from '../StartPage.module.css';
import '../Slider.css';

import uderlineStartTest from '../../../assets/images/StartPage/testBtn-Underline.svg';

import reviewUserPhoto from '../../../assets/images/StartPage/reviewUserPhoto.png';


import reviewsCircleGrey from '../../../assets/images/StartPage/reviewsCircleGrey.svg';
import reviewsCircleRed from '../../../assets/images/StartPage/reviewsCircleRed.svg';



import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';


import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const ReviewsBlock = () => {
  
        
  return (
    
    <div className={s.reviewsBlock}>

      <h3>Що про нас говорять</h3>
      <img className={s.uderlineReviewsBlock} src={uderlineStartTest} />

      <img src={reviewsCircleRed} className={s.reviewsCircleRed} />
      
      <h2>BEMERKUNGEN</h2>

      <img src={reviewsCircleGrey} className={s.reviewsCircleGrey} />
      

      <div className={s.reviewsBlockSlider}>

      <Swiper
      // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={40}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <div className={s.reviewLeftSlide}>
            <div className={s.reviewUserData} >
              <img src={reviewUserPhoto} />
              <h4>Коля Мут</h4>
            </div>
            

            <p>Замечательная школа, с отличными учителями и самим персоналом Хожу уже два года на 
              эти курсы и еще не разу не жалела о том что пошла на них. Мой уровень английского вырос, 
              что меня особенно радует. А раз вырос уровень понимания языка, то это означает, 
              что методика этой школы эффективная. </p>

            <span className={s.reviewDateOfPublishing}>2 червня 2020 в 13:26 </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.reviewCenterSlide}>
            <div className={s.reviewUserData} >
              <img src={reviewUserPhoto} />
              <h4>Антон Садловський</h4>
            </div>

            <p>Очень странно, что люди, которые приходят, отучатся в школе не один месяц, улыбаются
              преподавателям, а потом пишут такую ерунду. Лично я, изучая англ. яз в Ай кью центре 
              наконец-то научилась формулировать свои мысли не только письменно, что немало важно 
              для меня. Не понимаю смысла углубленно изучать грамматику, если вы научитесь правильно 
              говорить, то естественно вы будете знать как правильно писать. И по поводу 
              преподавателей - бред, потому что абсолютно спокойно идут на то, чтобы вел один, 
              понравившийся преподаватель, факт в том,что это просто неэффективно. Школе респект!</p>

            <span className={s.reviewDateOfPublishing}>2 червня 2020 в 13:26 </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.reviewRightSlide}>
            <div className={s.reviewUserData} >
              <img src={reviewUserPhoto} />
              <h4>Коля Мут</h4>
            </div>

            <p>Замечательная школа, с отличными учителями и самим персоналом Хожу уже два года на 
              эти курсы и еще не разу не жалела о том что пошла на них. Мой уровень английского вырос, 
              что меня особенно радует. А раз вырос уровень понимания языка, то это означает, 
              что методика этой школы эффективная. </p>
            
            <span className={s.reviewDateOfPublishing}>2 червня 2020 в 13:26 </span>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className={s.reviewLeftSlide}>
            <div className={s.reviewUserData} >
              <img src={reviewUserPhoto} />
              <h4>Коля Мут</h4>
            </div>
            

            <p>Замечательная школа, с отличными учителями и самим персоналом Хожу уже два года на 
              эти курсы и еще не разу не жалела о том что пошла на них. Мой уровень английского вырос, 
              что меня особенно радует. А раз вырос уровень понимания языка, то это означает, 
              что методика этой школы эффективная. </p>

            <span className={s.reviewDateOfPublishing}>2 червня 2020 в 13:26 </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.reviewCenterSlide}>
            <div className={s.reviewUserData} >
              <img src={reviewUserPhoto} />
              <h4>Антон Садловський</h4>
            </div>

            <p>Очень странно, что люди, которые приходят, отучатся в школе не один месяц, улыбаются
              преподавателям, а потом пишут такую ерунду. Лично я, изучая англ. яз в Ай кью центре 
              наконец-то научилась формулировать свои мысли не только письменно, что немало важно 
              для меня. Не понимаю смысла углубленно изучать грамматику, если вы научитесь правильно 
              говорить, то естественно вы будете знать как правильно писать. И по поводу 
              преподавателей - бред, потому что абсолютно спокойно идут на то, чтобы вел один, 
              понравившийся преподаватель, факт в том,что это просто неэффективно. Школе респект!</p>

            <span className={s.reviewDateOfPublishing}>2 червня 2020 в 13:26 </span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.reviewRightSlide}>
            <div className={s.reviewUserData} >
              <img src={reviewUserPhoto} />
              <h4>Коля Мут</h4>
            </div>

            <p>Замечательная школа, с отличными учителями и самим персоналом Хожу уже два года на 
              эти курсы и еще не разу не жалела о том что пошла на них. Мой уровень английского вырос, 
              что меня особенно радует. А раз вырос уровень понимания языка, то это означает, 
              что методика этой школы эффективная. </p>
            
            <span className={s.reviewDateOfPublishing}>2 червня 2020 в 13:26 </span>
          </div>
        </SwiperSlide>

        </Swiper>
        
      </div>
      

    </div>
  );

}


export default ReviewsBlock;