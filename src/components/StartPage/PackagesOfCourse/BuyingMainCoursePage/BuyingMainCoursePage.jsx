import React, { useState, useEffect, useRef } from 'react';
import s from './BuyingMainCoursePage.module.css';
import sp from './../../StartPage.module.css';

import {NavLink, Route, useLocation, useHistory} from "react-router-dom";

import studyByTravellingUnderline from '../../../../assets/images/StartPage/studyByTravelling-Underline.svg';


import levels_A1_active from '../../../../assets/images/StartPage/levels-A1-Circle-active.svg';
import levels_A1 from '../../../../assets/images/StartPage/levels-A1-Circle.svg';

import levels_A2_active from '../../../../assets/images/StartPage/levels-A2-Circle-active.svg';
import levels_A2 from '../../../../assets/images/StartPage/levels-A2-Circle.svg';

import levels_B1_active from '../../../../assets/images/StartPage/levels-B1-Circle-active.svg';
import levels_B1 from '../../../../assets/images/StartPage/levels-B1-Circle.svg';

import levels_B2_active from '../../../../assets/images/StartPage/levels-B2-Circle-active.svg';
import levels_B2 from '../../../../assets/images/StartPage/levels-B2-Circle.svg';

import levels_C1_active from '../../../../assets/images/StartPage/levels-C1-Circle-active.svg';
import levels_C1 from '../../../../assets/images/StartPage/levels-C1-Circle.svg';



import liechtenstein_active from '../../../../assets/images/StartPage/map-liechtenstein-active.svg';
import liechtenstein from '../../../../assets/images/StartPage/map-liechtenstein.svg';

import luxembourg_active from '../../../../assets/images/StartPage/map-luxembourg-active.svg';
import luxembourg from '../../../../assets/images/StartPage/map-luxembourg.svg';

import switzerland_active from '../../../../assets/images/StartPage/map-switzerland-active.svg';
import switzerland from '../../../../assets/images/StartPage/map-switzerland.svg';

import austria_active from '../../../../assets/images/StartPage/map-austria-active.svg';
import austria from '../../../../assets/images/StartPage/map-austria.svg';

import germany_active from '../../../../assets/images/StartPage/map-germany-active.svg';
import germany from '../../../../assets/images/StartPage/map-germany.svg';

import belgium_active from '../../../../assets/images/StartPage/map-belgium-active.svg';
import belgium from '../../../../assets/images/StartPage/map-belgium.svg';





import a1_line from '../../../../assets/images/StartPage/map-A1-Line.svg';
import a2_line from '../../../../assets/images/StartPage/map-A2-Line.svg';
import b1_line from '../../../../assets/images/StartPage/map-B1-Line.svg';
import b2_line from '../../../../assets/images/StartPage/map-B2-Line.svg';
import c1_line from '../../../../assets/images/StartPage/map-C1-Line.svg';
import c2_line from '../../../../assets/images/StartPage/map-C2-Line.svg';


import btn_stepsToBuyCourse from '../../../../assets/images/StartPage/btn_stepsToBuyCourse.svg';
import arrow_startTest from '../../../../assets/images/StartPage/arrow_startTest.svg';
import arrow_stepsToBuyCourse from '../../../../assets/images/StartPage/arrow_stepsToBuyCourse.svg';
import arrow_backToPage from '../../../../assets/images/StartPage/arrow_backToPage.svg';
import dragonMainLogo from '../../../../assets/images/StartPage/dragonMainLogo.svg';


import singUpWithGoogle from '../../../../assets/images/StartPage/singUpWithGoogle.svg';
import singUpWithFacebook from '../../../../assets/images/StartPage/singUpWithFacebook.svg';

import applePayPayment from '../../../../assets/images/StartPage/applePayPayment.svg';
import googlePayPayment from '../../../../assets/images/StartPage/googlePayPayment.svg';

import mainPhotoOfHomeAlone from '../../../../assets/images/StartPage/mainPhotoOfHomeAlone.png';
import mainPhotoOfGuardiansOfTheGalaxy from '../../../../assets/images/StartPage/mainPhotoOfGuardiansOfTheGalaxy.png';


import btnFormStartFree from '../../../../assets/images/StartPage/btnForm-StartFree.svg';
import btnRegis_StepsToBuy from '../../../../assets/images/StartPage/btnRegis_StepsToBuy.svg';

import btnBuy_Payment from '../../../../assets/images/StartPage/btnBuy_Payment.svg';
import { useDispatch } from 'react-redux';
import ModalRegAuth from '../../../ModalRegAuth/ModalRegAuth';

import { Formik } from 'formik';
import * as yup from 'yup';


import MaskInput from 'react-maskinput';

import axios from 'axios'
import { BASE_URL } from '../../../../constants';
import { setUserAction } from '../../../../redux/reducers/auth-reducer';



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



const BuyingMainCoursePage = () => {

  const location = useLocation();

  //After redirect open top part of page  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  //type of packages
  const [toggleHomeAlonePackage, setToggleHomeAlonePackage] = useState(location.state ? location.state.homeAlonePackage : true);
  const [toggleGuardiansOfTheGalaxyPackage, setToggleGuardiansOfTheGalaxyPackage] = useState(location.state ? location.state.guardiansOfTheGalaxyPackage : false);    
 
  
  const toggleStateHomeAlonePackage = () => {
    if (!toggleHomeAlonePackage) {
      setToggleHomeAlonePackage(!toggleHomeAlonePackage);
    }
    if (toggleGuardiansOfTheGalaxyPackage){
      setToggleGuardiansOfTheGalaxyPackage(!toggleGuardiansOfTheGalaxyPackage);
    }
  }

  const toggleStateGuardiansOfTheGalaxyPackage = () => {
    if (!toggleGuardiansOfTheGalaxyPackage) {
      setToggleGuardiansOfTheGalaxyPackage(!toggleGuardiansOfTheGalaxyPackage);
    }
    if (toggleHomeAlonePackage){
      setToggleHomeAlonePackage(!toggleHomeAlonePackage);
    }
  }


  // Steps Of Payment

  const [toggleFirstStep, setToggleFirstStep] = useState(true);
  const [toggleSecondStep, setToggleSecondStep] = useState(false);
  const [toggleThirdStep, setToggleThirdStep] = useState(false);

  const toggleStateFirstStep = () => {
    if (toggleSecondStep){
      setToggleSecondStep(!toggleSecondStep);
    } else if (toggleThirdStep){
      setToggleThirdStep(!toggleThirdStep);
    }

    if (!toggleFirstStep) {
      setToggleFirstStep(!toggleFirstStep);
    }
  }

  const toggleStateSecondStep = () => {
    if (toggleFirstStep){
      setToggleFirstStep(!toggleFirstStep);
    } else if (toggleThirdStep){
      setToggleThirdStep(!toggleThirdStep);
    }

    if (!toggleSecondStep) {
      setToggleSecondStep(!toggleSecondStep);
    }
  }

  const toggleStateThirdStep = () => {
    if (toggleFirstStep){
      setToggleFirstStep(!toggleFirstStep);
    } else if (toggleSecondStep){
      setToggleSecondStep(!toggleSecondStep);
    }

    if (!toggleThirdStep) {
      setToggleThirdStep(!toggleThirdStep);
    }
  }








  // Toggle Levels
  const [toggleA1Level, setToggleA1Level] = useState(true);
  const [toggleA2Level, setToggleA2Level] = useState(false);
  const [toggleB1Level, setToggleB1Level] = useState(false);
  const [toggleB2Level, setToggleB2Level] = useState(false);
  const [toggleC1Level, setToggleC1Level] = useState(false);
  const [toggleC2Level, setToggleC2Level] = useState(false);


  const toggleStateA1Level = () => {
    if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level);
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    }
  }

  const toggleStateA2Level = () => {
    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleA2Level) {
      setToggleA2Level(!toggleA2Level);
    }
  }

  const toggleStateB1Level = () => {
    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleB1Level) {
      setToggleB1Level(!toggleB1Level);
    }
  }

  const toggleStateB2Level = () => {
    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level)
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleB2Level) {
      setToggleB2Level(!toggleB2Level);
    }
  }

  const toggleStateC1Level = () => {
    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level)
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleC1Level) {
      setToggleC1Level(!toggleC1Level);
    }
  }



  


  // Variants Of Price
  const [selectedVariantsOfPrice, setSelectedVariantsOfPrice] = useState('priceForMonth');


  const dispatch = useDispatch()
  const history = useHistory()

  const [loginFormIsOpen, setLoginFormIsOpen] = React.useState(false);
  const [errorText, setErrorText] = useState('')

  let openLoginForm = () => {
    setLoginFormIsOpen(true);
    document.body.style.overflow = 'hidden';
  }
  let closeLoginForm = () => {
    setLoginFormIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  let afterOpenLoginForm = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }





  // Registration Form
  const validationsSchemaReg = yup.object().shape({
    name: yup.string().typeError('Повинен бути текст').required(`Поле обов’язкове`),
    surname: yup.string().typeError('Повинен бути текст').required(`Поле обов’язкове`),

    phone: yup.string().typeError('Повинен бути текст').required(`Поле обов’язкове`),
    mail: yup.string().email('Невірна адреса').required(`Поле обов’язкове`),

    password: yup.string().typeError('Повинен бути текст').required(`Поле обов’язкове`).min(8, "Мінімум 8 символів"),
    confirmPassword: yup.string().min(8, "Мінімум 8 символів").oneOf([yup.ref('password')], 'Паролі не співпадають').required(`Поле обов’язкове`)
  })

  const fullRegFunc = (values) => {
    alert("Name: " + values.name + "\nSurname: " + values.surname + "\nEmail: " + values.mail + "\nPhone: " + values.phone + "\nPassword: " + values.password + "\nConfirm password: " + values.confirmPassword)
    toggleStateThirdStep();
  }





  //Payment Form
  const validationsSchemaPayment = yup.object().shape({
    numberOfCard: yup.string().typeError('Приклад: XXXX XXXX XXXX XXXX')
                  .max(20, 'Приклад: XXXX XXXX XXXX XXXX')
                  .matches(
                    /([0-9]{4}) ([0-9]{4}) ([0-9]{4}) ([0-9]{4})/,
                    'Приклад: XXXX XXXX XXXX XXXX'
                  )
                  .required('Поле обов’язкове'), 

    validityOfCard: yup.string().typeError('Приклад: MM/YY')
                    .max(5, 'Приклад: MM/YY')
                    .matches(
                      /([0-9]{2})\/([0-9]{2})/,
                      'Приклад: MM/YY'
                    )
                    .required('Поле обов’язкове'),


    ownersNameOfCard: yup.string().typeError('Повинен бути текст ').required(`Поле обов’язкове`),

    cvv2CodeOfCard: yup.string().typeError('Приклад: XXX')
                    .max(5, 'Приклад: XXX')
                    .matches(
                      /([0-9]{3})/,
                      'Приклад: XXX'
                    )
                    .required('Поле обов’язкове'),
  })


  const paymentFunc = (values) => {
    // alert("Name: " + values.name + "\nSurname: " + values.surname + "\nEmail: " + values.mail + "\nPhone: " + values.phone + "\nPassword: " + values.password + "\nConfirm password: " + values.confirmPassword)
    alert(JSON.stringify(values))
    // toggleStateThirdStep();
  }

  


  









  const onAuth = (values) => {
    alert(JSON.stringify(values))
    // alert("Email: " + email + "\nPassword: " + password  )
    // axios.post(`${BASE_URL}/login`, {
    //   login,
    //   password
    // },
    //   {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     }
    //   }).then(function (res) {
    //     console.log('DATA LOGIN', res);
    //     localStorage.setItem('userData', JSON.stringify(res.data))
    //     localStorage.setItem('auth', 1)
    //     dispatch(setUserAction(res.data))
    //     history.push('/cabinet')
    //     setErrorText('')
    //   }).catch(function (error) {
    //     console.log('ERR', error.response);
    //     setErrorText('Почта или пароль введены не правильно')
    //   })
  }

  const [fullReg, setFullReg] = useState({
    startLevel: '',

    name: '',
    surname: '',
    mail: '',
    phone: '',
    password: '',
    confirmPassword: '',

    numberOfCard: '',
    validityOfCard: '',
    ownersNameOfCard: '',
    cvv2CodeOfCard: ''

  })
  

  // const fullRegFunc = (values) => {

      //Registration 

      //   setError({ code: '', message: '' })
      //   axios.post(`${BASE_URL}/register`, {
      //       name: objReg.name,
      //       surname: objReg.surname,
      //       // login: objReg.login,
      //       email: objReg.mail,
      //       phone: objReg.phone,
      //       password: objReg.password,
      //       password_confirmation: objReg.confirmPassword,
            
      //   },
      //       {
      //           headers: {
      //               'Accept': 'application/json',
      //               'Content-Type': 'application/json'
      //           }
      //       }).then(res => {
      //           console.log('REG DATA', res);
      //           localStorage.setItem('userData', JSON.stringify(res.data))
      //           localStorage.setItem('auth', 1)
      //           localStorage.removeItem('name')
      //           localStorage.removeItem('phone')
      //           dispatch(setUserAction(res.data))
      //           history.push('/cabinet')
      //       }).catch(function (error) {
      //           setError({ code: Object.keys(error.response.data.errors)[0], message: Object.values(error.response.data.errors)[0][0] })
      //       })
    // }
  // } 


  // const fullRegFunc = (objReg) => {
  //   console.log(objReg);
  //   if (objReg.name.length === 0) {
  //     setError({ code: 'name', message: `Обов'язкове поле: Ім'я` })
  //   } else if (objReg.surname.length === 0) {
  //     setError({ code: 'surname', message: `Обов'язкове поле: Прізвище` })
  //   } else if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(objReg.mail) === false) {
  //       setError({ code: 'mail', message: `Неверный формат почты` })
  //   } else if (objReg.mail.length === 0) {
  //       setError({ code: 'mail', message: `Обов'язкове поле: Почта` })
  //   } else if (objReg.name.length === 0) {
  //       setError({ code: 'phone', message: `Обов'язкове поле: Телефон` })
  //   }  else if (objReg.password.length === 0) {
  //       setError({ code: 'password', message: `Обов'язкове поле: Пароль` })
  //   } else if (objReg.confirmPassword.length === 0) {
  //       setError({ code: 'confirmPassword', message: `Обов'язкове поле: Підтвердити пароль` })
  //   } else if (objReg.password !== objReg.confirmPassword) {
  //       setError({ code: 'equalPasswords', message: `Пароли не совпадают` })
  //   } else {
  //     alert("Name: " + objReg.name + "\nSurname: " + objReg.surname + "\nEmail: " + objReg.mail + "\nPhone: " + objReg.phone + "\nPassword: " + objReg.password + "\nConfirm password: " + objReg.confirmPassword)
  //   }
  // } 
  



  return (
    
    <div className={s.PageOfBuyingMainCourse}>

      <NavLink to="/" className={s.navLink}>
        <div className={s.backToPrevPage}>
          <img src={arrow_backToPage} />
          <span>Повернутись на Головну</span>
        </div>                          
      </NavLink>


      <div className={s.chooseYourCourseWrapprer}>
        <div className={s.dragonMainLogoWrapper} >
          <img src={dragonMainLogo} />
          <span>eSchule</span>
        </div>

        {toggleHomeAlonePackage ? 
          <h2>Ви вибрали пакет “Сам у дома”</h2>
          :
          <h2>Ви вибрали пакет “Стражі галактики”</h2>
        }


        <div className={s.chooseYourCourse}>
          <img src={mainPhotoOfHomeAlone} className={toggleHomeAlonePackage ? s.activeCourse : s.deactiveCourse} onClick={toggleStateHomeAlonePackage} />
          <img src={mainPhotoOfGuardiansOfTheGalaxy} className={toggleGuardiansOfTheGalaxyPackage ? s.activeCourse : s.deactiveCourse} onClick={toggleStateGuardiansOfTheGalaxyPackage} />
        </div>

        <div className={s.chooseYourCourseInformation}>
          <div className={s.titleOfActiveCourse}>
            {toggleHomeAlonePackage ? 
              <h3>Тариф “Сам у дома”</h3>
              :
              <h3>Тариф “Стражі галактики”</h3>
            }
            <span>Повна самостійність навчання</span>
          </div>

          <div className={s.priceOfActiveCourse}>
            {toggleHomeAlonePackage ? 
              <h3>3 800 ₴</h3>
              :
              <h3>5 800 ₴</h3>
            }
            <span>Вартість тарифу</span>
          </div>
        </div>
      </div>
      
      

      {(() => {
        if (toggleFirstStep) {
            return (
              <div className={s.stepsToBuyWrapper}>

              <div className={s.tabsOfSteps}>
                
                
                <div className={s.activeTabOfSteps}>
                  <h5>Крок 1 “Визначення рівня”</h5>
                </div>
                  
                <div className={s.deactiveTabOfSteps}>
                  <h5>Крок 2 “Реєстрація”</h5>
                </div>

                <div className={s.deactiveTabOfSteps}>
                  <h5>Крок 3 “Оплата”</h5>
                </div>
              </div>
      
              <div className={ `${sp.studyAndTravelWrapper} ${s.studyAndTravelWrapper}`}>
      
                  <div className={`${sp.leftPartText} ${s.leftPartText}`}>
                  <h2>Оберіть рівень, який би ви хотіли вивчати:</h2>
      
                  <img className={sp.studyByTravellingUnderline} src={studyByTravellingUnderline} />
                  
                  <div className={`${sp.informationAboutCountry} ${s.informationAboutCountry}`}>
      
                      {(() => {
                          if (toggleA1Level) {
                              return (
                              <div className={`${sp.title_about_country} ${s.title_about_country}`}>
                                  <div className={`${sp.A1_circle_active} ${s.A1_circle_active}`}>
                                    <img src={levels_A1_active} />
                                    <span>A1</span>
                                  </div>
                              </div>
                              )
                          } else if (toggleA2Level) {
                              return (
                              <div className={`${sp.title_about_country} ${s.title_about_country}`}>
                                  <div className={`${sp.A2_circle_active} ${s.A2_circle_active}`}>
                                  <img src={levels_A2_active} />
                                  <span>A2</span>
                                  </div>
                              </div>
                              )
                          } else if (toggleB1Level) {
                              return (
                              <div className={`${sp.title_about_country} ${s.title_about_country}`}>
                                  <div className={`${sp.B1_circle_active} ${s.B1_circle_active}`}>
                                  <img src={levels_B1_active} />
                                  <span>B1</span>
                                  </div>
                              </div>
                              )
                          } else if (toggleB2Level) {
                              return (
                              <div className={`${sp.title_about_country} ${s.title_about_country}`}>
                                  <div className={`${sp.B2_circle_active} ${s.B2_circle_active}`}>
                                  <img src={levels_B2_active} />
                                  <span>B2</span>
                                  </div>
                              </div>
                              )
                          } else if (toggleC1Level) {
                              return (
                              <div className={`${sp.title_about_country} ${s.title_about_country}`}>
                                  <div className={`${sp.C1_circle_active} ${s.C1_circle_active}`}>
                                  <img src={levels_C1_active} />
                                  <span>C1</span>
                                  </div>
                              </div>
                              )
                          } 
                      })()}
      
      
                      <span className={sp.aboutCountry}>Протягом повноціного та поетапного курсу ви не тільки познайомишся з улюбленими героями 
                      та навіть відвідаєте 5 німецькомовних країн. Навчання з нами дає можливість подорожувати по них, 
                      як Баррі Аллен ( серіал Флеш). Сьогодні ви в Ліхтенштейні(А1), а завтра в Німеччині(С1). </span>
                  </div>
                  
      
                  <div className={sp.levelsCircle}>
                      <h3> <span className={sp.amount}>5</span> рівнів:</h3>
      
                      <div className={sp.A1_circle} onClick={toggleStateA1Level}>
                      {toggleA1Level ? 
                          <div className={sp.A1_circle_active}>
                          <img src={levels_A1_active} />
                          <span>A1</span>
                          </div>    
                          :    
                          <div className={sp.A1_circle_NO_active}>
                          <img src={levels_A1} />
                          <span>A1</span>
                          </div>      
                      }
                      </div>
      
                      
                      <div className={sp.A2_circle} onClick={toggleStateA2Level}>
                      {toggleA2Level ? 
                          <div className={sp.A2_circle_active}>
                          <img src={levels_A2_active} />
                          <span>A2</span>
                          </div>
                          :    
                          <div className={sp.A2_circle_NO_active}>
                          <img src={levels_A2} />
                          <span>A2</span>
                          </div>  
                      }
                      </div>
                  
      
                      <div className={sp.B1_circle} onClick={toggleStateB1Level}>
                      {toggleB1Level ? 
                          <div className={sp.B1_circle_active}>
                          <img src={levels_B1_active} />
                          <span>B1</span>
                          </div>
                          :    
                          <div className={sp.B1_circle_NO_active}>
                          <img src={levels_B1} />
                          <span>B1</span>
                          </div>
                      }
                      </div>
      
      
                      <div className={sp.B2_circle} onClick={toggleStateB2Level}>
                      {toggleB2Level ? 
                          <div className={sp.B2_circle_active}>
                          <img src={levels_B2_active} />
                          <span>B2</span>
                          </div>
                          :    
                          <div className={sp.B2_circle_NO_active}>
                          <img src={levels_B2} />
                          <span>B2</span>
                          </div>
                      }
                      </div>
      
                      <div className={sp.C1_circle} onClick={toggleStateC1Level}>
                      {toggleC1Level ? 
                          <div className={sp.C1_circle_active}>
                          <img src={levels_C1_active} />
                          <span>C1</span>
                          </div>
                          :    
                          <div className={sp.C1_circle_NO_active}>
                          <img src={levels_C1} />
                          <span>C1</span>
                          </div>
                      }              
                      </div>
      
                  </div>
      
      
                  <div className={`${sp.btn_stepsToBuyCourseWrapper} ${s.btn_stepsToBuyCourseWrapper}`} onClick={toggleStateSecondStep}>
                      <img src={btn_stepsToBuyCourse} className={`${sp.btn_stepsToBuyCourse} ${s.btn_stepsToBuyCourse}`} />
                      <img src={arrow_stepsToBuyCourse} className={`${sp.arrow_stepsToBuyCourse} ${s.arrow_stepsToBuyCourse}`} />
                      <span>Далі</span>
                  </div>
                  
      
                  <div className={`${sp.lineToDivide} ${s.lineToDivide}`}></div>
      
                  <h4>Якщо ви не знаєте, який у вас рівень, пройдіть швидкий тест для його визначення</h4>
                  
                  <NavLink to="/test" className={s.navLink}>
                    <div className={`${sp.startTestToDetermineLevel} ${s.startTestToDetermineLevel}`}>
                        <span>Розпочати тестування</span>
                        <img src={arrow_startTest}  />
                    </div>                         
                  </NavLink>
                  
      
                  </div>
      
      
      
      
                  <div className={`${sp.rightPartCountries} ${s.rightPartCountries}`} >
      
                  {toggleC1Level ? 
                      <img className={sp.german_country} src={germany_active} alt="" />
                      : 
                      <img className={sp.german_country} src={germany} onClick={toggleStateC1Level} alt="" />
                  }
      
                  {toggleB2Level ? 
                      <img className={sp.austria_country} src={austria_active} alt="" />
                      : 
                      <img className={sp.austria_country} src={austria} onClick={toggleStateB2Level} alt="" />
                  }
      
                  {toggleB1Level ? 
                      <img className={sp.switzerland_country} src={switzerland_active} alt="" />
                      : 
                      <img className={sp.switzerland_country} src={switzerland} onClick={toggleStateB1Level} alt="" />
                  }
      
                  {toggleA2Level ? 
                      <img className={sp.luxembourg_country} src={luxembourg_active} alt="" />
                      : 
                      <img className={sp.luxembourg_country} src={luxembourg} onClick={toggleStateA2Level} alt="" />
                  }
                  
                  {toggleA1Level ? 
                      <img className={sp.liechtenstein_country} src={liechtenstein_active} alt="" />  
                      : 
                      <img className={sp.liechtenstein_country} src={liechtenstein} onClick={toggleStateA1Level} alt="" />  
                  }
      
                  
      
                  <img className={sp.a1_line} src={a1_line} />
                  <img className={sp.a2_line} src={a2_line} />
                  <img className={sp.b1_line} src={b1_line} />
                  <img className={sp.b2_line} src={b2_line} />
                  <img className={sp.c1_line} src={c1_line} />
      
      
      
                  <div className={sp.A1_map_circle}>
                      {toggleA1Level ? 
                      <div className={sp.A1_map_circle_active}>
                          <img src={levels_A1_active} />
                          <span>A1</span>
                      </div>
                      : 
                      <div className={sp.A1_map_circle_NO_active} onClick={toggleStateA1Level}>
                          <img src={levels_A1} />
                          <span>A1</span>
                      </div>
                      }  
                  </div>
                      
      
                  <div className={sp.A2_map_circle}>
                      {toggleA2Level ? 
                      <div className={sp.A2_map_circle_active}>
                          <img src={levels_A2_active} />
                          <span>A2</span>
                      </div>
                      : 
                      <div className={sp.A2_map_circle_NO_active} onClick={toggleStateA2Level}>
                          <img src={levels_A2} />
                          <span>A2</span>
                      </div>
                      }  
                  </div>
                      
      
                  <div className={sp.B1_map_circle}>
                      {toggleB1Level ? 
                      <div className={sp.B1_map_circle_active}>
                          <img src={levels_B1_active} />
                          <span>B1</span>
                      </div>
                      : 
                      <div className={sp.B1_map_circle_NO_active} onClick={toggleStateB1Level}>
                          <img src={levels_B1} />
                          <span>B1</span>
                      </div>
                      }  
                  </div>
      
      
                  <div className={sp.B2_map_circle}>
                      {toggleB2Level ? 
                      <div className={sp.B2_map_circle_active}>
                          <img src={levels_B2_active} />
                          <span>B2</span>
                      </div>
                      : 
                      <div className={sp.B2_map_circle_NO_active} onClick={toggleStateB2Level}>
                          <img src={levels_B2} />
                          <span>B2</span>
                      </div>
                      }  
                  </div>
      
      
                  <div className={sp.C1_map_circle}>
                      {toggleC1Level ? 
                      <div className={sp.C1_map_circle_active}>
                          <img src={levels_C1_active} />
                          <span>C1</span>
                      </div>
                      : 
                      <div className={sp.C1_map_circle_NO_active} onClick={toggleStateC1Level}>
                          <img src={levels_C1} />
                          <span>C1</span>
                      </div>
                      }  
                  </div>   
      
                  </div>
              </div>  
      
            </div> 
            )
        } else if (toggleSecondStep) {
            return (
              <div className={s.stepsToBuyWrapper_Short}>

              <div className={s.tabsOfSteps}>
                <div className={s.passedTabOfSteps} onClick={toggleStateFirstStep}>
                  <h5>Крок 1 “Визначення рівня”</h5>
                </div>
                <div className={s.activeTabOfSteps}>
                  <h5>Крок 2 “Реєстрація”</h5>
                </div>
                <div className={s.deactiveTabOfSteps}>
                  <h5>Крок 3 “Оплата”</h5>
                </div>
              </div>
      
              <div className={s.stepsToRegisWrapper}>
                
                <div className={s.regisInformation}>
                  <h2>Заповніть форму</h2>
                  <span>Введіть ваше ім’я, прізвище, номер телефону, електронну адресу та слідуйте наступним інструкціям</span>
                </div>


                <Formik
                  initialValues={{
                    name: '',
                    surname: '',
                    mail: '',
                    phone: '',
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
                              className={touched.name && errors.name ? 'errorInput' : 'name'}
                              type={`text`} 
                              name={`name`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}  
                              
                              placeholder="Ваше ім’я" 
                              />

                        { touched.name && errors.name && <span className='errorMessage'>{errors.name}</span> }
                      </div>
                      
                      <div className={s.inputFormWrapper}>
                        <input 
                              className={touched.surname && errors.surname ? 'errorInput' : 'surname'}
                              type={`text`} 
                              name={`surname`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.surname}  
                              
                              placeholder="Ваше прізвище" 
                              />

                        { touched.surname && errors.surname && <span className='errorMessage'>{errors.surname}</span> }
                      </div>

                      <div className={s.inputFormWrapper}>
                        <input 
                              className={touched.phone && errors.phone ? 'errorInput' : 'phone'}
                              type={`text`} 
                              name={`phone`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phone}  
                              
                              placeholder="Номер телефона" 
                              />

                        { touched.phone && errors.phone && <span className='errorMessage'>{errors.phone}</span> }
                      </div>


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

                        { touched.mail && errors.mail && <span className='errorMessage'>{errors.mail}</span> }
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

                        { touched.password && errors.password && <span className='errorMessage'>{errors.password}</span> }
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

                        { touched.confirmPassword && errors.confirmPassword && <span className='errorMessage'>{errors.confirmPassword}</span> }
                      </div>

                      
                      <div className={!isValid || !dirty ? s.btnRegis_StepsToBuyWrapper_Active : s.btnRegis_StepsToBuyWrapper } onClick={handleSubmit} type="submit" >
                        <div>
                          <span>Далі</span>
                          <img src={arrow_stepsToBuyCourse} className={s.arrowRegis_StepsToBuy} />
                        </div>
                        <img src={btnRegis_StepsToBuy} className={s.btnRegis_StepsToBuy} /> 
                      </div>

                    </div> 
                  )}

                </Formik>

                {/*              
                <div className={s.formRegisStepsToBuy}>

                <input 
                        className={error.code === 'name' && 'errorInput'} 
                        type="text" 
                        value={fullReg.name} 
                        onChange={(e) => setFullReg(({ ...fullReg, name: e.target.value }))} 
                        placeholder="Ваше ім’я" 

                        />

                  <input className={error.code === 'surname' && 'errorInput'} type="text" value={fullReg.surname} onChange={(e) => setFullReg(({ ...fullReg, surname: e.target.value }))} placeholder="Ваше прізвище" />
                  <input className={error.code === 'phone' && 'errorInput'} type="text" value={fullReg.phone} onChange={(e) => setFullReg({ ...fullReg, phone: e.target.value })} placeholder="Номер телефона" />
                  <input className={(error.code === 'mail' || error.code === 'email') && 'errorInput'} type="email" value={fullReg.mail} onChange={(e) => setFullReg(({ ...fullReg, mail: e.target.value }))} placeholder="Електронна адреса" />
                  <input className={error.code === 'password' && 'errorInput'} type="password" value={fullReg.password} onChange={(e) => setFullReg({ ...fullReg, password: e.target.value })} placeholder="Пароль" />
                  <input className={error.code === 'confirmPassword' && 'errorInput'} type="password" value={fullReg.confirmPassword} onChange={(e) => setFullReg({ ...fullReg, confirmPassword: e.target.value })} placeholder="Подтвердить пароль" />
                  

                  <input
                    ref={refDate}
                    type="text"
                    value={fullReg.birthday}
                    onChange={(e) => setFullReg(({ ...fullReg, birthday: e.target.value }))}
                    onFocus={() => (refDate.current.type = 'date')}
                    onBlur={() => (refDate.current.type = "text")}
                    placeholder='Дата народження'
                  /> 
              

                  <div className='errorMessage'>{error.message}</div> 

                  <input type="text" value="Ваше ім’я"/>
                  <input type="text" value="Ваше прізвище"/>
                  <input type="text" value="Номер телефону"/>
                  <input type="text" value="Електронна адреса"/>
                  <input type="text" value="Пароль"/>
                  <input type="text" value="Підтвердити пароль"/> 
                </div>  */}

                {/* <div className={s.btnRegis_StepsToBuyWrapper} onClick={() => fullRegFunc(fullReg)}>
                  <div>
                    <span>Далі</span>
                    <img src={arrow_stepsToBuyCourse} className={s.arrowRegis_StepsToBuy} />
                  </div>
                  <img src={btnRegis_StepsToBuy} className={s.btnRegis_StepsToBuy} /> 
                </div>
                */}
                
      
                <div className={s.lineToDivide}>
                    <div></div>
                    <h5>АБО</h5>
                    <div></div>
                </div>


                <div className={s.singUpWithSocailNetworks}>
                  <img src={singUpWithFacebook} className={s.singUpWithFacebook} alt="" />
                  <img src={singUpWithGoogle} className={s.singUpWithGoogle} alt="" />
                </div>
      
      
              </div> 
      
            </div>
            )
        } else if (toggleThirdStep) {
            return (
              <div className={s.stepsToBuyWrapper_Short}>

              <div className={s.tabsOfSteps}>
                <div className={s.passedTabOfSteps} onClick={toggleStateFirstStep}>
                  <h5>Крок 1 “Визначення рівня”</h5>
                </div>
                <div className={s.passedTabOfSteps} onClick={toggleStateSecondStep}>
                  <h5>Крок 2 “Реєстрація”</h5>
                </div>
                <div className={s.activeTabOfSteps}>
                  <h5>Крок 3 “Оплата”</h5>
                </div>
              </div>
      
              <div className={s.stepsToPaymentWrapper}>
      
                <div className={s.variantsOfPricePayment}>
                  <label className={selectedVariantsOfPrice === 'priceForMonth' ? s.priceForMonthActive : s.priceForMonth} for="priceForMonth">
                    <label className={s.custom_radio_btn}>
                      <input type="radio" name="variantsOfPrice"  id="priceForMonth" value='priceForMonth' checked={selectedVariantsOfPrice === 'priceForMonth'}  onChange={(e)=>{ setSelectedVariantsOfPrice(e.target.value) }} />
                      <span className={s.checkmark}></span>
                    </label>
                    <label for="priceForMonth">
                      {toggleHomeAlonePackage ? 
                        <h4>3 800 грн</h4>
                        :
                        <h4>5 800 грн</h4>
                      } 
                      <span>/ місяць</span>
                    </label>
                  </label>
                  
      
                  <label className={selectedVariantsOfPrice === 'priceForThreeMonth' ? s.priceForThreeMonthActive : s.priceForThreeMonth } for="priceForThreeMonth">
                    <label className={s.custom_radio_btn}>
                      <input type="radio" name="variantsOfPrice" id="priceForThreeMonth" value='priceForThreeMonth' checked={selectedVariantsOfPrice === 'priceForThreeMonth'} onChange={(e)=>{ setSelectedVariantsOfPrice(e.target.value) }}/>
                      <span className={s.checkmark}></span>
                    </label>
                    <label for="priceForThreeMonth">
                      {toggleHomeAlonePackage ? 
                        <h4>10 000 грн</h4>
                        :
                        <h4>15 600 грн</h4>
                      } 
                      <span>/ 3 місяць</span>
                    </label>
      
                    <label for="priceForThreeMonth">
                      <h3 className={s.discountOfPrice} >- 10 %</h3>
                    </label>
                  </label>
      
      
                  <label  className={selectedVariantsOfPrice === 'priceForYear' ? s.priceForYearActive : s.priceForYear }  for="priceForYear">
                    <div className={s.titleOfPriceBlock}>
                      <h5>ВИГІДНА ПРОПОЗИЦІЯ</h5>
                    </div>
      
                    <label className={s.custom_radio_btn}>
                      <input type="radio" name="variantsOfPrice" id="priceForYear" value='priceForYear' checked={selectedVariantsOfPrice === 'priceForYear'} onChange={(e)=>{ setSelectedVariantsOfPrice(e.target.value) }} />
                      <span className={s.checkmark}></span>
                    </label>
                    <label for="priceForYear">
                      {toggleHomeAlonePackage ? 
                        <h4>36 500 грн</h4>
                        :
                        <h4>55 600 грн</h4>
                      } 
                      <span>/ рік</span>
                    </label>
                    <label for="priceForYear">
                      <h3 className={s.discountOfPrice} >- 20 %</h3>
                    </label>
                  </label>
      
                </div>
      
      
                
                <div className={s.paymentInformation}>
                  <h2>Заповніть форму</h2>
                  <span>Введіть номер вашої картки, термії її дії, ПІБ власника, CVV2 код та слідуйте наступним інструкціям</span>
                </div>

                
                <Formik
                  initialValues={{
                    numberOfCard: '',
                    validityOfCard: '',
                    ownersNameOfCard: '',
                    cvv2CodeOfCard: ''
                  }}
                  validateOnBlur
                  onSubmit={(values) => paymentFunc(values)}
                  validationSchema={validationsSchemaPayment}
                >

                  {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
                    <div>
                      <div className={s.cardPaymentFrom}>
                        <div className={s.numberOfCard}>
                          <label>Номер картки:</label>


                          <MaskInput className={touched.numberOfCard && errors.numberOfCard ? 'errorInputPayment' : 'numberOfCard'}
                                    type={`text`} 
                                    name={`numberOfCard`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.numberOfCard}  
                                    
                                    placeholder="XXXX XXXX XXXX XXXX"
                                    maskChar=" " 
                                    mask="0000 0000 0000 0000" 
                                    size={20} />

                          
                        { touched.numberOfCard && errors.numberOfCard && <span className='errorMessagePayment'>{errors.numberOfCard}</span> }
                   
                        </div>

                        <div className={s.validityOfCard}>
                          <label>Термін дії:</label>

                          <MaskInput className={touched.validityOfCard && errors.validityOfCard ? 'errorInputPayment' : 'validityOfCard'}
                                    type={`text`} 
                                    name={`validityOfCard`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.validityOfCard}  
                                    
                                    placeholder="MM/PP" 
                                    maskChar=" " 
                                    mask="00/00" 
                                    size={20} />

                          { touched.validityOfCard && errors.validityOfCard && <span className='errorMessagePayment'>{errors.validityOfCard}</span> }
  
                        </div>

                        <div className={s.ownersNameOfCard}>
                          <label>ПІБ власника:</label>
                          <input className={touched.ownersNameOfCard && errors.ownersNameOfCard ? 'errorInputPayment' : 'ownersNameOfCard'}
                                type={`text`} 
                                name={`ownersNameOfCard`}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.ownersNameOfCard}  
                                
                                placeholder="ПІБ власника картки" 
                                />

                          { touched.ownersNameOfCard && errors.ownersNameOfCard && <span className='errorMessagePayment'>{errors.ownersNameOfCard}</span> }

                        </div>

                        <div className={s.cvv2CodeOfCard}>
                          <label>Код CVV2:</label>
                          <MaskInput className={touched.cvv2CodeOfCard && errors.cvv2CodeOfCard ? 'errorInputPayment' : 'cvv2CodeOfCard'}
                                    type={`text`} 
                                    name={`cvv2CodeOfCard`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.cvv2CodeOfCard}  
                                    
                                    placeholder="XXX"  
                                    maskChar=" " 
                                    mask="000" 
                                    size={20} />
        
                          { touched.cvv2CodeOfCard && errors.cvv2CodeOfCard && <span className='errorMessagePayment'>{errors.cvv2CodeOfCard}</span> }
                          
                        </div>

                      </div>

                      <div className={!isValid || !dirty ? s.btnBuy_Payment_DeActive : s.btnBuy_Payment } onClick={handleSubmit} type="submit">
                        <img src={btnBuy_Payment} />
                        <span>Оплатити</span>
                      </div>

                    </div>

                    // <div className={s.formRegisStepsToBuy}>
                    //   <div className={s.inputFormWrapper}>
                    //     <input 
                    //           className={touched.name && errors.name ? 'errorInput' : 'name'}
                    //           type={`text`} 
                    //           name={`name`}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           value={values.name}  
                              
                    //           placeholder="Ваше ім’я" 
                    //           />

                    //     { touched.name && errors.name && <span className='errorMessage'>{errors.name}</span> }
                    //   </div>
                      
                    //   <div className={s.inputFormWrapper}>
                    //     <input 
                    //           className={touched.surname && errors.surname ? 'errorInput' : 'surname'}
                    //           type={`text`} 
                    //           name={`surname`}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           value={values.surname}  
                              
                    //           placeholder="Ваше прізвище" 
                    //           />

                    //     { touched.surname && errors.surname && <span className='errorMessage'>{errors.surname}</span> }
                    //   </div>

                    //   <div className={s.inputFormWrapper}>
                    //     <input 
                    //           className={touched.phone && errors.phone ? 'errorInput' : 'phone'}
                    //           type={`text`} 
                    //           name={`phone`}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           value={values.phone}  
                              
                    //           placeholder="Номер телефона" 
                    //           />

                    //     { touched.phone && errors.phone && <span className='errorMessage'>{errors.phone}</span> }
                    //   </div>


                    //   <div className={s.inputFormWrapper}>
                    //     <input 
                    //           className={touched.mail && errors.mail ? 'errorInput' : 'mail'}
                    //           type={`text`} 
                    //           name={`mail`}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           value={values.mail}  
                              
                    //           placeholder="Електронна адреса" 
                    //           />

                    //     { touched.mail && errors.mail && <span className='errorMessage'>{errors.mail}</span> }
                    //   </div>

                      
                    //   <div className={s.inputFormWrapper}>
                    //     <input 
                    //           className={touched.password && errors.password ? 'errorInput' : 'password'}
                    //           type={`password`} 
                    //           name={`password`}
                    //           onChange={handleChange}
                    //           onBlur={handleBlur}
                    //           value={values.password}  
                              
                    //           placeholder="Пароль" 
                    //           />

                    //     { touched.password && errors.password && <span className='errorMessage'>{errors.password}</span> }
                    //   </div>


                    //   <div className={s.inputFormWrapper}>
                    //     <input 
                    //         className={touched.confirmPassword && errors.confirmPassword ? 'errorInput' : 'confirmPassword'}
                    //         type={`password`} 
                    //         name={`confirmPassword`}
                    //         onChange={handleChange}
                    //         onBlur={handleBlur}
                    //         value={values.confirmPassword}  
                            
                    //         placeholder="Подтвердить пароль" 
                    //         />

                    //     { touched.confirmPassword && errors.confirmPassword && <span className='errorMessage'>{errors.confirmPassword}</span> }
                    //   </div>

                      
                    //   <div className={!isValid || !dirty ? s.btnRegis_StepsToBuyWrapper_Active : s.btnRegis_StepsToBuyWrapper } onClick={handleSubmit} type="submit" >
                    //     <div>
                    //       <span>Далі</span>
                    //       <img src={arrow_stepsToBuyCourse} className={s.arrowRegis_StepsToBuy} />
                    //     </div>
                    //     <img src={btnRegis_StepsToBuy} className={s.btnRegis_StepsToBuy} /> 
                    //   </div>

                    // </div> 
                  )}

                </Formik>


      
                <div className={s.lineToDivide}>
                    <div></div>
                    <h5>АБО</h5>
                    <div></div>
                </div>


                <div className={s.paymentServices}>
                  <img src={applePayPayment} className={s.applePayPayment} alt="" />
                  <img src={googlePayPayment} className={s.googlePayPayment} alt="" />
                </div>
      
      
              </div> 
      
            </div>
            )
        } 
      })()}


      <div className={s.loginBlock}>
        <h5>Якщо ви вже маєте аккаунт? <span onClick={openLoginForm} >Увійдіть</span> </h5>
      </div>

      <ModalRegAuth
          type='auth'
          isOpen={loginFormIsOpen}
          onAfterOpen={afterOpenLoginForm}
          onRequestClose={closeLoginForm}
          style={customStyles}
          contentLabel="Example Modal"
          funcClick={onAuth}
          errorText={errorText}
        />
      

    </div>
  );

}


export default BuyingMainCoursePage;