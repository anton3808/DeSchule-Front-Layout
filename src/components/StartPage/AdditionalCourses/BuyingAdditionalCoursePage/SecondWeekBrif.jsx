import React from 'react';
import { Formik, Field } from 'formik';
import InputMask from 'react-input-mask';

import s from './BuyingAdditionalCoursePage.module.css';

import checkmarDayInBrif from '../../../../assets/images/StartPage/checkmarDayInBrif.svg';
import arrowBrif_Left from '../../../../assets/images/StartPage/arrowBrif_Left.svg';
import btnSave_Brif from '../../../../assets/images/StartPage/btnSave_Brif.svg';



const SecondWeekBrif = (props) => {

  return (

    <Formik
      initialValues={props.initialValues}

      onSubmit={(values) => {
        props.confirmData(values)
      }}

      validateOnChange={true}
      validateOnBlur={false}
      
      validate={props.handleValidate}
    >

      {({ values, errors, touched, setSubmitting, handleChange, handleBlur, handleSubmit, isValid, dirty, setFieldValue }) => (
        
        <div>
          <h4>3. У які дні Вам зручно займатись у Другому тижні?</h4>

          <div className={s.variantsOfDaySchedule}>
          
            <label className={values.checkedSecondWeek.indexOf("Monday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy}>
              <Field type="checkbox" name="checkedSecondWeek" value="Monday" id="checkedMondaySecondWeek" className={s.checkboxInput} />
              
              <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
              <h4>Понеділок</h4>

              {values.checkedSecondWeek.indexOf("Monday") !== -1 ? 
                  <div className={s.timeInputWrapper}>

                    <InputMask className={touched.inputMondaySecondWeek && errors.inputMondaySecondWeek ? s.errorTimeInput : s.timeInput}
                      name='inputMondaySecondWeek'                           
                      placeholder="12 : 00" 
                      value={values.inputMondaySecondWeek} 

                      onChange={e => {
                        const value = e.target.value || "";
                        const changedValue = value
                          .replace(/\)/g, "")
                          .replace(/\(/g, "")
                          .replace(/-/g, "")
                          .replace(/ /g, "");
                        setFieldValue("inputMondaySecondWeek", changedValue);      
                      }}

                      maskChar=" " 
                      formatChars={{
                        '2': '[0-2]',
                        '4': '[0-4]',
                        '5': '[0-5]',
                        '9': '[0-9]',
                      }}
                      mask={values.inputMondaySecondWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                    />

                    { touched.inputMondaySecondWeek && errors.inputMondaySecondWeek && <span className={s.errorMessageTimeInput}>{errors.inputMondaySecondWeek}</span> } 
                  
                  </div>
                : 
                <div className={s.fakeTimeInput}>
                  <span>{values.inputMondaySecondWeek ? values.inputMondaySecondWeek : "12 : 00"}</span>
                </div>
              }     
            </label>



            <label className={values.checkedSecondWeek.indexOf("Tuesday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy}>
              <Field type="checkbox" name="checkedSecondWeek" value="Tuesday" id="checkedTuesdaySecondWeek" className={s.checkboxInput}/>
              <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
              <h4>Вівторок</h4>

              {values.checkedSecondWeek.indexOf("Tuesday") !== -1 ? 
                <div className={s.timeInputWrapper}>
          
                  <InputMask className={touched.inputTuesdaySecondWeek && errors.inputTuesdaySecondWeek ? s.errorTimeInput : s.timeInput}
                    name='inputTuesdaySecondWeek'
                    placeholder="12 : 00" 
                    value={values.inputTuesdaySecondWeek}  

                    onChange={e => {
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("inputTuesdaySecondWeek", changedValue);  
                    }}
                                          
                    maskChar=" " 
                    formatChars={{
                      '2': '[0-2]',
                      '4': '[0-4]',
                      '5': '[0-5]',
                      '9': '[0-9]',
                    }}
                    mask={values.inputTuesdaySecondWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                  />
              
                  { touched.inputTuesdaySecondWeek && errors.inputTuesdaySecondWeek && <span className={s.errorMessageTimeInput}>{errors.inputTuesdaySecondWeek}</span> } 
                
                </div>
                : 
                <div className={s.fakeTimeInput}>
                  <span>{values.inputTuesdaySecondWeek ? values.inputTuesdaySecondWeek : "12 : 00"}</span>
                </div>
              }      
            </label>

            <label className={values.checkedSecondWeek.indexOf("Wednesday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy}>
              <Field type="checkbox" name="checkedSecondWeek"  value="Wednesday" id="checkedWednesdaySecondWeek" className={s.checkboxInput} />
              <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
              <h4>Середа</h4>

              {values.checkedSecondWeek.indexOf("Wednesday") !== -1 ? 
                <div className={s.timeInputWrapper}>
                  <InputMask className={touched.inputWednesdaySecondWeek && errors.inputWednesdaySecondWeek ? s.errorTimeInput : s.timeInput}
                    name='inputWednesdaySecondWeek' 
                    placeholder="12 : 00" 
                    value={values.inputWednesdaySecondWeek}  

                    onChange={e => {
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("inputWednesdaySecondWeek", changedValue); 
                    }}
                    
                    maskChar=" " 
                    formatChars={{
                      '2': '[0-2]',
                      '4': '[0-4]',
                      '5': '[0-5]',
                      '9': '[0-9]',
                    }}
                    mask={values.inputWednesdaySecondWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                  />

                  { touched.inputWednesdaySecondWeek && errors.inputWednesdaySecondWeek && <span className={s.errorMessageTimeInput}>{errors.inputWednesdaySecondWeek}</span> } 
                
                </div>
                : 
                <div className={s.fakeTimeInput}>
                  <span>{values.inputWednesdaySecondWeek ? values.inputWednesdaySecondWeek : "12 : 00"}</span>
                </div>
              }      
            </label>

            <label className={values.checkedSecondWeek.indexOf("Thursday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy}>
              <Field type="checkbox" name="checkedSecondWeek" value="Thursday" id="checkedThursdaySecondWeek" className={s.checkboxInput} />
              <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
              <h4>Червер</h4>

              {values.checkedSecondWeek.indexOf("Thursday") !== -1 ? 
                <div className={s.timeInputWrapper}>
                  <InputMask className={touched.inputThursdaySecondWeek && errors.inputThursdaySecondWeek ? s.errorTimeInput : s.timeInput}
                    name='inputThursdaySecondWeek' 
                    placeholder="12 : 00" 
                    value={values.inputThursdaySecondWeek} 

                    onChange={e => {
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("inputThursdaySecondWeek", changedValue);          
                    }}
                    
                    maskChar=" " 
                    formatChars={{
                      '2': '[0-2]',
                      '4': '[0-4]',
                      '5': '[0-5]',
                      '9': '[0-9]',
                    }}
                    mask={values.inputThursdaySecondWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                  />

                  { touched.inputThursdaySecondWeek && errors.inputThursdaySecondWeek && <span className={s.errorMessageTimeInput}>{errors.inputThursdaySecondWeek}</span> } 
                
                </div>
                : 
                <div className={s.fakeTimeInput}>
                  <span>{values.inputThursdaySecondWeek ? values.inputThursdaySecondWeek : "12 : 00"}</span>
                </div>
              }      
            </label>

            <label className={values.checkedSecondWeek.indexOf("Friday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy}>
              <Field type="checkbox" name="checkedSecondWeek" value="Friday" id="checkedFridaySecondWeek" className={s.checkboxInput}  />
              <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
              <h4>П'ятниця</h4>

              {values.checkedSecondWeek.indexOf("Friday") !== -1 ? 
                <div className={s.timeInputWrapper}>
                  <InputMask className={touched.inputFridaySecondWeek && errors.inputFridaySecondWeek ? s.errorTimeInput : s.timeInput}
                    name='inputFridaySecondWeek' 
                    placeholder="12 : 00" 
                    value={values.inputFridaySecondWeek} 

                    onChange={e => {
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("inputFridaySecondWeek", changedValue);         
                    }}
                    
                    maskChar=" " 
                    formatChars={{
                      '2': '[0-2]',
                      '4': '[0-4]',
                      '5': '[0-5]',
                      '9': '[0-9]',
                    }}
                    mask={values.inputFridaySecondWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                  />

                  { touched.inputFridaySecondWeek && errors.inputFridaySecondWeek && <span className={s.errorMessageTimeInput}>{errors.inputFridaySecondWeek}</span> } 
                
                </div>
                : 
                <div className={s.fakeTimeInput}>
                  <span>{values.inputFridaySecondWeek ? values.inputFridaySecondWeek : "12 : 00"}</span>
                </div>
              }      
            </label>

            <label className={values.checkedSecondWeek.indexOf("Saturday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy}>
              <Field type="checkbox" name="checkedSecondWeek"  value="Saturday" id="checkedSaturdaySecondWeek" className={s.checkboxInput} />
              <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
              <h4>Субота</h4>

              {values.checkedSecondWeek.indexOf("Saturday") !== -1 ? 
                <div className={s.timeInputWrapper}>
                  <InputMask className={touched.inputSaturdaySecondWeek && errors.inputSaturdaySecondWeek ? s.errorTimeInput : s.timeInput}
                    name='inputSaturdaySecondWeek' 
                    placeholder="12 : 00" 
                    value={values.inputSaturdaySecondWeek}  

                    onChange={e => { 
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("inputSaturdaySecondWeek", changedValue);   
                    }}
                    
                    maskChar=" " 
                    formatChars={{
                      '2': '[0-2]',
                      '4': '[0-4]',
                      '5': '[0-5]',
                      '9': '[0-9]',
                    }}
                    mask={values.inputSaturdaySecondWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                  />

                  { touched.inputSaturdaySecondWeek && errors.inputSaturdaySecondWeek && <span className={s.errorMessageTimeInput}>{errors.inputSaturdaySecondWeek}</span> }   
                </div>
                : 
                <div className={s.fakeTimeInput}>
                  <span>{values.inputSaturdaySecondWeek ? values.inputSaturdaySecondWeek : "12 : 00"}</span>
                </div>
              }      
            </label>

            <label className={values.checkedSecondWeek.indexOf("Sunday") !== -1 ? s.dayOfTheWeekStudyActive : s.dayOfTheWeekStudy}>
              <Field type="checkbox" name="checkedSecondWeek" value="Sunday" id="checkedSundaySecondWeek" className={s.checkboxInput} />
              <img src={checkmarDayInBrif} className={s.checkmarkOfDay} /> 
              <h4>Неділя</h4>

              {values.checkedSecondWeek.indexOf("Sunday") !== -1 ? 
                <div className={s.timeInputWrapper}>
                  <InputMask className={touched.inputSundaySecondWeek && errors.inputSundaySecondWeek ? s.errorTimeInput : s.timeInput}
                    name='inputSundaySecondWeek' 
                    placeholder="12 : 00" 
                    value={values.inputSundaySecondWeek}  

                    onChange={e => {
                      const value = e.target.value || "";
                      const changedValue = value
                        .replace(/\)/g, "")
                        .replace(/\(/g, "")
                        .replace(/-/g, "")
                        .replace(/ /g, "");
                      setFieldValue("inputSundaySecondWeek", changedValue);
                    }}
                    
                    maskChar=" " 
                    formatChars={{
                      '2': '[0-2]',
                      '4': '[0-4]',
                      '5': '[0-5]',
                      '9': '[0-9]',
                    }}
                    mask={values.inputSundaySecondWeek[0] === '2' ? "24 : 59" : "29 : 59"}
                  />

                  { touched.inputSundaySecondWeek && errors.inputSundaySecondWeek && <span className={s.errorMessageTimeInput}>{errors.inputSundaySecondWeek}</span> } 
                </div>
                : 
                <div className={s.fakeTimeInput}>
                  <span>{values.inputSundaySecondWeek ? values.inputSundaySecondWeek : "12 : 00"}</span>
                </div>
              }      
            </label>

            <div className={s.empty}></div>

          </div>


          { props.errorCheckedWeek && <span className={s.errorMessageTimeInput}>Оберіть дні</span> } 
          

          <div className={s.navigationOfBrif}>
            <img src={arrowBrif_Left} className={s.arrowBrif_Left} alt="" onClick={props.togglePrevStepBrif} />
              
            { !values.checkedSecondWeek.length ?
              <div className={ s.btnSave_Brif_DeActive} onClick={ props.validateCheckbox }>
                <img src={btnSave_Brif} />
                <span>Готово</span>
              </div>
              :
              <div className={ s.btnSave_Brif}  onClick={handleSubmit} type="submit" >
                <img src={btnSave_Brif} />
                <span>Готово</span>
              </div>
            }
              
            <div></div>
          </div>

          
        </div>

      )}
    </Formik>

  )
}


export default SecondWeekBrif;