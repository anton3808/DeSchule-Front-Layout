import React, { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal';
import './Modal.scss'
import s from '../StartPage/StartPage.module.css';


import close_icon from '../../assets/images/close.svg';
import btnBanner from '../../assets/images/btnBanner.png';
import btnLogin_Modal from '../../assets/images/StartPage/btnLogin_Modal.svg';
import btnRegis_Modal from '../../assets/images/StartPage/btnRegis_Modal.svg';
import btnResetPassword_Modal from '../../assets/images/StartPage/btnResetPassword_Modal.svg';

import additionalCourseModalPhoto from '../../assets/images/StartPage/additionalCourseModalPhoto.svg';
import resultOfTest_StoneOfLevel from '../../assets/images/StartPage/resultOfTest_StoneOfLevel.svg';
import underlinePhoto_ModalResultTest from '../../assets/images/StartPage/underlinePhoto_ModalResultTest.svg';
import btnResultOfTest_Modal from '../../assets/images/StartPage/btnResultOfTest_Modal.svg';
import btnBuyAdditionalCourse_Modal from '../../assets/images/StartPage/btnBuyAdditionalCourse_Modal.svg';

import startFinishLinePhoto from '../../assets/images/StartPage/startFinishLinePhoto.svg';
import startIcon_AdditionalCourse from '../../assets/images/StartPage/startIcon_AdditionalCourse.svg';
import finishIcon_AdditionalCourse from '../../assets/images/StartPage/finishIcon_AdditionalCourse.svg';
import finishFlag_AdditionalCourse from '../../assets/images/StartPage/finishFlag_AdditionalCourse.svg';



import sportAdditionalCourse_Photo from '../../assets/images/StartPage/sportAdditionalCourse_Photo.jpeg';
import DT_Icon from '../../assets/images/StartPage/DT_Icon.svg';


import singUpWithGoogle from '../../assets/images/StartPage/singUpWithGoogle.svg';
import singUpWithFacebook from '../../assets/images/StartPage/singUpWithFacebook.svg';

import btnPackagesBuy from '../../assets/images/StartPage/btnPackages-Buy.svg';

import checkMark from '../../assets/images/StartPage/checkMark.svg';
import cancelMark from '../../assets/images/StartPage/cancelMark.svg';
import lockForDisablePoints from '../../assets/images/StartPage/lockForDisablePoints.svg';
import sherlokGetFreePhoto from '../../assets/images/StartPage/sherlokGetFreePhoto.png';
import stoneBackgroundGetFree from '../../assets/images/StartPage/stoneBackgroundGetFree.svg';
import cloudsOfFreePackage from '../../assets/images/StartPage/cloudsOfFreePackage.svg';
import btnFreePackage from '../../assets/images/StartPage/btnFreePackage.svg';
import underlineTextInCloud from '../../assets/images/StartPage/underlineTextInCloud.svg';


import mainPhotoOfHomeAlone from '../../assets/images/StartPage/mainPhotoOfHomeAlone2.png';
import mainPhotoOfGuardiansOfTheGalaxy from '../../assets/images/StartPage/mainPhotoOfGuardiansOfTheGalaxy2.png';



import { Formik } from 'formik';
import * as yup from 'yup';
import MaskInput from 'react-maskinput';







import axios from 'axios';
import { BASE_URL } from '../../constants';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../redux/reducers/auth-reducer';
import { useHistory } from 'react-router';


import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ModalRegAuth = ({ type, isOpen, onAfterOpen, onRequestClose, style, contentLabel, funcClick, subtitle, errorText }) => {    

    const [typeOfModal, setTypeOfModal] = useState(type)

    const [codeToResetPass, setCodeToResetPass] = useState(false)
    const [forgotPass, setForgotPass] = useState(false)
    const [newPassword, setNewPassword] = useState(false)
    


    const history = useHistory()

    const [redirectModal, setRedirectModal] = useState(type)


    
 

    // Auth Form
    const validationsSchemaAuth = yup.object().shape({
        mail: yup.string().email('?????????????? ????????????').required(`???????? ???????????????????????`),
        password: yup.string().typeError('?????????????? ???????? ??????????').required(`???????? ???????????????????????`).min(8, "?????????????? 8 ????????????????"),
    })

    // Fast Registration Form
    const validationsSchemaFastReg = yup.object().shape({
        name: yup.string().typeError('?????????????? ???????? ??????????').required(`???????? ???????????????????????`),
        surname: yup.string().typeError('?????????????? ???????? ??????????').required(`???????? ???????????????????????`),
        phone: yup.string().typeError('?????????????? ???????? ??????????').required(`???????? ???????????????????????`),
    })
    
    // Validations Schema Reset Code
    const validationsSchemaCodeToResetPass = yup.object().shape({
        firstCode: yup.string().typeError('?????????????? ???????? ??????????').required(`???????????????? ??????`),
        secondCode: yup.string().typeError('?????????????? ???????? ??????????').required(`???????????????? ??????`),
        thirdCode: yup.string().typeError('?????????????? ???????? ??????????').required(`???????????????? ??????`),
        fourthCode: yup.string().typeError('?????????????? ???????? ??????????').required(`???????????????? ??????`),
    })



    const codeToResetPassFunc = (values) => {
        setCodeToResetPass(false)
        setForgotPass(false)
        setNewPassword(true)

        // if (userData.code.length === 0) {
        //     setError({ code: 'code', message: '???????????????????????? ????????: ??????' })
        // } else if (userData.new_password.length === 0) {
        //     setError({ code: 'pass', message: '???????????????????????? ????????: ????????????' })
        // } else if (userData.new_password_confirmation.length === 0) {
        //     setError({ code: 'pass', message: '???????????????????????? ????????: ?????????????????????? ????????????' })
        // } else if (userData.new_password !== userData.new_password_confirmation) {
        //     setError({ code: 'pass', message: '???????????? ???? ??????????????????' })
        // } else {
        //     setError({ code: '', message: '' })
        //     axios.post(`${BASE_URL}/reset-password-confirmation`, {
        //         code: userData.code,
        //         new_password: userData.new_password,
        //         new_password_confirmation: userData.new_password_confirmation
        //     },
        //         {
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             }
        //         }).then(res => {
        //             setFirstArea('')
        //             setSecondArea('')
        //             setError({ code: '', message: '' })
        //             console.log('REG DATA', res);
        //             setForgotPass(false)
        //             history.push('/')
        //         }).catch(function (error) {
        //             console.log('ERR', error);
        //         })
        // }
    }



    
    // Validations Schema New Password
    const validationsSchemaForgotPass = yup.object().shape({
        mail: yup.string().email('?????????????? ????????????').required(`???????? ???????????????????????`),
    })

    const forgotPassFunc = (mail) => {
        setCodeToResetPass(true)
        setForgotPass(false)
        setNewPassword(false)

        // if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(mail) === false) {
        //     setError({ code: 'mail', message: '???????????????? ???????????? ??????????' })
        // } else {
        //     setError({ code: '', message: '' })
        //     axios.post(`${BASE_URL}/reset-password`, {
        //         login: mail
        //     },
        //         {
        //             headers: {
        //                 'Accept': 'application/json',
        //                 'Content-Type': 'application/json'
        //             }
        //         }).then(res => {
        //             console.log('REG DATA', res);
        //             setInputForgotPass('')
        //             setForgotPass(true)
        //             setShowForgotPass(false)
        //         }).catch(function (error) {
        //             console.log('ERR', error);
        //         })
        // }
    }




    // Validations Schema New Password
    const validationsSchemaNewPassword = yup.object().shape({
        password: yup.string().typeError('?????????????? ???????? ??????????').required(`?????????????? ????????????`),
        confirmPassword: yup.string().oneOf([yup.ref('password')], '???????????? ???? ??????????????????????').required(`?????????????? ???? ?????? ????????????`)
    })

    const newPasswordFunc = (values) => {
        alert(JSON.stringify(values))
    }

    


    const nextField = (value) => {
        if (value.length === 1){
            const nextfield = document.querySelector(
                `input[name=secondCode]`
            );
            nextfield.focus();
        }
    }








    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            style={style}
            contentLabel={contentLabel}
        >

            <div className={s.modal_wrapper}>
            
                {!newPassword && !codeToResetPass && !forgotPass && 
                    <div>{( () => {
                            if (typeOfModal === 'packageReg') {
                                return (
                                    <h2>?????????? ???????? ????????</h2>
                                )
                            } else if(typeOfModal === 'fastReg') {
                                return (
                                    <h2>????????????????????</h2>
                                )
                            } else if(typeOfModal === 'auth') {
                                return (
                                    <h2>????????</h2>
                                )
                            } else {
                                return (
                                    null
                                )
                            }
                        })() }
                    </div>
                }



                
                <img onClick={() => {
                    setCodeToResetPass(false)
                    setForgotPass(false)
                    setNewPassword(false)
                    onRequestClose()
                    // setRedirectModal('')
                    
                    setTypeOfModal(redirectModal)
                }} src={close_icon} className={s.close_icon}></img> 



                {(() => {
                    if (typeOfModal === 'packageReg') {
                        return (
                            <div className={s.packagesOfCourseModalWrapper}>

                                <div className={s.packagesOfCourseWrapper}>
                                    <div className={s.mainPackagesOfCourse}>
                                        <div className={s.packageHomeAlone}>

                                        <div className={s.packageHomeAlonePhoto}>
                                            <img src={mainPhotoOfHomeAlone} />

                                            <div className={s.packageHomeAlonePhotoText}>
                                            <h3>?????????? ????????? ?? ???????????</h3>
                                            <h4> <span className={s.priceForPackage}>3 800 ??????</span> <span className={s.perMonthOfPackage}>/ ????????????</span> </h4>
                                            </div>
                                        </div>

                                        <div className={s.packageHomeAloneMainText}>
                                            <h4>?????? ???????????????????????? ???????????????? ?????????????????? ???????? ?????? ??1-??1 ?? ?????????????? ?????????????? ????????????????. ???? ??????????????????:</h4>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????? ???? ???????? ???????????????????? ?????? ????????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????????? ?????????????????? ??????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????? ??????????????? ???? ??????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????? ????????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????????????????? ?????????????? ??????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????? ?????????????? ??????????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????????????????????????? ????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????????? ?????????????????? ?? Telegram</span>
                                            </div>



                                            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                                            <img src={cancelMark} />
                                            <span>?????????????? ?????????????????? ?????? ??????????????????? ????????????????????? ?? Telegram</span>
                                            </div>

                                            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                                            <img src={cancelMark} />
                                            <span>???????????????? ?????????????? ????????????????????????</span>
                                            </div>

                                            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                                            <img src={cancelMark} />
                                            <span>???????????? ????????? ???????????????</span>
                                            </div>

                                            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                                            <img src={cancelMark} />
                                            <span>?????????????????? ?????????????? ?????????????? ???? ??????????????????</span>
                                            </div>

                                            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
                                            <img src={cancelMark} />
                                            <span>?????????????????????????? ???????????????????????? ??????????????: 7 ?????????? ?? ????????????</span>
                                            </div>


                                            <div className={s.lockForDisablePoints}>
                                            <img src={lockForDisablePoints} />
                                            <span>???????????????? ?? ???????????? ????????????????? ?????????????????????</span>
                                            </div> 
                                            
                                        </div>


                                        <Link to={{ 
                                                pathname:'/buying-main-course', 
                                                state: {
                                                    homeAlonePackage: true
                                                } 
                                            }} 
                                            onClick={() => { onRequestClose() }
                                        }>
                                            <div className={s.btnPackagesBuy}>
                                                <img src={btnPackagesBuy} />
                                                <span>????????????</span>
                                            </div>
                                        </Link> 


                                        </div>


                                        <div className={s.packageGuardiansOfTheGalaxy}>

                                        <div className={s.packageGuardiansOfTheGalaxyPhoto}>
                                            <img src={mainPhotoOfGuardiansOfTheGalaxy} />

                                            <div className={s.packageGuardiansOfTheGalaxyPhotoText}>
                                            <h3>?????????? ??????????????? ?????????????????????</h3>
                                            <h4> <span className={s.priceForPackage}>5 800 ??????</span> <span className={s.perMonthOfPackage}>/ ????????????</span> </h4>
                                            </div>
                                        </div>

                                        <div className={s.packageGuardiansOfTheGalaxyMainText}>
                                            <h4>?????? ???????????????????????? ???????????????? ?????????????????? ???????? ?????? ??1-??1 ?? ?????????????? ?????????????? ????????????????. ???? ??????????????????:</h4>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????? ???? ???????? ???????????????????? ?????? ????????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????????? ?????????????????? ??????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????? ??????????????? ???? ??????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????? ????????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????????????????? ?????????????? ??????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????? ?????????????? ??????????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????????????????????????? ????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????????? ?????????????????? ?? Telegram</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????? ?????????????????? ?????? ??????????????????? ????????????????????? ?? Telegram</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????????? ?????????????? ????????????????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????? ????????? ???????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????? ?????????????? ?????????????? ???? ??????????????????</span>
                                            </div>

                                            <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????????????? ???????????????????????? ??????????????: 7 ?????????? ?? ????????????</span>
                                            </div>
                                            
                                        </div>

                                        <Link to={{ 
                                                pathname:'/buying-main-course', 
                                                state: {
                                                    guardiansOfTheGalaxyPackage: true
                                                } 
                                            }} 
                                            onClick={() => { onRequestClose() }
                                        }>
                                            <div className={s.btnPackagesBuy}>
                                                <img src={btnPackagesBuy} />
                                                <span>????????????</span>
                                            </div>
                                        </Link> 

                                        </div>
                                    </div>



                                    <div className={s.getFreePackage}>

                                        <div className={s.partLeft_FreePackage}>
                                        <img className={s.sherlokGetFreePhoto} src={sherlokGetFreePhoto}  />
                                        <img className={s.stoneBackgroundGetFree} src={stoneBackgroundGetFree} />
                                        </div>
                                        
                                        <div className={s.partRight_FreePackage}>
                                        <img className={s.cloudsOfFreePackage} src={cloudsOfFreePackage} />

                                        <div className={s.textInCloud}>
                                            <h4>????????????????????, ???????? ?????????? ?????????????</h4>
                                            <img src={underlineTextInCloud} />
                                        </div>
                                        

                                        <h5>?????????????????? 5 ???????????????????????? ???????????? ???? ???????????????????? ????????</h5>

                                        <div className={s.btnPackagesBuy} onClick={() => { 
                                            setRedirectModal(typeOfModal); 
                                            setTypeOfModal('fastReg'); 
                                        }}>
                                            <img src={btnFreePackage} />
                                            <span>????????????</span>
                                        </div>
                                        </div>
                                        
                                    </div>

                                    <div className={s.loginBlock} >
                                        <h5>???????? ???? ?????? ?????????? ??????????????? 
                                            <span onClick={() => { 
                                                setRedirectModal(typeOfModal); 
                                                setTypeOfModal('auth'); }
                                            }>
                                                    ????????????????
                                            </span> 
                                        </h5>
                                    </div>

                                </div>
                            </div>
                        )
                    } else if (typeOfModal === 'fastReg') {
                        return (
                            <Formik
                                initialValues={{
                                    name: '',
                                    surname: '',
                                    phone: '',
                                }}
                                validateOnBlur
                                onSubmit={(values) => funcClick(values.name, values.surname, values.phone)}
                                validationSchema={validationsSchemaFastReg}
                            >

                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (
                                <div className={`${s.modalFastRegisForm} ${s.open}`}>
                                    <span className={s.fastRegInfo}>?????????????? ???????? ?????????, ????????????????, ?????????? ???????????????? ???? ???????????????? ?????????????????? ??????????????????????</span> 
                                    
                                    <form>

                                        <div className={s.inputFormWrapper}>
                                            <input 
                                                className={touched.name && errors.name ? 'errorInput' : 'name'}
                                                type={`text`} 
                                                name={`name`}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}  
                                                
                                                placeholder="???????? ?????????" 
                                                />

                                            { touched.name && errors.name && <span className='errorMessageFastRegis'>{errors.name}</span> }
                                        </div>
                                        
                                        <div className={s.inputFormWrapper}>
                                            <input 
                                                className={touched.surname && errors.surname ? 'errorInput' : 'surname'}
                                                type={`text`} 
                                                name={`surname`}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.surname}  
                                                
                                                placeholder="???????? ????????????????" 
                                                />

                                            { touched.surname && errors.surname && <span className='errorMessageFastRegis'>{errors.surname}</span> }
                                        </div>

                                        <div className={s.inputFormWrapper}>
                                            <input 
                                                className={touched.phone && errors.phone ? 'errorInput' : 'phone'}
                                                type={`text`} 
                                                name={`phone`}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}  
                                                
                                                placeholder="?????????? ????????????????" 
                                                />

                                            { touched.phone && errors.phone && <span className='errorMessageFastRegis'>{errors.phone}</span> }
                                        </div>

                                        <div className={!isValid || !dirty ? s.regisButton_DeActive : s.regisButton} type="submit" onClick={handleSubmit} >
                                            <img className={s.btnRegis_Modal} src={btnRegis_Modal} />
                                            <span className={s.reg_button_text}>???????????????? 3 ??????????</span>
                                        </div>

                                    </form>

                                    <div className={s.lineToDivide}>
                                        <div></div>
                                        <h5>??????</h5>
                                        <div></div>
                                    </div>

                                    <div className={s.singUpWithSocialNetworks}>
                                        <img src={singUpWithFacebook} className={s.singUpWithFacebook} alt="" />
                                        <img src={singUpWithGoogle} className={s.singUpWithGoogle} alt="" />  
                                    </div>

                                    <span className={s.textUnderRegisFormToReg} >???????? ???? ?????? ?????????? ??????????????? 
                                        <span onClick={() => { 
                                            setRedirectModal(typeOfModal); 
                                            setTypeOfModal('auth'); 
                                        }} className={s.regisTextUnderLogForm}> 
                                            ????????????????!
                                        </span>
                                    </span>

                                </div>

                                )}
                            </Formik>     
                        )
                    } else if (typeOfModal === 'auth'){
                        return (

                            <Formik
                                initialValues={{
                                    mail: '',
                                    password: '',
                                }}
                                validateOnBlur
                                onSubmit={(values) => funcClick(values)}
                                validationSchema={validationsSchemaAuth}
                            >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty }) => (

                                    !newPassword && !codeToResetPass && !forgotPass && <form className={`${s.modalAuthForm} ${s.open}`} >
                                                                    
                                        <input className={touched.mail && errors.mail ? 'errorInput' : 'mail'}
                                            type={`text`} 
                                            name={`mail`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.mail}  
                                            
                                            placeholder="???????????????????? ????????????" 
                                        />

                                        { touched.mail && errors.mail && <span className='errorMessageLogin'>{errors.mail}</span> }


                                        <input className={touched.password && errors.password ? 'errorInput' : s.passwordInput}
                                            type={`password`} 
                                            name={`password`}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.password}  
                                            
                                            placeholder="????????????" 
                                        />

                                        { touched.password && errors.password && <span className='errorMessageLogin'>{errors.password}</span> }
                                        

                                        <div className={s.resetPasswordTextWrapper}>
                                            <span onClick={() => { setForgotPass(true)}} className={s.resetPasswordText}> ???????????? ?????????????</span>
                                        </div>
                                        

                                        <div className={!isValid || !dirty ? s.loginButton_DeActive : s.loginButton} onClick={handleSubmit}>
                                            <img className={s.btnLogin_Modal} src={btnLogin_Modal} />
                                            {type === 'reg' ? <span className={s.reg_button_text}>?????????????????? ????????????????</span> : <span className={s.login_button_text}>????????????</span>}
                                        </div>


                                        <div className={s.lineToDivide}>
                                            <div></div>
                                            <h5>??????</h5>
                                            <div></div>
                                        </div>

                                        <img src={singUpWithGoogle} className={s.singUpWithGoogle} alt="" />
                                        <img src={singUpWithFacebook} className={s.singUpWithFacebook} alt="" />


                                        <span className={s.textUnderLogFormToReg} >???????? ???? ???? ?????????? ???????????????  
                                            <span onClick={() => { 
                                                setRedirectModal(typeOfModal); 
                                                setTypeOfModal('packageReg'); }
                                            } className={s.regisTextUnderLogForm}> ????????????????????????????!</span> 
                                        </span> 

                                    </form>
                                )}
                            </Formik>     
                        )
                    } else if (typeOfModal === 'additionalCourse') {
                        return (
                            <div className={`${s.modalAdditionalCourse} ${s.open}`}>
                                <h3>???????????????????? ???????? ????????????????????????</h3>
                                

                                <div className={s.startFinishProgressBlock_Modal}>
                                    <img src={startIcon_AdditionalCourse} className={s.startIcon_AdditionalCourse} alt="" />
                                    <img src={finishIcon_AdditionalCourse} className={s.finishIcon_AdditionalCourse} alt="" />
                                    <img src={finishFlag_AdditionalCourse} className={s.finishFlag_AdditionalCourse} alt="" />
                                    
                                    <img src={startFinishLinePhoto} className={s.startFinishLinePhoto} alt="" />

                                    <div className={s.startFinishProgressText}>
                                        <div>
                                            <h4>??????????</h4>
                                            <span>--.--.--</span>
                                        </div>

                                        <div>
                                            <h4>??????????</h4>
                                            <span>--.--.--</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className={s.additionalCourseModalInfo}>
                                    <div  className={s.additionalCourseModalInfoText}>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                            sed do eiusmod. Lorem ipsum dolor sit amet, consectetur 
                                            adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, 
                                            consectetur adipiscing elit, sed do eiusmod.</p>

                                            
                                        <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????? ???? ???????? ???????????????????? ?????? ????????????????</span>
                                        </div>

                                        <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????????? ?????????????????? ??????????????</span>
                                        </div>

                                        <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????? ??????????????? ???? ??????????</span>
                                        </div>

                                        <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????? ????????????????</span>
                                        </div>

                                        <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>???????????????????????? ?????????????? ??????????</span>
                                        </div>

                                        <div className={s.pointsOfPackage}>
                                            <img src={checkMark} />
                                            <span>?????????????????? ?????????????? ??????????????????</span>
                                        </div>

                                    </div>

                                    <img src={sportAdditionalCourse_Photo} className={s.additionalCourseModalPhoto} alt="" />
                                </div>

                                <div className={s.priceAndButtonOfCourse}>
                                    <div className={s.priceOfAdditionalCourse_Modal}>
                                        <h4>300 ??????</h4>
                                        <div>
                                            <img src={DT_Icon} alt="" />
                                            <span>100 DT</span>
                                        </div>
                                    </div>

                                    <NavLink to="/buying-additional-course" onClick={() => { onRequestClose() }}>
                                        <div className={s.resultOfTestButton}>
                                            <img className={s.btnBuyAdditionalCourse_Modal} src={btnBuyAdditionalCourse_Modal} />
                                            <span className={s.returnToRegis}>????????????</span>
                                        </div>
                                    </NavLink>
                       
                                </div>
                                
                            </div>
                        )
                    } else if (typeOfModal === 'resultOfTest') {
                        return (
                            <div className={`${s.modalResultOfTest} ${s.open}`}>
                                <h3>?????? ???????????????????????????? ????????????</h3>

                                <div className={s.recommendedLevel}>
                                    <img src={resultOfTest_StoneOfLevel} alt="" />

                                    <h2>B2</h2>
                                    <span>7/10</span>
                                </div>                     

                                <div className={s.proposalToImproveText}>
                                    <p>???????????????????? ?????????????????? ?????? ???????????? ???? ?????????????????? ???????????? ?????????? ???????????????? ?????? ??1 ???? ??1</p>
                                    <img src={underlinePhoto_ModalResultTest} alt="" />
                                </div>
                                
                                <div className={s.resultOfTestButton}>
                                    <img className={s.btnResultOfTest_Modal} src={btnResultOfTest_Modal} />
                                    <span className={s.returnToRegis}>?????????????????????? ???? ????????????????????</span>
                                </div>

                            </div>
                        )
                    } 
                })()}








                { codeToResetPass &&
                    <Formik
                        initialValues={{
                            firstCode: '',
                            secondCode: '',
                            thirdCode: '',
                            fourthCode: '',
                        }}
                        validateOnBlur
                        onSubmit={(values) => {
                            codeToResetPassFunc(values);
                        }}
                        validationSchema={validationsSchemaCodeToResetPass}
                    >
              
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty, setFieldValue }) => (
                    
                        <form
                            className={`${s.modalConfirmCodeResetForm} ${s.open}`}
                        >
                            <h3>?????????????? ?????? ?? ??????</h3>

                            <div className={s.inputFormWrapper}>
                                <MaskInput 
                                    className={touched.firstCode && errors.firstCode ? 'errorInput' : 'surname'}
                                    type={`text`} 
                                    name={`firstCode`}
                                    onChange={e => {
                                        const value = e.target.value || "";

                                        // nextField(value);

                                        
                                        
                                        // values.secondCode.focus();
                                        setFieldValue("firstCode", value);
                                       
                                        // setFieldValue('secondCode', '', true);
                                      }}
                                    onBlur={handleBlur}
                                    value={values.firstCode}  
                                                                    
                                    placeholder="" 
                                    mask="0"
                                />

                                <input 
                                    className={touched.secondCode && errors.secondCode ? 'errorInput' : 'surname'}
                                    type={`text`} 
                                    name={`secondCode`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.secondCode}  
                                    onFocus={true}
                                                                    
                                    placeholder="" 
                                />

                                <input 
                                    className={touched.thirdCode && errors.thirdCode ? 'errorInput' : 'surname'}
                                    type={`text`} 
                                    name={`thirdCode`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.thirdCode}  
                                                                    
                                    placeholder="" 
                                />

                                <input 
                                    className={touched.fourthCode && errors.fourthCode ? 'errorInput' : 'surname'}
                                    type={`text`} 
                                    name={`fourthCode`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.fourthCode}  
                                                                    
                                    placeholder="" 
                                />

                               
                            </div>

                            { touched.firstCode && errors.firstCode && <span className='errorMessage_CodeReset'>{errors.firstCode}</span> }


                            {/* onClick={() => changePass(userNewPass)} */}
                            <div className={!isValid || !dirty ? s.regisButton_DeActive : s.regisButton} type="submit" onClick={handleSubmit}>
                                <img className={s.btnStartStudy} src={btnBanner} />
                                <span className={s.sendToResertPassword}>??????????????????</span>
                            </div>

                            <span className={s.sendCodeAgainText}>?????????????????? ?????????????????? ?????? ?? ??????????</span>
                        </form>

                    )}
                    </Formik> 
                }





                {forgotPass && 
                    <Formik
                        initialValues={{
                            mail: '',
                        }}
                        validateOnBlur
                        onSubmit={(values) => {
                            forgotPassFunc(values);
                        }}
                        validationSchema={validationsSchemaForgotPass}
                    >
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty, setFieldValue }) => (
                       
                       <form className={`${s.modalResetPasswordForm} ${s.open}`} >
                            <h3>?????????????????????? ????????????</h3>

                            <div className={s.inputFormWrapper}>
                                <input 
                                    className={touched.mail && errors.mail ? 'errorInput' : 'mail'}
                                    type={`text`} 
                                    name={`mail`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}  
                                
                                    placeholder="????. ????????????" 
                                />

                                { touched.mail && errors.mail && <span className='errorMessageFastRegis_PageSecond'>{errors.mail}</span> }
                            </div>

                            <div className={!isValid || !dirty ? s.regisButton_DeActive : s.regisButton } onClick={handleSubmit} type="submit" >
                                <img className={s.btnResetPassword_Modal} src={btnResetPassword_Modal} />
                                <span className={s.sendToResertPassword}>?????????????????? ?????? ?? ??????????</span>
                            </div>
                        </form> 
                    )}
                    </Formik>
                }





                {newPassword && 
                    <Formik
                        initialValues={{
                            password: '',
                            confirmPassword: '',
                        }}
                        validateOnBlur
                        onSubmit={(values) => {
                            newPasswordFunc(values);
                        }}
                        validationSchema={validationsSchemaNewPassword}
                    >
                    
                    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isValid, dirty, setFieldValue }) => (
                        <form className={`${s.modalNewPasswordForm} ${s.open}`} >
                            
                            <h3>???????????????? ?????????? ????????????</h3>

                            <div className={s.inputFormWrapper}>
                                <input 
                                    className={touched.password && errors.password ? 'errorInput' : 'password'}
                                    type={`password`} 
                                    name={`password`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}  
                                
                                    placeholder="????????????" 
                                />

                                { touched.password && errors.password && <span className='errorMessageFastRegis_PageSecond'>{errors.password}</span> }
                            </div>


                            <div className={s.inputFormWrapper}>
                                <input 
                                    className={touched.confirmPassword && errors.confirmPassword ? 'errorInput' : 'confirmPassword'}
                                    type={`password`} 
                                    name={`confirmPassword`}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.confirmPassword}  
                                    
                                    placeholder="?????????????????????? ????????????" 
                                />

                                { touched.confirmPassword && errors.confirmPassword && <span className='errorMessageFastRegis_PageSecond'>{errors.confirmPassword}</span> }
                            </div>


                            <div className={!isValid || !dirty ? s.regisButton_DeActive : s.regisButton } onClick={handleSubmit} type="submit" >
                                <img className={s.btnResetPassword_Modal} src={btnResetPassword_Modal} />
                                <span className={s.sendToResertPassword}>????????????????</span>
                            </div>
                        </form> 
                    )}
                    </Formik>
                }


            </div>
        </Modal>
    )
}

export default ModalRegAuth
