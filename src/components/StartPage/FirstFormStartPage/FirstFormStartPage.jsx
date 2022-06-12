import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route, useHistory} from "react-router-dom";
import circleForm from '../../../assets/images/circleForm.png';
import formUnderline from '../../../assets/images/StartPage/form-underline.svg';

import btnBanner from '../../../assets/images/btnBanner.png';
import flagForm from '../../../assets/images/StartPage/form-flag.svg';
import btnFormStartFree from '../../../assets/images/StartPage/btnForm-StartFree.svg';


import { Formik } from 'formik';
import * as yup from 'yup';




const FirstFormStartPage = () => {

  const history = useHistory()

  
  // Fast Registration Form
  const validationsSchemaFastReg = yup.object().shape({
    name: yup.string().typeError('Повинен бути текст').required(`Поле обов’язкове`),
    surname: yup.string().typeError('Повинен бути текст').required(`Поле обов’язкове`),
    phone: yup.string().typeError('Повинен бути текст').required(`Поле обов’язкове`),
  })
  

  const onReg = (name, surname, phone) => {
    localStorage.setItem('auth', 2)

    localStorage.setItem('name', name)
    localStorage.setItem('surname', surname)
    localStorage.setItem('phone', phone)

    history.push('/cabinet')
  }
        
  return (

    <Formik
      initialValues={{
        name: '',
        surname: '',
        phone: '',
      }}
      validateOnBlur
      onSubmit={(values) => onReg(values.name, values.surname, values.phone)}
      validationSchema={validationsSchemaFastReg}
    >

      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
      
      <div className={s.firstForm}>
        <div className={s.infoForm}>

          <div className={s.photoForm}>
            <img className={s.circleForm} src={circleForm} />
            <img className={s.flagForm} src={flagForm} />

            <h2>5</h2>
            <h4>перших уроків</h4>
            <h3>БЕЗКОШТОВНО!</h3>
          </div>


          <div className={s.textForm}>
            <h2>Спробуй просто зараз!</h2>

            <img className={s.formUnderline} src={formUnderline} />

            <span>З  унікальною пропозицією на 5 безкоштовних занять  ти зможеш познайомитись з нашою школою, 
              подивитись, як проходять заняття і зрозуміти як працює наша методика.</span>
            
            <div className={s.form}>
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

                { touched.name && errors.name && <span className='errorMessageFastRegis_Page'>{errors.name}</span> }
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

                  { touched.surname && errors.surname && <span className='errorMessageFastRegis_Page'>{errors.surname}</span> }
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

                { touched.phone && errors.phone && <span className='errorMessageFastRegis_Page'>{errors.phone}</span> }
              </div>


              <div className={!isValid || !dirty ? s.regisButton_DeActive : s.regisButton} type="submit" onClick={handleSubmit} >
                <img className={s.btnStartStudy} src={btnFormStartFree} />
                <span>Розпочати навчання</span>
              </div>
              
            </div>
          </div>

        </div>
      </div>

      )}
  </Formik> 
    
  );

}


export default FirstFormStartPage;