import React, { useEffect, useState, useRef } from 'react'
import {NavLink, Route, useLocation} from "react-router-dom";
import Modal from 'react-modal';
import sm from './Modal.module.css'
import s from '../../StartPage/AdditionalCourses/BuyingAdditionalCoursePage/BuyingAdditionalCoursePage.module.css';


import { Formik, Field } from 'formik';
// import { withFormik } from 'formik';
import * as yup from 'yup';



import close_icon from '../../../assets/images/close.svg';
import btnModal_Confirm from '../../../assets/images/btnModal_Confirm.svg';

import tieUpGoogle_Cabinet from '../../../assets/images/tieUpGoogle_Cabinet.svg';
import tieUpFacebook_Cabinet from '../../../assets/images/tieUpFacebook_Cabinet.svg';


import oneWeekSchedule_Photo from '../../../assets/images/StartPage/oneWeekSchedule_Photo.svg';
import twoWeekSchedule_Photo from '../../../assets/images/StartPage/twoWeekSchedule_Photo.svg';


import arrowBrif_Right from '../../../assets/images/StartPage/arrowBrif_Right.svg';
import DT_Icon from '../../../assets/images/StartPage/DT_Icon.svg';
import btnSave_Brif from '../../../assets/images/StartPage/btnSave_Brif.svg';

import confirmedInput from '../../../assets/images/confirmedInput.svg';
import notConfirmedInput from '../../../assets/images/notConfirmedInput.svg';




import SecondWeekBrif from '../../StartPage/AdditionalCourses/BuyingAdditionalCoursePage/SecondWeekBrif';
import FirstWeekBrif from '../../StartPage/AdditionalCourses/BuyingAdditionalCoursePage/FirstWeekBrif';

 

const ModalRegAuth = ({ type, isOpen, onAfterOpen, onRequestClose, style, contentLabel, funcClick, subtitle, errorText }) => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const [typeOfModal, setTypeOfModal] = useState(type)
  const [selectedTypeOfSchedule, setSelectedTypeOfSchedule] = useState('oneWeekSchedule');
    

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
        error.inputMondayFirstWeek = '?????????????? ??????';
      } else if (values.inputMondayFirstWeek.length !== 5 && values.inputMondayFirstWeek.length > 1){
        error.inputMondayFirstWeek = '???????????????? ??????';
      }
    }

    if(values.checkedFirstWeek.indexOf("Tuesday") !== -1){
      if (!values.inputTuesdayFirstWeek) {
        error.inputTuesdayFirstWeek = '?????????????? ??????';
      } else if (values.inputTuesdayFirstWeek.length !== 5 && values.inputTuesdayFirstWeek.length > 1){
        error.inputTuesdayFirstWeek = '???????????????? ??????';
      }
    }

    if(values.checkedFirstWeek.indexOf("Wednesday") !== -1){
      if (!values.inputWednesdayFirstWeek) {
        error.inputWednesdayFirstWeek = '?????????????? ??????';
      } else if (values.inputWednesdayFirstWeek.length !== 5 && values.inputWednesdayFirstWeek.length > 1){
        error.inputWednesdayFirstWeek = '???????????????? ??????';
      }
    }

    if(values.checkedFirstWeek.indexOf("Thursday") !== -1){
      if (!values.inputThursdayFirstWeek) {
        error.inputThursdayFirstWeek = '?????????????? ??????';
      } else if (values.inputThursdayFirstWeek.length !== 5 && values.inputThursdayFirstWeek.length > 1){
        error.inputThursdayFirstWeek = '???????????????? ??????';
      }
    }

    if(values.checkedFirstWeek.indexOf("Friday") !== -1){
      if (!values.inputFridayFirstWeek) {
        error.inputFridayFirstWeek = '?????????????? ??????';
      } else if (values.inputFridayFirstWeek.length !== 5 && values.inputFridayFirstWeek.length > 1){
        error.inputFridayFirstWeek = '???????????????? ??????';
      }
    }

    if(values.checkedFirstWeek.indexOf("Saturday") !== -1){
      if (!values.inputSaturdayFirstWeek) {
        error.inputSaturdayFirstWeek = '?????????????? ??????';
      } else if (values.inputSaturdayFirstWeek.length !== 5 && values.inputSaturdayFirstWeek.length > 1){
        error.inputSaturdayFirstWeek = '???????????????? ??????';
      }
    }

    if(values.checkedFirstWeek.indexOf("Sunday") !== -1){
      if (!values.inputSundayFirstWeek) {
        error.inputSundayFirstWeek = '?????????????? ??????';
      } else if (values.inputSundayFirstWeek.length !== 5 && values.inputSundayFirstWeek.length > 1){
        error.inputSundayFirstWeek = '???????????????? ??????';
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
        error.inputMondaySecondWeek = '?????????????? ??????';
      } else if (values.inputMondaySecondWeek.length !== 5 && values.inputMondaySecondWeek.length > 1){
        error.inputMondaySecondWeek = '???????????????? ??????';
      }
    }

    if(values.checkedSecondWeek.indexOf("Tuesday") !== -1){
      if (!values.inputTuesdaySecondWeek) {
        error.inputTuesdaySecondWeek = '?????????????? ??????';
      } else if (values.inputTuesdaySecondWeek.length !== 5 && values.inputTuesdaySecondWeek.length > 1){
        error.inputTuesdaySecondWeek = '???????????????? ??????';
      }
    }

    if(values.checkedSecondWeek.indexOf("Wednesday") !== -1){
      if (!values.inputWednesdaySecondWeek) {
        error.inputWednesdaySecondWeek = '?????????????? ??????';
      } else if (values.inputWednesdaySecondWeek.length !== 5 && values.inputWednesdaySecondWeek.length > 1){
        error.inputWednesdaySecondWeek = '???????????????? ??????';
      }
    }

    if(values.checkedSecondWeek.indexOf("Thursday") !== -1){
      if (!values.inputThursdaySecondWeek) {
        error.inputThursdaySecondWeek = '?????????????? ??????';
      } else if (values.inputThursdaySecondWeek.length !== 5 && values.inputThursdaySecondWeek.length > 1){
        error.inputThursdaySecondWeek = '???????????????? ??????';
      }
    }

    if(values.checkedSecondWeek.indexOf("Friday") !== -1){
      if (!values.inputFridaySecondWeek) {
        error.inputFridaySecondWeek = '?????????????? ??????';
      } else if (values.inputFridaySecondWeek.length !== 5 && values.inputFridaySecondWeek.length > 1){
        error.inputFridayFirstWeek = '???????????????? ??????';
      }
    }

    if(values.checkedSecondWeek.indexOf("Saturday") !== -1){
      if (!values.inputSaturdaySecondWeek) {
        error.inputSaturdaySecondWeek = '?????????????? ??????';
      } else if (values.inputSaturdaySecondWeek.length !== 5 && values.inputSaturdaySecondWeek.length > 1){
        error.inputSaturdaySecondWeek = '???????????????? ??????';
      }
    }

    if(values.checkedSecondWeek.indexOf("Sunday") !== -1){
      if (!values.inputSundaySecondWeek) {
        error.inputSundaySecondWeek = '?????????????? ??????';
      } else if (values.inputSundaySecondWeek.length !== 5 && values.inputSundaySecondWeek.length > 1){
        error.inputSundaySecondWeek = '???????????????? ??????';
      }
    }  

    return error;
  }

  const validateCheckboxSecondWeek = () => {
    setErrorCheckedSecondWeek(true);
  }


  const initialValuesRegis = {
    name: '????????????',
    surname: '??????????????????',
    login: 'andriyandrienko',
    date: '12 - 12 - 1999',
    mail: 'andriyandrienko@gmail.com',
    phone: '+380 97 123 45 67',
    password: '',
    confirmPassword: '',
  }

  // Registration Form
  const validationsSchemaReg = yup.object().shape({
    name: yup.string().typeError('?????????????? ???????? ??????????').required(`???????? ???????????????????????`),
    surname: yup.string().typeError('?????????????? ???????? ??????????').required(`???????? ???????????????????????`),

    phone: yup.string().typeError('?????????????? ???????? ??????????').required(`???????? ???????????????????????`),
    mail: yup.string().email('?????????????? ????????????').required(`???????? ???????????????????????`),

    password: yup.string().typeError('?????????????? ???????? ??????????').required(`???????? ???????????????????????`).min(8, "?????????????? 8 ????????????????"),
    confirmPassword: yup.string().min(8, "?????????????? 8 ????????????????").oneOf([yup.ref('password')], '???????????? ???? ??????????????????????').required(`???????? ???????????????????????`)
  })

  const fullRegFunc = (values) => {
    alert("Name: " + values.name + "\nSurname: " + values.surname + "\nEmail: " + values.mail + "\nPhone: " + values.phone + "\nPassword: " + values.password + "\nConfirm password: " + values.confirmPassword)
    // initialValuesRegis.name = values.name;
    // toggleStateSecondStep();
  }






    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            style={style}
            contentLabel={contentLabel}
        >

            <div className={s.modal_wrapper}>


                <img onClick={() => {
                    onRequestClose()
                }} src={close_icon} className={s.close_icon}></img> 


            {(() => {
                if (typeOfModal === 'brifOfLevel') {
                    return (

                <div className={s.brifQuestionsWrapper}>
                    <h3>???????????????? ?????????????? ???????? ?????? ???????????????????????? ?????????? ???????????? ???? ??1</h3>



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

                                    <h4>1. ?????????????????????? ???????????????????????? ???? ???????????????????????? ???????? ?????????????????</h4>

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
                                                <h4>????????????????????????</h4>
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
                                                <h4>??????????????????????</h4>
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
                                                <span>????????????????</span>
                                            </div> 
                                        : 
                                            <div className={s.btnSave_Brif_DeActive}>
                                                <img src={btnSave_Brif} />
                                                <span>????????????????</span>
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
                )
            } else if( type === "firstDT"){
                    return (
                        <div className={sm.firstDt_Modal}>
                            <h3>??????????????!</h3>
                            <h4>???? ?????????????? ???????? ?????????? ?????????????????? ????????</h4>

                            <div className={sm.countsOfDT}>
                                <img src={DT_Icon} alt="" />
                                <h2>+1 DT</h2>
                            </div>

                            <p>?????????????? ??????????????, ?????????????? ???????? ???? ???????????????? ???? ???? ?????????????????? ????????!</p>

                            <div className={sm.btnModal_Confirm}>
                                <img src={btnModal_Confirm} alt="" />
                                <span>????????????!</span>
                            </div>
                        </div>
                    )
                
                } else if( type === "cancelSubscription"){
                    return (
                        <div className={sm.cancelSubscription_Modal}>
                            <h4>???? ???????????????? ????, ???? ?????????????? ???????????????????? ?????????????????????? ?????????????????</h4>

                            <div className={sm.btnModal_Confirm}>
                                <img src={btnModal_Confirm} alt="" />
                                <span>??????</span>
                            </div>
                        </div>
                    )
                
                } else if( type === "editPersonalData"){
                    return (
                        <div className={sm.editPersonalData_Modal}>
                            <h4>?????????????????????? ?????????????????? ??????????</h4>


                            <Formik
                                initialValues={initialValuesRegis}
                                validateOnBlur
                                onSubmit={(values) => fullRegFunc(values)}
                                validationSchema={validationsSchemaReg}
                            >

                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (

                                <div className={sm.formEditPersonalData}>
                                    <div className={sm.inputFormWrapper}>

                                        <label htmlFor="name">?????????</label>
                                        <input 
                                            className={touched.name && errors.name ? 'errorInput' : 'name'}
                                            type={`text`} 
                                            name={`name`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}  
                                            
                                            placeholder="???????? ?????????" 
                                            />

                                        { touched.name && errors.name && <span className='errorMessage'>{errors.name}</span> }
                                    </div>
                                    
                                    <div className={sm.inputFormWrapper}>
                                        <label htmlFor="name">????????????????</label>
                                        <input 
                                            className={touched.surname && errors.surname ? 'errorInput' : 'surname'}
                                            type={`text`} 
                                            name={`surname`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.surname}  
                                            
                                            placeholder="???????? ????????????????" 
                                            />

                                        { touched.surname && errors.surname && <span className='errorMessage'>{errors.surname}</span> }
                                    </div>

                                    <div className={sm.inputFormWrapper}>
                                        <label htmlFor="name">??????????</label>
                                        <input 
                                            className={touched.login && errors.login ? 'errorInput' : 'login'}
                                            type={`text`} 
                                            name={`login`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.login}  
                                            
                                            placeholder="??????????" 
                                            />

                                        { touched.login && errors.login && <span className='errorMessage'>{errors.login}</span> }
                                    </div>


                                    <div className={sm.inputFormWrapper}>
                                        <label htmlFor="date">???????? ????????????????????</label>
                                        <input 
                                            className={touched.date && errors.date ? 'errorInput' : 'date'}
                                            type={`text`} 
                                            name={`date`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.date}  
                                            
                                            placeholder="???????? ????????????????????" 
                                            />

                                        { touched.date && errors.date && <span className='errorMessage'>{errors.date}</span> }
                                    </div>

                                    <div className={sm.inputFormWrapper}>
                                        <label htmlFor="name">?????????? ????????????????</label>
                                        <input 
                                            className={touched.phone && errors.phone ? 'errorInput' : 'phone'}
                                            type={`text`} 
                                            name={`phone`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}  
                                            
                                            placeholder="?????????? ????????????????" 
                                            />

                                        <img src={confirmedInput} alt="" />

                                        { touched.phone && errors.phone && <span className='errorMessage'>{errors.phone}</span> }
                                    </div>


                                    <div className={sm.inputFormWrapper}>
                                        <label htmlFor="name">???????????????????? ????????????</label>
                                        <input 
                                            className={touched.mail && errors.mail ? 'errorInput' : 'mail'}
                                            type={`text`} 
                                            name={`mail`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mail}  
                                            
                                            placeholder="???????????????????? ????????????" 
                                            />

                                        <img src={notConfirmedInput} alt="" />

                                        <p>?????????? ?????????????????????? ?????????? ???? ??????????????????????????. <span>????????????????????</span></p>

                                        { touched.mail && errors.mail && <span className='errorMessage'>{errors.mail}</span> }
                                    </div>

                                    
                                    <div className={sm.inputFormWrapper}>
                                        <label htmlFor="name">???????????? (????????????????)</label>
                                        <input 
                                            className={touched.password && errors.password ? 'errorInput' : 'password'}
                                            type={`password`} 
                                            name={`password`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}  
                                            
                                            placeholder="????????????" 
                                            />

                                        { touched.password && errors.password && <span className='errorMessage'>{errors.password}</span> }
                                    </div>


                                    <div className={sm.inputFormWrapper}>
                                        <label htmlFor="name">???????????? (??????????)</label>
                                        <input 
                                            className={touched.confirmPassword && errors.confirmPassword ? 'errorInput' : 'confirmPassword'}
                                            type={`password`} 
                                            name={`confirmPassword`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.confirmPassword}  
                                            
                                            placeholder="?????????????????????? ????????????" 
                                            />

                                        { touched.confirmPassword && errors.confirmPassword && <span className='errorMessage'>{errors.confirmPassword}</span> }
                                    </div>

{/*                                 
                                <div className={!isValid || !dirty ? s.btnRegis_StepsToBuyWrapper_Active : s.btnRegis_StepsToBuyWrapper } onClick={handleSubmit} type="submit" >
                                    <div>
                                    <span>????????</span>
                                    <img src={arrow_stepsToBuyCourse} className={s.arrowRegis_StepsToBuy} />
                                    </div>
                                    <img src={btnRegis_StepsToBuy} className={s.btnRegis_StepsToBuy} /> 
                                </div> */}

                                </div> 
                            )}

                            </Formik>

                            <div className={sm.socailNetworksTie}>
                                <img src={tieUpFacebook_Cabinet} className={sm.tieUpFacebook_Cabinet} alt="" />
                                <img src={tieUpGoogle_Cabinet} className={sm.tieUpGoogle_Cabinet} alt="" /> 
                            </div>
        

                            <div className={sm.btnModal_Confirm}>
                                <img src={btnModal_Confirm} alt="" />
                                <span>????????????????</span>
                            </div>
                        </div>
                    )
                
                } 
            })()}

            </div>
        </Modal>
    )
}

export default ModalRegAuth
