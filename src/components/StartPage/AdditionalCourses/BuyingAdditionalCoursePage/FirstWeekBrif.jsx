import React, { useState, useEffect, useRef } from 'react';
import { Formik, Field } from 'formik';
import InputMask from 'react-input-mask';


import s from './BuyingAdditionalCoursePage.module.css';


import checkmarDayInBrif from '../../../../assets/images/StartPage/checkmarDayInBrif.svg';
import arrowBrif_Left from '../../../../assets/images/StartPage/arrowBrif_Left.svg';
import arrowBrif_Right from '../../../../assets/images/StartPage/arrowBrif_Right.svg';
import btnSave_Brif from '../../../../assets/images/StartPage/btnSave_Brif.svg';



const FirstWeekBrif = (props) => {
  
  let isLast = "";

  return (

      <Formik
        initialValues={props.initialValues}

        onSubmit={(values) => {

          if(isLast === "Finish"){
            props.confirmData(values, isLast)
          } else {
            props.confirmData(values)
          }
          
          
        }}

        // onChange={props.setToggleSecondActiveButton(true)}

        validateOnChange={true}
        validateOnBlur={false}
        
        validate={props.handleValidate}
      >

      {({ values, errors, touched, setSubmitting, handleChange, handleBlur, handleSubmit, isValid, dirty, setFieldValue }) => (

      <div>
        <h4>2. У які дні Вам зручно займатись у Першому тижні?</h4>

        <div className={s.variantsOfDaySchedule}>

          <label className={values.checkedFirstWeek.indexOf("Monday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy} onClick={()=>{props.setToggleSecondActiveButton(true)}} >
            <Field type="checkbox" name="checkedFirstWeek" value="Monday" id="checkedMondayFirstWeek" className={s.checkboxInput}/>
            
            <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
            <h4>Понеділок</h4>

            {values.checkedFirstWeek.indexOf("Monday") !== -1 ? 
                <div className={s.timeInputWrapper}>

                  <InputMask className={touched.inputMondayFirstWeek && errors.inputMondayFirstWeek ? s.errorTimeInput : s.timeInput}
                    name='inputMondayFirstWeek'                           
                    placeholder="12 : 00" 
                    value={values.inputMondayFirstWeek} 

                    onChange={e => {
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("inputMondayFirstWeek", changedValue);      
                    }}

                    maskChar=" " 
                    formatChars={{
                      '2': '[0-2]',
                      '4': '[0-4]',
                      '5': '[0-5]',
                      '9': '[0-9]',
                    }}
                    mask={values.inputMondayFirstWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                  />

                  { touched.inputMondayFirstWeek && errors.inputMondayFirstWeek && <span className={s.errorMessageTimeInput}>{errors.inputMondayFirstWeek}</span> } 
                
                </div>
              : 
              <div className={s.fakeTimeInput}>
                <span>{values.inputMondayFirstWeek ? values.inputMondayFirstWeek : "12 : 00"}</span>
              </div>
            }     
          </label>



          <label className={values.checkedFirstWeek.indexOf("Tuesday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy} onClick={()=>{props.setToggleSecondActiveButton(true)}}>
            <Field type="checkbox" name="checkedFirstWeek" value="Tuesday" id="checkedTuesdayFirstWeek" className={s.checkboxInput}/>
            <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
            <h4>Вівторок</h4>

            {values.checkedFirstWeek.indexOf("Tuesday") !== -1 ? 
              <div className={s.timeInputWrapper}>
        
                <InputMask className={touched.inputTuesdayFirstWeek && errors.inputTuesdayFirstWeek ? s.errorTimeInput : s.timeInput}
                  name='inputTuesdayFirstWeek'
                  placeholder="12 : 00" 
                  value={values.inputTuesdayFirstWeek}  

                  onChange={e => {
                    const value = e.target.value || "";
                    const changedValue = value
                      .replace(/\)/g, "")
                      .replace(/\(/g, "")
                      .replace(/-/g, "")
                      .replace(/ /g, "");
                    setFieldValue("inputTuesdayFirstWeek", changedValue);  
                  }}
                                        
                  maskChar=" " 
                  formatChars={{
                    '2': '[0-2]',
                    '4': '[0-4]',
                    '5': '[0-5]',
                    '9': '[0-9]',
                  }}
                  mask={values.inputTuesdayFirstWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                />
            
                { touched.inputTuesdayFirstWeek && errors.inputTuesdayFirstWeek && <span className={s.errorMessageTimeInput}>{errors.inputTuesdayFirstWeek}</span> } 
              
              </div>
              : 
              <div className={s.fakeTimeInput}>
                <span>{values.inputTuesdayFirstWeek ? values.inputTuesdayFirstWeek : "12 : 00"}</span>
              </div>
            }      
          </label>

          <label className={values.checkedFirstWeek.indexOf("Wednesday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy} onClick={()=>{props.setToggleSecondActiveButton(true)}}>
            <Field type="checkbox" name="checkedFirstWeek"  value="Wednesday" id="checkedWednesdayFirstWeek" className={s.checkboxInput} />
            <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
            <h4>Середа</h4>

            {values.checkedFirstWeek.indexOf("Wednesday") !== -1 ? 
              <div className={s.timeInputWrapper}>
                <InputMask className={touched.inputWednesdayFirstWeek && errors.inputWednesdayFirstWeek ? s.errorTimeInput : s.timeInput}
                  name='inputWednesdayFirstWeek' 
                  placeholder="12 : 00" 
                  value={values.inputWednesdayFirstWeek}  

                  onChange={e => {
                    const value = e.target.value || "";
                    const changedValue = value
                      .replace(/\)/g, "")
                      .replace(/\(/g, "")
                      .replace(/-/g, "")
                      .replace(/ /g, "");
                    setFieldValue("inputWednesdayFirstWeek", changedValue); 
                  }}
                  
                  maskChar=" " 
                  formatChars={{
                    '2': '[0-2]',
                    '4': '[0-4]',
                    '5': '[0-5]',
                    '9': '[0-9]',
                  }}
                  mask={values.inputWednesdayFirstWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                />

                { touched.inputWednesdayFirstWeek && errors.inputWednesdayFirstWeek && <span className={s.errorMessageTimeInput}>{errors.inputWednesdayFirstWeek}</span> } 
              
              </div>
              : 
              <div className={s.fakeTimeInput}>
                <span>{values.inputWednesdayFirstWeek ? values.inputWednesdayFirstWeek : "12 : 00"}</span>
              </div>
            }      
          </label>

          <label className={values.checkedFirstWeek.indexOf("Thursday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy} onClick={()=>{props.setToggleSecondActiveButton(true)}}>
            <Field type="checkbox" name="checkedFirstWeek" value="Thursday" id="checkedThursdayFirstWeek" className={s.checkboxInput} />
            <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
            <h4>Червер</h4>

            {values.checkedFirstWeek.indexOf("Thursday") !== -1 ? 
              <div className={s.timeInputWrapper}>
                <InputMask className={touched.inputThursdayFirstWeek && errors.inputThursdayFirstWeek ? s.errorTimeInput : s.timeInput}
                  name='inputThursdayFirstWeek' 
                  placeholder="12 : 00" 
                  value={values.inputThursdayFirstWeek} 

                  onChange={e => {
                    const value = e.target.value || "";
                    const changedValue = value
                      .replace(/\)/g, "")
                      .replace(/\(/g, "")
                      .replace(/-/g, "")
                      .replace(/ /g, "");
                    setFieldValue("inputThursdayFirstWeek", changedValue);          
                  }}
                  
                  maskChar=" " 
                  formatChars={{
                    '2': '[0-2]',
                    '4': '[0-4]',
                    '5': '[0-5]',
                    '9': '[0-9]',
                  }}
                  mask={values.inputThursdayFirstWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                />

                { touched.inputThursdayFirstWeek && errors.inputThursdayFirstWeek && <span className={s.errorMessageTimeInput}>{errors.inputThursdayFirstWeek}</span> } 
              
              </div>
              : 
              <div className={s.fakeTimeInput}>
                <span>{values.inputThursdayFirstWeek ? values.inputThursdayFirstWeek : "12 : 00"}</span>
              </div>
            }      
          </label>

          <label className={values.checkedFirstWeek.indexOf("Friday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy} onClick={()=>{props.setToggleSecondActiveButton(true)}}>
            <Field type="checkbox" name="checkedFirstWeek" value="Friday" id="checkedFridayFirstWeek" className={s.checkboxInput}  />
            <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
            <h4>П'ятниця</h4>

            {values.checkedFirstWeek.indexOf("Friday") !== -1 ? 
              <div className={s.timeInputWrapper}>
                <InputMask className={touched.inputFridayFirstWeek && errors.inputFridayFirstWeek ? s.errorTimeInput : s.timeInput}
                  name='inputFridayFirstWeek' 
                  placeholder="12 : 00" 
                  value={values.inputFridayFirstWeek} 

                  onChange={e => {
                    const value = e.target.value || "";
                    const changedValue = value
                      .replace(/\)/g, "")
                      .replace(/\(/g, "")
                      .replace(/-/g, "")
                      .replace(/ /g, "");
                    setFieldValue("inputFridayFirstWeek", changedValue);         
                  }}
                  
                  maskChar=" " 
                  formatChars={{
                    '2': '[0-2]',
                    '4': '[0-4]',
                    '5': '[0-5]',
                    '9': '[0-9]',
                  }}
                  mask={values.inputFridayFirstWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                />

                { touched.inputFridayFirstWeek && errors.inputFridayFirstWeek && <span className={s.errorMessageTimeInput}>{errors.inputFridayFirstWeek}</span> } 
              
              </div>
              : 
              <div className={s.fakeTimeInput}>
                <span>{values.inputFridayFirstWeek ? values.inputFridayFirstWeek : "12 : 00"}</span>
              </div>
            }      
          </label>

          <label className={values.checkedFirstWeek.indexOf("Saturday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy} onClick={()=>{props.setToggleSecondActiveButton(true)}}>
            <Field type="checkbox" name="checkedFirstWeek"  value="Saturday" id="checkedSaturdayFirstWeek" className={s.checkboxInput} />
            <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
            <h4>Субота</h4>

            {values.checkedFirstWeek.indexOf("Saturday") !== -1 ? 
              <div className={s.timeInputWrapper}>
                <InputMask className={touched.inputSaturdayFirstWeek && errors.inputSaturdayFirstWeek ? s.errorTimeInput : s.timeInput}
                  name='inputSaturdayFirstWeek' 
                  placeholder="12 : 00" 
                  value={values.inputSaturdayFirstWeek}  

                  onChange={e => { 
                    const value = e.target.value || "";
                    const changedValue = value
                      .replace(/\)/g, "")
                      .replace(/\(/g, "")
                      .replace(/-/g, "")
                      .replace(/ /g, "");
                    setFieldValue("inputSaturdayFirstWeek", changedValue);   
                  }}
                  
                  maskChar=" " 
                  formatChars={{
                    '2': '[0-2]',
                    '4': '[0-4]',
                    '5': '[0-5]',
                    '9': '[0-9]',
                  }}
                  mask={values.inputSaturdayFirstWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                />

                { touched.inputSaturdayFirstWeek && errors.inputSaturdayFirstWeek && <span className={s.errorMessageTimeInput}>{errors.inputSaturdayFirstWeek}</span> }   
              </div>
              : 
              <div className={s.fakeTimeInput}>
                <span>{values.inputSaturdayFirstWeek ? values.inputSaturdayFirstWeek : "12 : 00"}</span>
              </div>
            }      
          </label>

          <label className={values.checkedFirstWeek.indexOf("Sunday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy} onClick={()=>{props.setToggleSecondActiveButton(true)}}>
            <Field type="checkbox" name="checkedFirstWeek" value="Sunday" id="checkedSundayFirstWeek" className={s.checkboxInput} />
            <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
            <h4>Неділя</h4>

            {values.checkedFirstWeek.indexOf("Sunday") !== -1 ? 
              <div className={s.timeInputWrapper}>
                <InputMask className={touched.inputSundayFirstWeek && errors.inputSundayFirstWeek ? s.errorTimeInput : s.timeInput}
                  name='inputSundayFirstWeek' 
                  placeholder="12 : 00" 
                  value={values.inputSundayFirstWeek}  

                  onChange={e => {
                    const value = e.target.value || "";
                    const changedValue = value
                      .replace(/\)/g, "")
                      .replace(/\(/g, "")
                      .replace(/-/g, "")
                      .replace(/ /g, "");
                    setFieldValue("inputSundayFirstWeek", changedValue);
                  }}
                  
                  maskChar=" " 
                  formatChars={{
                    '2': '[0-2]',
                    '4': '[0-4]',
                    '5': '[0-5]',
                    '9': '[0-9]',
                  }}
                  mask={values.inputSundayFirstWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                />

                { touched.inputSundayFirstWeek && errors.inputSundayFirstWeek && <span className={s.errorMessageTimeInput}>{errors.inputSundayFirstWeek}</span> } 
              </div>
              : 
              <div className={s.fakeTimeInput}>
                <span>{values.inputSundayFirstWeek ? values.inputSundayFirstWeek : "12 : 00"}</span>
              </div>
            }      
          </label>

          <div className={s.empty}></div>

        </div>
{/* 
        {props.toggleSecondActiveButton} */}


        { props.errorCheckedWeek && <span className={s.errorMessageTimeInput}>Оберіть дні</span> } 
        

        {props.selectedTypeOfSchedule === "oneWeekSchedule" ?
          <div className={s.navigationOfBrif}>
            <img src={arrowBrif_Left} className={s.arrowBrif_Left} alt="" onClick={props.togglePrevStepBrif} />
            
            { !values.checkedFirstWeek.length ?
              <div className={ s.btnSave_Brif_DeActive} onClick={ props.validateCheckbox }>
                <img src={btnSave_Brif} />
                <span>Готово</span>
              </div>
              :
              <div ocClick={isLast = "Finish"}>
                <div className={ s.btnSave_Brif}  onClick={handleSubmit} type="submit" >
                  <img src={btnSave_Brif} />
                  <span>Готово</span>
                </div>
              </div>
            }
            
            <div></div>
          </div>

        : 

          <div className={s.navigationOfBrif}>
            <img src={arrowBrif_Left} className={s.arrowBrif_Left} alt="" onClick={props.togglePrevStepBrif} />
            
            { !values.checkedFirstWeek.length ?
              <div className={ s.btnSave_Brif_DeActive} onClick={ props.validateCheckbox }>
                <img src={btnSave_Brif} />
                <span>Зберегти</span>
              </div>

              :

              <div>
                { props.toggleSecondActiveButton ?
                  <div className={ s.btnSave_Brif}  onClick={handleSubmit} type="submit" >
                    <img src={btnSave_Brif} />
                    <span>Зберегти</span>
                  </div>
                :
                  <div className={ s.btnSave_Brif_DeActive} onClick={ props.validateCheckbox }>
                    <img src={btnSave_Brif} />
                    <span>Зберегти</span>
                  </div>
                }
              </div>
            }


            { props.toggleSecondActiveButton ? 
              <img src={arrowBrif_Right} className={s.arrowBrif_Right_DeActive} alt="" />  
            : 
              <img src={arrowBrif_Right} className={s.arrowBrif_Right} alt="" onClick={props.toggleNextStepBrif} />
            }

          </div>
        }

       

      </div>
    )}
    </Formik>
  
)



}


export default FirstWeekBrif;