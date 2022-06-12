import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route, useHistory} from "react-router-dom";
import photoSecondForm from '../../../assets/images/photoSecondForm.png';
import flagForm from '../../../assets/images/flagForm.png';
import btnBanner from '../../../assets/images/btnBanner.png';
import btnForm2StartFree from '../../../assets/images/StartPage/btnForm2-StartFree.svg';


import { Formik } from 'formik';
import * as yup from 'yup';



const SecondFormStartPage = () => {

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
      
      // <div className={s.firstForm}>
      //   <div className={s.infoForm}>

      //     <div className={s.photoForm}>
      //       <img className={s.circleForm} src={circleForm} />
      //       <img className={s.flagForm} src={flagForm} />

      //       <h2>5</h2>
      //       <h4>перших уроків</h4>
      //       <h3>БЕЗКОШТОВНО!</h3>
      //     </div>


      //     <div className={s.textForm}>
      //       <h2>Спробуй просто зараз!</h2>

      //       <img className={s.formUnderline} src={formUnderline} />

      //       <span>З  унікальною пропозицією на 5 безкоштовних занять  ти зможеш познайомитись з нашою школою, 
      //         подивитись, як проходять заняття і зрозуміти як працює наша методика.</span>
            
      //       <div className={s.form}>
              
              
      //       </div>
      //     </div>

      //   </div>
      // </div>

      <div className={s.secondFormWrapper}>
        <div className={s.leftVoice}>

          <img className={s.photoSecondForm} src={photoSecondForm} alt="" />
          <img className={s.flagForm} src={flagForm} />

          <h1>5</h1>
          <h4>уроків</h4>
          <h3>БЕЗКОШТОВНО!</h3>
          
        </div>

        <div className={s.rightForm}>
          <h2>Спробуй просто зараз!</h2>
          <p>Залиши заявку і ми звяжемось з тобою найближчим часом!</p>

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

            { touched.name && errors.name && <span className='errorMessageFastRegis_PageSecond'>{errors.name}</span> }
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

              { touched.surname && errors.surname && <span className='errorMessageFastRegis_PageSecond'>{errors.surname}</span> }
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

            { touched.phone && errors.phone && <span className='errorMessageFastRegis_PageSecond'>{errors.phone}</span> }
          </div>


          <div className={!isValid || !dirty ? s.regisButton_DeActive : s.regisButton} type="submit" onClick={handleSubmit} >
            <img className={s.btnStartStudy} src={btnForm2StartFree} />
            <span>Розпочати навчання</span>
          </div>

{/* 
          <input type="text" value="Ваше ім’я"/>
          <input type="text" value="Ваше прізвище"/>
          <input type="text" value="Номер телефону"/> */}


        </div>
      </div>

      )}
  </Formik> 
    
    
  );

}


export default SecondFormStartPage;