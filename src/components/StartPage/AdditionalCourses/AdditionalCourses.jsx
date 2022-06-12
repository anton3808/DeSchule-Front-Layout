import React, { useRef } from 'react';
import s from '../StartPage.module.css';
import '../Slider.css';

import uderlineStartTest from '../../../assets/images/StartPage/testBtn-Underline.svg';
import photoAdditionalCourse_1 from '../../../assets/images/StartPage/photoAdditionalCourse_1.png';
import photoAdditionalCourse_2 from '../../../assets/images/StartPage/photoAdditionalCourse_2.png';
import photoAdditionalCourse_3 from '../../../assets/images/StartPage/photoAdditionalCourse_3.png';
import photoAdditionalCourse_4 from '../../../assets/images/StartPage/photoAdditionalCourse_4.jpg';
import photoAdditionalCourse_5 from '../../../assets/images/StartPage/photoAdditionalCourse_5.jpg';

import btnAdditionalCourse from '../../../assets/images/StartPage/btnAdditionalCourse.svg';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';


import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import ModalRegAuth from '../../ModalRegAuth/ModalRegAuth';



const customStyles = {
  overlay: {
    position: 'fixed',
    overflow: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: '9999',
    
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #875897',
    background: '#fff',
    overflowY: 'auto',
    // height: "100%",
    WebkitOverflowScrolling: 'touch',
    borderRadius: '30px',
    outline: 'none',
    padding: '40px',
    zIndex: '9999'
  },
};




const AdditionalCourses = () => {

  const [additionalCourseModalIsOpen, setAdditionalCourseModalIsOpen] = React.useState(false);

  let openAdditionalCourseModal = () => {
    setAdditionalCourseModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  let closeAdditionalCourseModal = () => {
    setAdditionalCourseModalIsOpen(false);
    document.body.style.overflow = 'unset';
  }
        


  return (
    
    <div className={s.additionalCourses}>

      <h3>Додаткові курси</h3>
      <img className={s.uderlineAdditionalCourses} src={uderlineStartTest} />


      <div className={s.additionalCoursesSlider}>

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
          <div className={s.additionalCourseBlock}>
            <h4>Математика</h4>
            <img src={photoAdditionalCourse_1} className={s.photoAdditionalCourse} />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
              nostrud amet... <span>Читати далі</span> </p>

            <div className={s.buyAdditionalCourse}>
              <span className={s.priceAdditionalCourse}>300 грн</span>

              <div className={s.btnAdditionalCourse} onClick={openAdditionalCourseModal}>
                <img src={btnAdditionalCourse} />
                <span>Купити</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.additionalCourseBlock}>
            <h4>Підготовка до ЗНО</h4>
            <img src={photoAdditionalCourse_2} className={s.photoAdditionalCourse} />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
              nostrud amet... <span>Читати далі</span> </p>

            <div className={s.buyAdditionalCourse}>
              <span className={s.priceAdditionalCourse}>1000 грн</span>

              <div className={s.btnAdditionalCourse}>
                <img src={btnAdditionalCourse} />
                <span>Купити</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.additionalCourseBlock}>
            <h4>Математика</h4>
            <img src={photoAdditionalCourse_3} className={s.photoAdditionalCourse} />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
              nostrud amet... <span>Читати далі</span> </p>

            <div className={s.buyAdditionalCourse}>
              <span className={s.priceAdditionalCourse}>500 грн</span>

              <div className={s.btnAdditionalCourse}>
                <img src={btnAdditionalCourse} />
                <span>Купити</span>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className={s.additionalCourseBlock}>
            <h4>Спорт</h4>
            <img src={photoAdditionalCourse_4} className={s.photoAdditionalCourse} />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
              nostrud amet... <span>Читати далі</span> </p>

            <div className={s.buyAdditionalCourse}>
              <span className={s.priceAdditionalCourse}>300 грн</span>

              <div className={s.btnAdditionalCourse}>
                <img src={btnAdditionalCourse} />
                <span>Купити</span>
              </div>
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className={s.additionalCourseBlock}>
            <h4>Музика</h4>
            <img src={photoAdditionalCourse_5} className={s.photoAdditionalCourse} />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
              nostrud amet... <span>Читати далі</span> </p>

            <div className={s.buyAdditionalCourse}>
              <span className={s.priceAdditionalCourse}>1000 грн</span>

              <div className={s.btnAdditionalCourse}>
                <img src={btnAdditionalCourse} />
                <span>Купити</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className={s.additionalCourseBlock}>
            <h4>Подорожі</h4>
            <img src={photoAdditionalCourse_3} className={s.photoAdditionalCourse} />
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
              Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt 
              nostrud amet... <span>Читати далі</span> </p>

            <div className={s.buyAdditionalCourse}>
              <span className={s.priceAdditionalCourse}>500 грн</span>

              <div className={s.btnAdditionalCourse}>
                <img src={btnAdditionalCourse} />
                <span>Купити</span>
              </div>
            </div>
          </div>
        </SwiperSlide>

        </Swiper>
      
      </div>


      <ModalRegAuth
          type='additionalCourse'
          isOpen={additionalCourseModalIsOpen}
          // onAfterOpen={afterOpenRegistrationForm}
          onRequestClose={closeAdditionalCourseModal}
          style={customStyles}
          contentLabel="Example Modal"
          // funcClick={onReg}
        />


    </div>
  );

}


export default AdditionalCourses;