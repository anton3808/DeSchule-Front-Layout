import React, { useEffect, useState } from 'react';
import s from './Cabinet.module.css';
import './Slick.css';

import circle_challenge from '../../assets/images/circle_challenge_cabinet.png';

import Modal from 'react-modal';
import btnStartHeader from '../../assets/images/btnStartHeader.png';
import cabinetRegisModalPhoto from '../../assets/images/StartPage/cabinetRegisModalPhoto.png';
import btnSave_CabinetRegis from '../../assets/images/StartPage/btnSave_CabinetRegis.svg';

import editData_Underline from '../../assets/images/editData_Underline.svg';
import photoUser from '../../assets/images/photoUser.svg';
import iconEditData from '../../assets/images/iconEditData.svg';

import DT_Icon from '../../assets/images/StartPage/DT_Icon.svg';
import newsPhoto_1 from '../../assets/images/newsPhoto_1.svg';
import challengePhoto_1 from '../../assets/images/challengePhoto_1.svg';
import additionalCoursePhoto_1 from '../../assets/images/additionalCoursePhoto_1.svg';


import btnBrifLevel_Cabinet from '../../assets/images/btnBrifLevel_Cabinet.svg';



import btnPackagesBuy from '../../assets/images/StartPage/btnPackages-Buy.svg';

import checkMark from '../../assets/images/StartPage/checkMark.svg';
import cancelMark from '../../assets/images/StartPage/cancelMark.svg';
import lockForDisablePoints from '../../assets/images/StartPage/lockForDisablePoints.svg';
import sherlokGetFreePhoto from '../../assets/images/StartPage/sherlokGetFreePhoto.png';
import stoneBackgroundGetFree from '../../assets/images/StartPage/stoneBackgroundGetFree.svg';
import cloudsOfFreePackage from '../../assets/images/StartPage/cloudsOfFreePackage.svg';
import btnFreePackage from '../../assets/images/StartPage/btnFreePackage.svg';
import underlineTextInCloud from '../../assets/images/StartPage/underlineTextInCloud.svg';


import mainPhotoOfHomeAlone from '../../assets/images/StartPage/mainPhotoOfHomeAlone_Cabinet.png';
import mainPhotoOfGuardiansOfTheGalaxy from '../../assets/images/StartPage/mainPhotoOfGuardiansOfTheGalaxy2.png';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import { Link } from 'react-router-dom';
import Switch from 'react-ios-switch';


import ProgressBar from 'react-customizable-progressbar'

import Modals from './Modals/Modals.jsx';

import { Formik } from 'formik';
import * as yup from 'yup';


// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';


// import 'swiper/swiper.min.css'
// import 'swiper/modules/navigation/navigation.min.css'
// import 'swiper/modules/pagination/pagination.min.css'
import Swiper from "react-id-swiper";
import 'swiper/swiper.min.css'
// import 'swiper/css/swiper.css'
// import "react-id-swiper/lib/styles/scss/swiper.scss";




import btnBanner from '../../assets/images/btnBanner.png';
import axios from 'axios'
import { BASE_URL } from '../../constants';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../redux/reducers/auth-reducer';


import { CircularProgressbar, buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const progress = 60;





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





{/* <ProfileInfo profile={props.profile} status={ props.status } updateStatus={props.updateStatus} />
      <MyPostsContainer  /> */}
const Cabinet = ({ auth }) => {

  const [userNextData, setUserNext] = useState({
    name: localStorage.getItem('name'),
    surname: localStorage.getItem('surname'),
    phone: localStorage.getItem('phone'),
    email: '',
    pass: '',
    repPass: ''
  })
  const [error, setError] = useState({ code: '', message: '' })

  let subtitle;
  const [loginFormIsOpen, setLoginFormIsOpen] = React.useState(false);

  const [subscriptionStatus, setSubscriptionStatus] = React.useState(true);

  const dispatch = useDispatch()

  useEffect(() => {
    setLoginFormIsOpen(true);
    document.body.style.overflow = 'hidden';
  });

  // if (auth !== '1'){
  //   setLoginFormIsOpen(true);
  //   document.body.style.overflow = 'hidden';
  // }


  let afterOpenLoginForm = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }



  // Registration Form
  const validationsSchemaReg = yup.object().shape({
    mail: yup.string().email('Невірна адреса').required(`Поле обов’язкове`),

    password: yup.string().typeError('Повинен бути текст').required(`Поле обов’язкове`).min(8, "Мінімум 8 символів"),
    confirmPassword: yup.string().min(8, "Мінімум 8 символів").oneOf([yup.ref('password')], 'Паролі не співпадають').required(`Поле обов’язкове`)
  })

  const fullRegFunc = (values) => {
    alert("Email: " + values.mail + "\nPassword: " + values.password + "\nConfirm password: " + values.confirmPassword)
    setLoginFormIsOpen(false);

    document.body.style.overflow = 'unset';

    
    
    // axios.post(`${BASE_URL}/register`, {
    //   name: nextData.name,
    //   phone: nextData.phone,
    //   password: nextData.pass,
    //   password_confirmation: nextData.repPass,
    //   email: nextData.email
    // },
    //   {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     }
    //   }).then((res) => {
    //     console.log('REG DATA', res);
    //     localStorage.setItem('userData', JSON.stringify(res.data))
    //     localStorage.setItem('auth', 1)
    //     localStorage.removeItem('name')
    //     localStorage.removeItem('phone')
    //     dispatch(setUserAction(res.data))
    //   }).catch(function (error) {
    //     setError({ code: Object.keys(error.response.data.errors)[0], message: Object.values(error.response.data.errors)[0][0] })
    //   })
  
  
  }







  const params = {
    container: ".container",
    pagination: ".swiper-pagination",
    paginationClickable: true,
    direction: "vertical",
    mousewheel: true, // https://idangero.us/swiper/api/#mousewheel
  };


  const settingsSliderWidjets = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 5000,


    // beforeChange: function(currentSlide, nextSlide) {
    //   console.log("before change", currentSlide, nextSlide);
    // },
    // afterChange: function(currentSlide) {
    //   console.log("after change", currentSlide);
    // }
  }




  // const [registrationFormIsOpen, setRegistrationFormIsOpen] = React.useState(false);
  const [brifFormIsOpen, setBrifFormIsOpen] = React.useState(false);
  const [editPersonalDataFormIsOpen, setEditPersonalDataFormIsOpen] = React.useState(false);
  
  const [errorText, setErrorText] = useState('')
  
  // let openRegistrationForm = () => {
  //   setRegistrationFormIsOpen(true);
  //   document.body.style.overflow = 'hidden';
  // }
  // let closeRegistrationForm = () => {
  //   setRegistrationFormIsOpen(false);
  //   document.body.style.overflow = 'unset';
  // }

  

  let openBrifForm = () => {
    setBrifFormIsOpen(true);
    document.body.style.overflow = 'hidden';
  }
  let closeBrifForm = () => {
    setBrifFormIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  let afterBrifFormIsOpen = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }



  let openEditPersonalDataForm = () => {
    setEditPersonalDataFormIsOpen(true);
    document.body.style.overflow = 'hidden';
  }
  let closeEditPersonalDataForm = () => {
    setEditPersonalDataFormIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  let afterEditPersonalDataFormIsOpen = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }




  let onBrif = () => {

  }




  return (
    <div className={s.cabinetWrapper}>

      <div className={s.dataAndProgressWrapper}>

        <div className={s.progressAndWidjetsWrapper}>
          <div className={s.yourProgressWrapper}>
            <div className={s.yourProgressTitle}>
              <h4>Твій прогрес</h4>
            </div>

            
            <div className={s.yourProgressBody}>

              <div className={s.yourProgressData}>
                <div className={s.yourProgressItem}>
                  <h5>Твоя підписка: </h5>
                  <span className={s.subscriptionName}>Відсутня</span>
                </div>

                <div className={s.yourProgressItem}>
                  <h5>Автоматична підписка: </h5>
                  {/* <Switch
                    checked={true}
                    onChange={checked => {}}
                  /> */}
                  <Switch
                    checked={subscriptionStatus}
                    className={s.subscriptionStatus}
                    disabled={undefined}
                    handleColor="#ffffff"
                    name={undefined}
                    offColor="#EB4436"
                    onChange={() => {
                      setSubscriptionStatus(!subscriptionStatus)
                    }}
                    onColor="#27AE60"
                    pendingOffColor={undefined}
                    pendingOnColor={undefined}
                    readOnly={undefined}
                    style={undefined}
                  />

                </div>
                
                <div className={s.yourProgressItem}>
                  <h5>Кількість DT: </h5>

                  <div className={s.countsOfDT}>
                    <img src={DT_Icon} alt="" />
                    <span>1200 DT</span>
                  </div> 
                </div>

                <div className={s.yourProgressItem}>
                  <h5>Наступний рівень через: </h5>
                  <span className={s.nextLevelTime}>12 днів</span>
                </div>  
              </div>

              <div className={s.progressCircle}>

                <ProgressBar
                    radius={100}
                    progress={progress}
                    strokeWidth={10}
                    strokeColor="#27AE60"
                    strokeLinecap="square"
                    trackStrokeWidth={1}
                    trackStrokeColor="#27AE60"

                    className={s.progressCircleBar}
                >

                    <div className={s.indicator}>
                        <div className={s.indicatorCircle}>
                          <h2>A1</h2>
                          <span>{progress}% з 100%</span>
                        </div>
                        
                    </div>
                    
                </ProgressBar>
              </div>
      
             

            </div>


          </div>

          <div className={s.widjetsInCabinet}>
          <Slider {...settingsSliderWidjets}>
            <div className={s.widjetNews}>
              <img src={newsPhoto_1} alt="" />

              <div>
                <h3>6 способів краще запамятовувати вивчений матеріал </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ...</p>
              </div>
            </div>
        
            
      
            <div className={s.widjetChallenge}>
              <img src={challengePhoto_1} alt="" />

              <div>
                <h3>Випробуй свої сили та пройди новий challenge!</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...</p>
              </div>
            </div>

            

            <div className={s.widjetAdditionalCourse}>
              <img src={additionalCoursePhoto_1} alt="" />

              <div>
                <h3>Додатковий курс : Підготовка до ЗНО</h3>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit...</p>
              </div>
            </div>

            <div className={s.widjetNews}>
              <img src={newsPhoto_1} alt="" />

              <div>
                <h3>6 способів краще запамятовувати вивчений матеріал </h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur ...</p>
              </div>
            </div>
        
  
          </Slider>

          </div>

        </div>





        <div className={s.personalData}>
          <div className={s.personalDataTitle}>
            <h4>Особисті дані</h4>
          </div>

          <div className={s.personalDataBody}>
            <div className={s.headerOfData}>
              <div>
                <img src={photoUser} className={s.photoUser} alt="" />
                <span>Андрій Андрієнко</span>
              </div>
              
              <img src={iconEditData} className={s.iconEditData} alt="" />
            </div>

            <div className={s.dataOfUserItem}>
              <h5>Ім’я:</h5>
              <span>Андрій</span>
            </div>

            <div className={s.dataOfUserItem}>
              <h5>Прізвище:</h5>
              <span>Андрієнко</span>
            </div>

            <div className={s.dataOfUserItem}>
              <h5>Логін:</h5>
              <span>andriyandrienko</span>
            </div>

            <div className={s.dataOfUserItem}>
              <h5>Дата народження:</h5>
              <span>12-12-1999</span>
            </div>

            <div className={s.dataOfUserItem}>
              <h5>Номер телефону:</h5>
              <span>+380 97 123 45 67</span>
            </div>

            <div className={s.dataOfUserItem}>
              <h5>Ел. адреса:</h5>
              <span>andriyandrienko@gmail.com</span>
            </div>

            <div className={s.dataOfUserItem}>
              <h5>Пароль:</h5>
              <span className={s.changePasswordText}>Змінити пароль</span>
            </div>

            <div className={s.editDataText} onClick={openEditPersonalDataForm}>
              <h4>Редагувати дані</h4>
              <img src={editData_Underline} alt="" />
            </div>

            <Modals
              type='editPersonalData'
              isOpen={editPersonalDataFormIsOpen}
              onAfterOpen={afterEditPersonalDataFormIsOpen}
              onRequestClose={closeEditPersonalDataForm}
              style={customStyles}
              contentLabel="Example Modal"
              funcClick={onBrif}
              errorText={errorText}
            />
          </div>

        </div>

      </div>





      <div onClick={openBrifForm} className={s.btnBrifLevel_Cabinet}>
        <img src={btnBrifLevel_Cabinet} alt="" />
        <span>Розрахувати темп роботи на А1</span>
      </div>


      {/* <Modals
          type='brifOfLevel'
          isOpen={brifFormIsOpen}
          onAfterOpen={afterBrifFormIsOpen}
          onRequestClose={closeBrifForm}
          style={customStyles}
          contentLabel="Example Modal"
          funcClick={onBrif}
          errorText={errorText}
        /> */}



      <Modals
          type='brifOfLevel'
          isOpen={brifFormIsOpen}
          onAfterOpen={afterBrifFormIsOpen}
          onRequestClose={closeBrifForm}
          style={customStyles}
          contentLabel="Example Modal"
          funcClick={onBrif}
          errorText={errorText}
        />




      <div className={s.packagesOfCourseWrapper}>
        <h3>ДОСТУПНІ ПІДПИСКИ:</h3>

        

        <div className={s.mainPackagesOfCourse}>
          <div className={s.packageHomeAlone}>
            <div className={s.yourSubscriptionLabel}>
              <h4>Твій тариф</h4>
            </div>

            <div className={s.packageHomeAlonePhoto}>
              <img src={mainPhotoOfHomeAlone} />

              <div className={s.packageHomeAlonePhotoText}>
                <h3>Тариф “Сам у дома”</h3>
                <h4> <span className={s.priceForPackage}>3 800 грн</span> <span className={s.perMonthOfPackage}>/ місяць</span> </h4>
              </div>
            </div>

            <div className={s.packageHomeAloneMainText}>
              <h4>Для самостійного вивчення німецької мови від А1-С1 з власним зручним графіком. Ви отримуєте:</h4>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>доступ до всіх матеріалів для вивчення</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>автоматична перевірка завдань</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>зворотній зв’язок до вправ</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>оцінка прогресу</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>сертифікація кожного рівня</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>унікальна система мотивації</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>персоналізований план</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>загальна спільнота у Telegram</span>
              </div>



              <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                <img src={cancelMark} />
                <span>закрита спільнота для “Вартових галактики” у Telegram</span>
              </div>

              <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                <img src={cancelMark} />
                <span>тижневий марафон “Говоріння”</span>
              </div>

              <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                <img src={cancelMark} />
                <span>розділ “Мій ментор”</span>
              </div>

              <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                <img src={cancelMark} />
                <span>перевірка творчих завдань та говоріння</span>
              </div>

              <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                <img src={cancelMark} />
                <span>індивідуальні консультації ментора: 7 годин в місяць</span>
              </div>


              {/* <div className={s.lockForDisablePoints}>
                <img src={lockForDisablePoints} />
                <span>Доступно у тарифі “Вартові галактики”</span>
              </div>  */}
              
            </div>


  {/*           
            <Link to={{ 
                pathname:'/buying-main-course', 
                state: {
                  homeAlonePackage: true
                } 
              }}>

              <div className={s.btnPackagesBuy}>
                <img src={btnPackagesBuy} />
                <span>Купити</span>
              </div>
            </Link>  */}
            
            
  {/* 
            <NavLink to='/buying-main-course'>
              <div className={s.btnPackagesBuy}>
                <img src={btnPackagesBuy} />
                <span>Купити</span>
              </div>
            </NavLink> */}


          </div>


          <div className={s.packageGuardiansOfTheGalaxy}>

            <div className={s.packageGuardiansOfTheGalaxyPhoto}>
              <img src={mainPhotoOfGuardiansOfTheGalaxy} />

              <div className={s.packageGuardiansOfTheGalaxyPhotoText}>
                <h3>Тариф “Стражі галактики”</h3>
                <h4> <span className={s.priceForPackage}>5 800 грн</span> <span className={s.perMonthOfPackage}>/ місяць</span> </h4>
              </div>
            </div>

            <div className={s.packageGuardiansOfTheGalaxyMainText}>
              <h4>Для самостійного вивчення німецької мови від А1-С1 з власним зручним графіком. Ви отримуєте:</h4>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>доступ до всіх матеріалів для вивчення</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>автоматична перевірка завдань</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>зворотній зв’язок до вправ</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>оцінка прогресу</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>сертифікація кожного рівня</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>унікальна система мотивації</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>персоналізований план</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>загальна спільнота у Telegram</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>закрита спільнота для “Вартових галактики” у Telegram</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>тижневий марафон “Говоріння”</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>розділ “Мій ментор”</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>перевірка творчих завдань та говоріння</span>
              </div>

              <div className={s.pointsOfPackage}>
                <img src={checkMark} />
                <span>індивідуальні консультації ментора: 7 годин в місяць</span>
              </div>
              
            </div>


            

            <Link to={{ 
                pathname:'/buying-main-course', 
                state: {
                  guardiansOfTheGalaxyPackage: true
                } 
              }}>

              <div className={s.btnPackagesBuy}>
                <img src={btnPackagesBuy} />
                <span>Купити</span>
              </div>
            </Link> 

          </div>
        </div>
      </div>

     

     

      

      










      {auth !== '1' && <Modal
        isOpen={loginFormIsOpen}
        onAfterOpen={afterOpenLoginForm}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <div className={s.modal_wrapper}>

          <img src={cabinetRegisModalPhoto} className={s.cabinetRegisModalPhoto} />

          <div className={s.personalDataFullRegis}>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Особисті дані</h2>

            <div className={s.savedDataFromFirstPart}>
              <h5>Ваше ім’я:</h5>
              <span>{userNextData.name}</span>
            </div>

            <div className={s.savedDataFromFirstPart}>
              <h5>Ваше прізвище:</h5>
              <span>{userNextData.surname}</span>
            </div>

            <div className={s.savedDataFromFirstPart}>
              <h5>Номер телефону:</h5>
              <span>{userNextData.phone}</span>
            </div>



            <form className={s.modal_form}>



                <Formik
                  initialValues={{
                    mail: '',
                    password: '',
                    confirmPassword: '',
                  }}
                  validateOnBlur
                  onSubmit={(values) => fullRegFunc(values)}
                  validationSchema={validationsSchemaReg}
                >

                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (

                    <div className={s.formRegisStepsToBuy}>
                      <div className={s.inputFormWrapper}>
                        <input 
                              className={touched.mail && errors.mail ? 'errorInput' : 'mail'}
                              type={`text`} 
                              name={`mail`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.mail}  
                              
                              placeholder="Електронна адреса" 
                              />

                        { touched.mail && errors.mail && <span className='errorMessageModalCabinet'>{errors.mail}</span> }
                      </div>

                      
                      <div className={s.inputFormWrapper}>
                        <input 
                              className={touched.password && errors.password ? 'errorInput' : 'password'}
                              type={`password`} 
                              name={`password`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}  
                              
                              placeholder="Пароль" 
                              />

                        { touched.password && errors.password && <span className='errorMessageModalCabinet'>{errors.password}</span> }
                      </div>


                      <div className={s.inputFormWrapper}>
                        <input 
                            className={touched.confirmPassword && errors.confirmPassword ? 'errorInput' : 'confirmPassword'}
                            type={`password`} 
                            name={`confirmPassword`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.confirmPassword}  
                            
                            placeholder="Подтвердить пароль" 
                            />

                        { touched.confirmPassword && errors.confirmPassword && <span className='errorMessageModalCabinet'>{errors.confirmPassword}</span> }
                      </div>


                      <div className={s.regisNavigation}>
                        <h5 className={s.backToLanding}>Повернутись</h5>

                        <div className={!isValid || !dirty ? s.regisButton_NotActive : s.regisButton } type="submit" onClick={handleSubmit} >
                          <img className={s.btnStartStudy} src={btnSave_CabinetRegis} />
                          <span>Зберегти</span>
                        </div>
                      </div>

                    </div> 
                  )}

                </Formik>

              
{/* 
              <input className={(error.code === 'mail' || error.code === 'email') && 'errorInput'} type="text" placeholder="Електронна адреса" onChange={(e) => setUserNext(({ ...userNextData, email: e.target.value }))} />
              <input className={error.code === 'pass' && 'errorInput'} type="password" placeholder="Пароль" onChange={(e) => setUserNext(({ ...userNextData, pass: e.target.value }))} />
              <input className={error.code === 'pass' && 'errorInput'} type="password" placeholder="Підтвердити пароль" onChange={(e) => setUserNext(({ ...userNextData, repPass: e.target.value }))} />
               */}
              
              
              
            </form>
{/* 
            {<div className='errorMessage'>{error.message}</div>}  */}
          </div>
         

        </div>

      </Modal>}  

{/* {ДОБАВИТЬ СЮДА СТИЛЕЙ} */}
       {/* <>

                <span></span>
                <input
                  className={error.code === 'name' && 'errorInput'}
                  type="text"
                  placeholder="Ваше ім’я"
                  value={userNextData.name}
                  onChange={e => setUserNext(({ ...userNextData, name: e.target.value }))}
                />

                <input
                  className={error.code === 'name' && 'errorInput'}
                  type="text"
                  placeholder="Ваше ім’я"
                  value={userNextData.name}
                  onChange={e => setUserNext(({ ...userNextData, name: e.target.value }))}
                />

                <input
                  className={error.code === 'phone' && 'errorInput'}
                  type="text"
                  placeholder="Номер телефону"
                  value={userNextData.phone}
                  onChange={e => setUserNext(({ ...userNextData, phone: e.target.value }))}
                />
              </>  */}



    </div>

  );

}


export default Cabinet;