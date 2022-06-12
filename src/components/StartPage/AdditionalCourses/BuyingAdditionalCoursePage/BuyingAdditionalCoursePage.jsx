import React, { useState, useEffect, useRef } from 'react';
import s from './BuyingAdditionalCoursePage.module.css';

import {NavLink, Route, useLocation} from "react-router-dom";


import arrow_stepsToBuyCourse from '../../../../assets/images/StartPage/arrow_stepsToBuyCourse.svg';
import arrow_backToPage from '../../../../assets/images/StartPage/arrow_backToPage.svg';
import dragonMainLogo from '../../../../assets/images/StartPage/dragonMainLogo.svg';


import sportAdditionalCourse_Photo from '../../../../assets/images/StartPage/sportAdditionalCourse_Photo.jpeg';

import btnRegis_StepsToBuy from '../../../../assets/images/StartPage/btnRegis_StepsToBuy.svg';

import btnBuy_Payment from '../../../../assets/images/StartPage/btnBuy_Payment.svg';

import DT_Icon from '../../../../assets/images/StartPage/DT_Icon.svg';

import oneWeekSchedule_Photo from '../../../../assets/images/StartPage/oneWeekSchedule_Photo.svg';
import twoWeekSchedule_Photo from '../../../../assets/images/StartPage/twoWeekSchedule_Photo.svg';

import checkmarDayInBrif from '../../../../assets/images/StartPage/checkmarDayInBrif.svg';

import arrowBrif_Left from '../../../../assets/images/StartPage/arrowBrif_Left.svg';
import arrowBrif_Right from '../../../../assets/images/StartPage/arrowBrif_Right.svg';

import btnSave_Brif from '../../../../assets/images/StartPage/btnSave_Brif.svg';
import ModalRegAuth from '../../../ModalRegAuth/ModalRegAuth';


import singUpWithGoogle from '../../../../assets/images/StartPage/singUpWithGoogle.svg';
import singUpWithFacebook from '../../../../assets/images/StartPage/singUpWithFacebook.svg';

import applePayPayment from '../../../../assets/images/StartPage/applePayPayment.svg';
import googlePayPayment from '../../../../assets/images/StartPage/googlePayPayment.svg';




import { Formik, Field } from 'formik';
// import { withFormik } from 'formik';
import * as yup from 'yup';


import MaskInput from 'react-maskinput';
import InputMask from 'react-input-mask';
import SecondWeekBrif from './SecondWeekBrif';
import { render } from 'sass';
import FirstWeekBrif from './FirstWeekBrif';
import WeekBrif from './FirstWeekBrif';



const BuyingAdditionalCoursePage = () => {



  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);






  const [selectedTypeOfSchedule, setSelectedTypeOfSchedule] = useState('oneWeekSchedule');
  const [selectedVariantsOfPaymentMethod, setSelectedVariantsOfPaymentMethod] = useState('priceInUAH');


  


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


  

  const [toggleFirstStepBrif, setToggleFirstStepBrif] = useState(true);
  const [toggleSecondStepBrif, setToggleSecondStepBrif] = useState(false);
  const [toggleThirdStepBrif, setToggleThirdStepBrif] = useState(false);

  const toggleNextStepBrif = () => {
    if (toggleFirstStepBrif){
      if (toggleSecondStepBrif) {
        if (toggleThirdStepBrif) {
          alert("Winner");
        } else if (!toggleThirdStepBrif){
          if(selectedTypeOfSchedule === "oneWeekSchedule"){
            alert("Winner");
          } else {
            setToggleThirdStepBrif(!toggleThirdStepBrif);
          }
        }
      } else if (!toggleSecondStepBrif){
        setToggleSecondStepBrif(!toggleSecondStepBrif);
      }
    } else if (!toggleFirstStepBrif){
      setToggleFirstStepBrif(!toggleFirstStepBrif);
    }
  }


  const togglePrevStepBrif = () => {
    if( toggleFirstStepBrif && toggleSecondStepBrif && toggleThirdStepBrif ){
      setToggleThirdStepBrif(!toggleThirdStepBrif);
    } else if(toggleFirstStepBrif && toggleSecondStepBrif){
      setToggleSecondStepBrif(!toggleSecondStepBrif);
    }
  }


  




  //Loginisation
  const onAuth = (values) => {
    alert(JSON.stringify(values))
  }

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





  const initialValuesRegis = {
    name: '',
    surname: '',
    mail: '',
    phone: '',
    password: '',
    confirmPassword: '',
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
    // initialValuesRegis.name = values.name;
    toggleStateSecondStep();
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
    toggleStateThirdStep();
  }







  const [errorCheckedFirstWeek, setErrorCheckedFirstWeek] = useState(false)
  const [errorCheckedSecondWeek, setErrorCheckedSecondWeek] = useState(false)

  const [toggleFirstActiveButton, setToggleFirstActiveButton] = useState(true);
  const [toggleSecondActiveButton, setToggleSecondActiveButton] = useState(true);


  const [dataOfBrif, setDataOfBrif] = useState({
    typeOfSchedule: "",


    checkedFirstWeek: [],

    inputMondayFirstWeek: 'Hey',
    inputTuesdayFirstWeek: '',
    inputWednesdayFirstWeek: '',
    inputThursdayFirstWeek: '',
    inputFridayFirstWeek: '',
    inputSaturdayFirstWeek: '',
    inputSundayFirstWeek: '',


    checkedSecondWeek: [],

    inputMondaySecondWeek: '',
    inputTuesdaySecondWeek: '',
    inputWednesdaySecondWeek: '',
    inputThursdaySecondWeek: '',
    inputFridaySecondWeek: '',
    inputSaturdaySecondWeek: '',
    inputSundaySecondWeek: '',

  })

  useEffect(() => {
    console.log('dataOfBrif', dataOfBrif);
  }, [dataOfBrif])



  const confirmDataOfFirstStepBrif = () => {
    setDataOfBrif({
        ...dataOfBrif,
        typeOfSchedule: selectedTypeOfSchedule,
    })

    setToggleFirstActiveButton(false);
  }
  const confirmDataOfSecondStepBrif = (values, isLast) => {
    if(isLast === "Finish"){
      alert("Finish")
    }

    setDataOfBrif({
      ...dataOfBrif,

      checkedFirstWeek: values.checkedFirstWeek,

      inputMondayFirstWeek: values.inputMondayFirstWeek,
      inputTuesdayFirstWeek: values.inputTuesdayFirstWeek,
      inputWednesdayFirstWeek: values.inputWednesdayFirstWeek,
      inputThursdayFirstWeek: values.inputThursdayFirstWeek,
      inputFridayFirstWeek: values.inputFridayFirstWeek,
      inputSaturdayFirstWeek: values.inputSaturdayFirstWeek,
      inputSundayFirstWeek: values.inputSundayFirstWeek,
    })

    setToggleSecondActiveButton(false);
    // alert(JSON.stringify(values, null, 2))
  }
  const confirmDataOfThirdStepBrif = (values) => {
    setDataOfBrif({
      ...dataOfBrif,

      checkedSecondWeek: values.checkedSecondWeek,

      inputMondaySecondWeek: values.inputMondaySecondWeek,
      inputTuesdaySecondWeek: values.inputTuesdaySecondWeek,
      inputWednesdaySecondWeek: values.inputWednesdaySecondWeek,
      inputThursdaySecondWeek: values.inputThursdaySecondWeek,
      inputFridaySecondWeek: values.inputFridaySecondWeek,
      inputSaturdaySecondWeek: values.inputSaturdaySecondWeek,
      inputSundaySecondWeek: values.inputSundaySecondWeek,
    })
    alert("Finish")

    alert(JSON.stringify(dataOfBrif, null, 2))
    
  }





  //First Week
  const initialValuesFirstWeek = {
    checkedFirstWeek: [],

    inputMondayFirstWeek: '',
    inputTuesdayFirstWeek: '',
    inputWednesdayFirstWeek: '',
    inputThursdayFirstWeek: '',
    inputFridayFirstWeek: '',
    inputSaturdayFirstWeek: '',
    inputSundayFirstWeek: '',
  }


  function handleValidateFirstWeek(values) {
    let error = {};

    if(values.checkedFirstWeek.indexOf("Monday") !== -1){
      if (!values.inputMondayFirstWeek) {
        error.inputMondayFirstWeek = 'Введіть час';
      } else if (values.inputMondayFirstWeek.length !== 5 && values.inputMondayFirstWeek.length > 1){
        error.inputMondayFirstWeek = 'Невірний час';
      }
    }

    if(values.checkedFirstWeek.indexOf("Tuesday") !== -1){
      if (!values.inputTuesdayFirstWeek) {
        error.inputTuesdayFirstWeek = 'Введіть час';
      } else if (values.inputTuesdayFirstWeek.length !== 5 && values.inputTuesdayFirstWeek.length > 1){
        error.inputTuesdayFirstWeek = 'Невірний час';
      }
    }

    if(values.checkedFirstWeek.indexOf("Wednesday") !== -1){
      if (!values.inputWednesdayFirstWeek) {
        error.inputWednesdayFirstWeek = 'Введіть час';
      } else if (values.inputWednesdayFirstWeek.length !== 5 && values.inputWednesdayFirstWeek.length > 1){
        error.inputWednesdayFirstWeek = 'Невірний час';
      }
    }

    if(values.checkedFirstWeek.indexOf("Thursday") !== -1){
      if (!values.inputThursdayFirstWeek) {
        error.inputThursdayFirstWeek = 'Введіть час';
      } else if (values.inputThursdayFirstWeek.length !== 5 && values.inputThursdayFirstWeek.length > 1){
        error.inputThursdayFirstWeek = 'Невірний час';
      }
    }

    if(values.checkedFirstWeek.indexOf("Friday") !== -1){
      if (!values.inputFridayFirstWeek) {
        error.inputFridayFirstWeek = 'Введіть час';
      } else if (values.inputFridayFirstWeek.length !== 5 && values.inputFridayFirstWeek.length > 1){
        error.inputFridayFirstWeek = 'Невірний час';
      }
    }

    if(values.checkedFirstWeek.indexOf("Saturday") !== -1){
      if (!values.inputSaturdayFirstWeek) {
        error.inputSaturdayFirstWeek = 'Введіть час';
      } else if (values.inputSaturdayFirstWeek.length !== 5 && values.inputSaturdayFirstWeek.length > 1){
        error.inputSaturdayFirstWeek = 'Невірний час';
      }
    }

    if(values.checkedFirstWeek.indexOf("Sunday") !== -1){
      if (!values.inputSundayFirstWeek) {
        error.inputSundayFirstWeek = 'Введіть час';
      } else if (values.inputSundayFirstWeek.length !== 5 && values.inputSundayFirstWeek.length > 1){
        error.inputSundayFirstWeek = 'Невірний час';
      }
    }  

    return error;
  }

  const validateCheckboxFirstWeek = () => {
    setErrorCheckedFirstWeek(true);
  }




  // Second Week
  const initialValuesSecondWeek = {
    checkedSecondWeek: [],

    inputMondaySecondWeek: '',
    inputTuesdaySecondWeek: '',
    inputWednesdaySecondWeek: '',
    inputThursdaySecondWeek: '',
    inputFridaySecondWeek: '',
    inputSaturdaySecondWeek: '',
    inputSundaySecondWeek: '',
  }

  function handleValidateSecondWeek(values) {
    let error = {};

    if(values.checkedSecondWeek.indexOf("Monday") !== -1){
      if (!values.inputMondaySecondWeek) {
        error.inputMondaySecondWeek = 'Введіть час';
      } else if (values.inputMondaySecondWeek.length !== 5 && values.inputMondaySecondWeek.length > 1){
        error.inputMondaySecondWeek = 'Невірний час';
      }
    }

    if(values.checkedSecondWeek.indexOf("Tuesday") !== -1){
      if (!values.inputTuesdaySecondWeek) {
        error.inputTuesdaySecondWeek = 'Введіть час';
      } else if (values.inputTuesdaySecondWeek.length !== 5 && values.inputTuesdaySecondWeek.length > 1){
        error.inputTuesdaySecondWeek = 'Невірний час';
      }
    }

    if(values.checkedSecondWeek.indexOf("Wednesday") !== -1){
      if (!values.inputWednesdaySecondWeek) {
        error.inputWednesdaySecondWeek = 'Введіть час';
      } else if (values.inputWednesdaySecondWeek.length !== 5 && values.inputWednesdaySecondWeek.length > 1){
        error.inputWednesdaySecondWeek = 'Невірний час';
      }
    }

    if(values.checkedSecondWeek.indexOf("Thursday") !== -1){
      if (!values.inputThursdaySecondWeek) {
        error.inputThursdaySecondWeek = 'Введіть час';
      } else if (values.inputThursdaySecondWeek.length !== 5 && values.inputThursdaySecondWeek.length > 1){
        error.inputThursdaySecondWeek = 'Невірний час';
      }
    }

    if(values.checkedSecondWeek.indexOf("Friday") !== -1){
      if (!values.inputFridaySecondWeek) {
        error.inputFridaySecondWeek = 'Введіть час';
      } else if (values.inputFridaySecondWeek.length !== 5 && values.inputFridaySecondWeek.length > 1){
        error.inputFridayFirstWeek = 'Невірний час';
      }
    }

    if(values.checkedSecondWeek.indexOf("Saturday") !== -1){
      if (!values.inputSaturdaySecondWeek) {
        error.inputSaturdaySecondWeek = 'Введіть час';
      } else if (values.inputSaturdaySecondWeek.length !== 5 && values.inputSaturdaySecondWeek.length > 1){
        error.inputSaturdaySecondWeek = 'Невірний час';
      }
    }

    if(values.checkedSecondWeek.indexOf("Sunday") !== -1){
      if (!values.inputSundaySecondWeek) {
        error.inputSundaySecondWeek = 'Введіть час';
      } else if (values.inputSundaySecondWeek.length !== 5 && values.inputSundaySecondWeek.length > 1){
        error.inputSundaySecondWeek = 'Невірний час';
      }
    }  

    return error;
  }

  const validateCheckboxSecondWeek = () => {
    setErrorCheckedSecondWeek(true);
  }









  return (
    
    <div className={s.PageOfBuyingMainCourse}>

      <NavLink to="/" className={s.navLink}>
        <div className={s.backToPrevPage}>
          <img src={arrow_backToPage} />
          <span>Повернутись на Головну</span>
        </div>                              
      </NavLink>



      <div className={s.dragonMainLogoWrapper} >
        <img src={dragonMainLogo} />
        <span>eSchule</span>
      </div>

      <h2>Ви вибрали додатковий курс “Баскетбол”</h2>


      <div className={s.yourAdditionalCourseWrapprer}>
        <div className={s.chooseYourCourse}>
          <img src={sportAdditionalCourse_Photo} className={s.activeCourse} />
        </div>

        <div className={s.chooseYourCourseInformation}>
          <div className={s.titleOfActiveCourse}>
            <h3>300 ₴</h3>
          </div>

          <div className={s.priceOfActiveCourse}>
            <img src={DT_Icon} alt="" />
            <h3>100 DT</h3>
          </div>
        </div>
      </div>

      
      

      {(() => {
        if (toggleFirstStep) {
            return (
              <div className={s.stepsToBuyWrapper_Short}>

              <div className={s.tabsOfSteps}>
                <div className={s.activeTabOfSteps}>
                  <h5>Крок 1 “Реєстрація”</h5>
                </div>
                <div className={s.deactiveTabOfSteps}>
                  <h5>Крок 2 “Оплата”</h5>
                </div>
                <div className={s.deactiveTabOfSteps} onClick={toggleStateThirdStep}>
                  <h5>Крок 3 “Бріф”</h5>
                </div>
              </div>
      
              <div className={s.stepsToRegisWrapper}>
                
                <div className={s.regisInformation}>
                  <h2>Заповніть форму</h2>
                  <span>Введіть ваше ім’я, прізвище, номер телефону, електронну адресу та слідуйте наступним інструкціям</span>
                </div>

                <Formik
                  initialValues={initialValuesRegis}
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
        } else if (toggleSecondStep) {
            return (
              <div className={s.stepsToBuyWrapper_Short}>

              <div className={s.tabsOfSteps}>
                <div className={s.passedTabOfSteps} onClick={toggleStateFirstStep}>
                  <h5>Крок 1 “Реєстрація”</h5>
                </div>
                <div className={s.activeTabOfSteps}>
                  <h5>Крок 2 “Оплата”</h5>
                </div>
                <div className={s.deactiveTabOfSteps}>
                  <h5>Крок 3 “Бріф”</h5>
                </div>
              </div>
      
              <div className={s.stepsToPaymentWrapper}>
              

                <div className={s.variantsOfPaymentMethod}>

                  <label className={selectedVariantsOfPaymentMethod === 'priceInUAH' ? s.priceInUAHActive : s.priceInUAH} for="priceInUAH">
                    <label className={s.custom_radio_btn}>
                      <input type="radio" name="variantsOfPaymentMethod" checked={selectedVariantsOfPaymentMethod === 'priceInUAH'} id="priceInUAH" value='priceInUAH'  onChange={(e)=>{ setSelectedVariantsOfPaymentMethod(e.target.value) }} />
                      <span className={s.checkmark}></span>
                    </label>
                    <label for="priceInUAH">
                      <h4>300 грн</h4>
                    </label>
                  </label>

                  <label className={selectedVariantsOfPaymentMethod === 'priceInDT' ? s.priceInDTActive : s.priceInDT } for="priceInDT">
                    <label className={s.custom_radio_btn}>
                      <input type="radio" name="variantsOfPaymentMethod" checked={selectedVariantsOfPaymentMethod === 'priceInDT'} id="priceInDT" value='priceInDT' onChange={(e)=>{ setSelectedVariantsOfPaymentMethod(e.target.value) }}/>
                      <span className={s.checkmark}></span>
                    </label>
                    <label className={s.priceInDTLabel} for="priceInDT">
                      <h4>100 DT</h4>
                      <img src={DT_Icon} alt="" />
                    </label>
                  </label>

                </div>

      
                {(() => {
                  if (selectedVariantsOfPaymentMethod === 'priceInUAH') {
                      return (
                        <div>
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

                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty, setFieldValue }) => (
                              <div>
                                <div className={s.cardPaymentFrom}>
                                  <div className={s.numberOfCard}>
                                    <label>Номер картки:</label>


                                    {/* <MaskInput className={touched.numberOfCard && errors.numberOfCard ? 'errorInputPayment' : 'numberOfCard'}
                                              type={`text`} 
                                              name={`numberOfCard`}
                                              onChange={handleChange}
                                              onBlur={handleBlur}
                                              value={values.numberOfCard}  
                                              
                                              placeholder="XXXX XXXX XXXX XXXX"
                                              maskChar=" " 
                                              mask="0000 0000 0000 0000" 
                                              size={20} /> */}

                                    <InputMask className={touched.numberOfCard && errors.numberOfCard ? 'errorInputPayment' : 'numberOfCard'}
                                              type={`text`} 
                                              name={`numberOfCard`}
                                              onChange={e => {
                                                const value = e.target.value || "";
                                                setFieldValue("numberOfCard", value);
                                              }}
                                              onBlur={handleBlur}
                                              value={values.numberOfCard}  
                                              
                                              placeholder="XXXX XXXX XXXX XXXX"
                                              maskChar=" " 
                                              mask="9999 9999 9999 9999" 
                                              />

                                    
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
                                          {/* className={error.code === 'name' && 'errorInput'} type="text" value={fullReg.cvv2CodeOfCard} onChange={(e) => setFullReg(({ ...fullReg, cvv2CodeOfCard: e.target.value }))} placeholder="XXX" />
                                  */}
                                  </div>

                                </div>

                                <div className={!isValid || !dirty ? s.btnBuy_Payment_DeActive : s.btnBuy_Payment } onClick={handleSubmit} type="submit">
                                  <img src={btnBuy_Payment} />
                                  <span>Оплатити</span>
                                </div>

                              </div>
                            )}

                          </Formik>
                          
                        </div>
                      )
                  } else if(selectedVariantsOfPaymentMethod === 'priceInDT'){
                    return (
                      
                      <div>
                        <div className={s.yourBalanceOfDT}>
                          <h3>Ваш баланс</h3>
                          <div>
                            <h2>100 DT</h2>
                            <img src={DT_Icon} alt="" />
                          </div>
                        </div>
                        

                        <div className={s.btnBuy_Payment}>
                          <img src={btnBuy_Payment} />
                          <span>Оплатити</span>
                        </div>
                      </div>
                    )
                  }
                })()}

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


        } else if (toggleThirdStep) {
            return (
              <div className={s.stepsToBuyWrapper_Brif}>

                <div className={s.tabsOfSteps}>
                  <div className={s.passedTabOfSteps} onClick={toggleStateFirstStep}>
                    <h5>Крок 1 “Реєстрація”</h5>
                  </div>
                  <div className={s.passedTabOfSteps} onClick={toggleStateSecondStep}>
                    <h5>Крок 2 “Оплата”</h5>
                  </div>
                  <div className={s.activeTabOfSteps}>
                    <h5>Крок 3 “Бріф”</h5>
                  </div>
                </div>

                <div className={s.brifQuestionsWrapper}>
                  <h3>ПРОЙДІТЬ ШВИДКИЙ ТЕСТ ДЛЯ РОЗРАХУВАННЯ ТЕМПУ РОБОТИ</h3>

          

                {selectedTypeOfSchedule === "oneWeekSchedule" ?
                  <div className={s.progressBar}>
                    <div className={s.wrapperProgressBar_block} style={{width: "49.8%"}}>
                        <h5 className={s.progressBar_title} style={toggleFirstStepBrif ? {color: "#D86F6F"} : {color: "#A5A5A5"}}>1</h5>
                        <div className={s.progressBar_block}>
                            <span className={s.progressBar_block_line} id={s.first_progressBar_block_line}></span>
                            <span className={s.progressBar_block_active} id={s.first_progressBar_block_active} style={toggleFirstStepBrif ? {width: "100%"} : {width: "0%"}}></span>
                        </div>
                            
                    </div>

                    <div className={s.wrapperProgressBar_block} style={{width: "49.8%"}}>
                        <h5 className={s.progressBar_title} style={toggleSecondStepBrif ? {color: "#D86F6F"} : {color: "#A5A5A5"}}>2</h5>
                        <div className={s.progressBar_block}>
                            <span className={s.progressBar_block_line} id={s.last_progressBar_block_line}></span>
                            <span className={s.progressBar_block_active} id={s.last_progressBar_block_line} style={toggleSecondStepBrif ? {width: "100%"} : {width: "0%"}}></span>
                        </div>
                    </div>
                  </div>

                  :

                  <div className={s.progressBar}>
                      <div className={s.wrapperProgressBar_block} style={{width: "33%"}}>
                        <h5 className={s.progressBar_title} style={toggleFirstStepBrif ? {color: "#D86F6F"} : {color: "#A5A5A5"}}>1</h5>
                        <div className={s.progressBar_block}>
                            <span className={s.progressBar_block_line} id={s.first_progressBar_block_line}></span>
                            <span className={s.progressBar_block_active} id={s.first_progressBar_block_active} style={toggleFirstStepBrif ? {width: "100%"} : {width: "0%"}}></span>
                        </div>
                            
                      </div>

                      <div className={s.wrapperProgressBar_block} style={{width: "33%"}}>
                          <h5 className={s.progressBar_title} style={toggleSecondStepBrif ? {color: "#D86F6F"} : {color: "#A5A5A5"}}>2</h5>
                          <div className={s.progressBar_block}>
                              <span className={s.progressBar_block_line} ></span>
                              <span className={s.progressBar_block_active}  style={toggleSecondStepBrif ? {width: "100%"} : {width: "0%"}}></span>
                          </div>
                      </div>

                      <div className={s.wrapperProgressBar_block} style={{width: "33%"}}>
                          <h5 className={s.progressBar_title} style={toggleThirdStepBrif ? {color: "#D86F6F"} : {color: "#A5A5A5"}}>3</h5>
                          <div className={s.progressBar_block}>
                              <span className={s.progressBar_block_line} id={s.last_progressBar_block_line}></span>
                              <span className={s.progressBar_block_active} id={s.last_progressBar_block_line} style={toggleThirdStepBrif ? {width: "100%"} : {width: "0%"}}></span>
                          </div>
                      </div>

                  </div>
                }






                {(() => {
                  if (toggleFirstStepBrif && toggleSecondStepBrif && toggleThirdStepBrif) {

                    return (
                      <SecondWeekBrif initialValues={initialValuesSecondWeek}
                                    confirmData={confirmDataOfThirdStepBrif} 
                                    handleValidate={handleValidateSecondWeek} 
                                    validateCheckbox={validateCheckboxSecondWeek}  

                                    togglePrevStepBrif={togglePrevStepBrif}
                                    errorCheckedWeek={errorCheckedSecondWeek}

                                    />

                                    
                    )

                  } else if (toggleFirstStepBrif && toggleSecondStepBrif) {


                    return(

                      <FirstWeekBrif initialValues={initialValuesFirstWeek} 
                                    confirmData={confirmDataOfSecondStepBrif} 
                                    handleValidate={handleValidateFirstWeek} 
                                    validateCheckbox={validateCheckboxFirstWeek}
                                    selectedTypeOfSchedule={selectedTypeOfSchedule}
                                    toggleSecondActiveButton={toggleSecondActiveButton}
                                    togglePrevStepBrif={togglePrevStepBrif}
                                    toggleNextStepBrif={toggleNextStepBrif}
                                    errorCheckedWeek={errorCheckedFirstWeek}

                                    setToggleSecondActiveButton={setToggleSecondActiveButton}
                                    />
                    )

                  } else if (toggleFirstStepBrif) {
                      return (

                        <div>

                          <h4>1. Запланувати однотижневий чи двохтижневий цикл розкладу?</h4>

                          <div className={s.typesOfSchedule}>
                            <label className={s.oneWeekSchedule} for="oneWeekSchedule">
                              <div>
                                <label className={s.custom_radio_btn}>
                                  <input type="radio" name="typesOfSchedule" checked={selectedTypeOfSchedule === 'oneWeekSchedule'} id="oneWeekSchedule" value='oneWeekSchedule'  onChange={(e)=>{ 
                                    setSelectedTypeOfSchedule(e.target.value);  
                                      setToggleFirstActiveButton(true);  
                                    }} />
                                  <span className={s.checkmark}></span>
                                </label>
                                <label for="oneWeekSchedule">
                                  <h4>Однотижневий</h4>
                                </label>
                              </div>

                              <img src={oneWeekSchedule_Photo} alt="" />
                            </label>

                            
                            <label className={s.twoWeekSchedule} for="twoWeekSchedule">
                              <div>
                                <label className={s.custom_radio_btn}>
                                  <input type="radio" name="typesOfSchedule" checked={selectedTypeOfSchedule === 'twoWeekSchedule'} id="twoWeekSchedule" value='twoWeekSchedule'  onChange={(e)=>{ 
                                    setSelectedTypeOfSchedule(e.target.value); 
                                    setToggleFirstActiveButton(true);
                                  }} />
                                  <span className={s.checkmark}></span>
                                </label>
                                <label for="twoWeekSchedule">
                                  <h4>Двотижневий</h4>
                                </label>
                              </div>

                              <img src={twoWeekSchedule_Photo} alt="" />
                            </label>

                          </div>


                          <div className={s.navigationOfBrif}>

                            <div></div>

                            { toggleFirstActiveButton ? 
                              <div className={s.btnSave_Brif} onClick={confirmDataOfFirstStepBrif}>
                                <img src={btnSave_Brif} />
                                <span>Зберегти</span>
                              </div> 
                            : 
                              <div className={s.btnSave_Brif_DeActive}>
                                <img src={btnSave_Brif} />
                                <span>Зберегти</span>
                              </div> 
                            }

                            { toggleFirstActiveButton ? 
                              <img src={arrowBrif_Right} className={s.arrowBrif_Right_DeActive} alt="" />  
                            : 
                              <img src={arrowBrif_Right} className={s.arrowBrif_Right} alt="" onClick={toggleNextStepBrif} />
                            }
                            
                          </div>

                        </div>

                      )
                    } 
                  })()}
                  

                  
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


export default BuyingAdditionalCoursePage;