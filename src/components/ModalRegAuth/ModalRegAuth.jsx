import React, { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal';
import s from '../StartPage/StartPage.module.css';

import close_icon from '../../assets/images/close.svg';
import btnBanner from '../../assets/images/btnBanner.png';
import axios from 'axios';
import { BASE_URL } from '../../constants';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../redux/reducers/auth-reducer';
import { useHistory } from 'react-router';

const ModalRegAuth = ({ type, isOpen, onAfterOpen, onRequestClose, style, contentLabel, funcClick, subtitle, errorText }) => {

    const [firstArea, setFirstArea] = useState('')
    const [secondArea, setSecondArea] = useState('')
    const [error, setError] = useState({ code: '', message: '' })

    const [forgotPass, setForgotPass] = useState(false)
    const [inputForgotPass, setInputForgotPass] = useState('')




    const [fullReg, setFullReg] = useState({
        name: '',
        surname: '',
        login: '',
        mail: '',
        birthday: '',
        phone: '',
        pass: '',
        repPass: ''
    })

    const [userNewPass, setUserNewPass] = useState({
        code: '',
        new_password: '',
        new_password_confirmation: ''
    })

    const [openDemoForm, setOpenDemoForm] = React.useState(false);
    const [openFullForm, setOpenFullForm] = React.useState(false);

    const history = useHistory()

    const dispatch = useDispatch()

    const refDate = useRef();

    const fullRegFunc = (objReg) => {
        console.log(objReg);
        if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(objReg.mail) === false) {
            setError({ code: 'mail', message: 'Неверный формат почты' })
        } else if (objReg.mail.length === 0) {
            setError({ code: 'mail', message: 'Обязательное поле: Почта' })
        } else if (objReg.pass.length === 0) {
            setError({ code: 'pass', message: 'Обязательное поле: Пароль' })
        } else if (objReg.repPass.length === 0) {
            setError({ code: 'pass', message: 'Обязательное поле: Підтвердити пароль' })
        } else if (objReg.pass !== objReg.repPass) {
            setError({ code: 'pass', message: 'Пароли не совпадают' })
        } else {
            setError({ code: '', message: '' })
            axios.post(`${BASE_URL}/register`, {
                name: objReg.name,
                surname: objReg.surname,
                login: objReg.login,
                phone: objReg.phone,
                password: objReg.pass,
                password_confirmation: objReg.repPass,
                email: objReg.mail,
                birthday: objReg.birthday,
            },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    console.log('REG DATA', res);
                    localStorage.setItem('userData', JSON.stringify(res.data))
                    localStorage.setItem('auth', 1)
                    localStorage.removeItem('name')
                    localStorage.removeItem('phone')
                    dispatch(setUserAction(res.data))
                    history.push('/cabinet')
                }).catch(function (error) {
                    console.log('ERR', error);
                })
        }
    }

    const forgoPassFunc = (mail) => {
        if (/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(mail) === false) {
            setError({ code: 'mail', message: 'Неверный формат почты' })
        } else {
            setError({ code: '', message: '' })
            axios.post(`${BASE_URL}/reset-password`, {
                login: mail
            },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    console.log('REG DATA', res);
                    setInputForgotPass('')
                    setForgotPass(true)
                }).catch(function (error) {
                    console.log('ERR', error);
                })
        }
    }

    const changePass = (userData) => {
        if (userData.code.length === 0) {
            setError({ code: 'mail', message: 'Обязательное поле: Почта' })
        } else if (userData.new_password.length === 0) {
            setError({ code: 'pass', message: 'Обязательное поле: Пароль' })
        } else if (userData.new_password_confirmation.length === 0) {
            setError({ code: 'pass', message: 'Обязательное поле: Підтвердити пароль' })
        } else if (userData.new_password !== userData.new_password_confirmation) {
            setError({ code: 'pass', message: 'Пароли не совпадают' })
        } else {
            setError({ code: '', message: '' })
            axios.post(`${BASE_URL}/reset-password-confirmation`, {
                code: userData.code,
                new_password: userData.new_password,
                new_password_confirmation: userData.new_password_confirmation
            },
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }).then(res => {
                    console.log('REG DATA', res);
                    setForgotPass(false)
                    history.push('/')
                }).catch(function (error) {
                    console.log('ERR', error);
                })
        }
    }

    useEffect(() => {
        if (!isOpen) {
            setFirstArea('')
            setSecondArea('')
        }
    }, [isOpen])

    useEffect(() => {
        console.log('errorText', errorText);
    }, [errorText])


    return (
        <Modal
            isOpen={isOpen}
            onAfterOpen={onAfterOpen}
            onRequestClose={onRequestClose}
            style={style}
            contentLabel={contentLabel}
        >
            <div className={s.modal_wrapper}>
                <h2>{type === 'reg' ? 'Реєстрація' : 'Увійти'}</h2>

                <img onClick={onRequestClose} src={close_icon} className={s.close_icon}></img>

                {type === 'reg' ?
                    <div className={s.packagesOfCourse}>
                        <div className={s.freeCoupleOfLessons}>
                            <h3>3 уроки безкоштовно та 1 додатковий курс</h3>
                            <span onClick={() => {
                                setOpenDemoForm(!openDemoForm);
                                setOpenFullForm(false)
                            }}>
                                Отримати 3 уроки
                        </span>
                        </div>

                        <div className={s.wholeCourse}>
                            <h3>Повний доступ до курсу за підписку</h3>
                            <span onClick={() => {
                                setOpenFullForm(!openFullForm);
                                setOpenDemoForm(false)
                            }}>Зареєструватись</span>
                        </div>

                    </div>
                    :

                    <form
                        className={`${s.modal_demo_form} ${s.open}`}
                    >

                        <input
                            type="text"
                            placeholder={type === 'reg' ? "Ваше ім’я" : "Ваше логин(номер телефона)"}
                            value={firstArea}
                            onChange={e => setFirstArea(e.target.value)}
                        />
                        <input
                            type={type === 'reg' ? "text" : 'password'}
                            placeholder={type === 'reg' ? "Номер телефону" : "Пароль"}
                            value={secondArea}
                            onChange={e => setSecondArea(e.target.value)}
                        />

                        <div>{errorText}</div>

                        <div onClick={() => funcClick(firstArea, secondArea)} className={s.regisButton}>
                            <img className={s.btnStartStudy} src={btnBanner} />
                            {/* <input type='submit' value="Розпочати навчання" /> */}
                            {type === 'reg' ? <span className={s.reg_button_text}>Розпочати навчання</span> : <span className={s.login_button_text}>Увійти</span>}

                        </div>

                        {type === 'reg' ? null : <span className={s.resetPasswordText}> Забули пароль?</span>}
                    </form>

                }




                {forgotPass
                    ? <form
                        className={`${s.resetPasswordForm} ${s.open}`}
                    >
                        <h3>Відновлення пароля</h3>

                        <input type="text" value={userNewPass.code} placeholder='Код' onChange={(e) => setUserNewPass({...userNewPass, code: e.target.value})} />
                        <input type="text" value={userNewPass.new_password} placeholder='Новый пароль' onChange={(e) => setUserNewPass({...userNewPass, new_password: e.target.value})} />
                        <input type="text" value={userNewPass.new_password_confirmation} placeholder='Подтвердите пароль' onChange={(e) => setUserNewPass({...userNewPass, new_password_confirmation: e.target.value})} />

                        <div>{error.message}</div>

                        <div onClick={() => changePass(userNewPass)} className={s.regisButton}>
                            <img className={s.btnStartStudy} src={btnBanner} />
                            <span className={s.sendToResertPassword}>Подтвердить</span>
                        </div>
                    </form>
                    : <form
                        className={`${s.resetPasswordForm} ${s.open}`}
                    >
                        <h3>Відновлення пароля</h3>

                        <input type="text" value={inputForgotPass} placeholder='Почта' onChange={(e) => setInputForgotPass(e.target.value)} />

                        {<div>{error.message}</div>}

                        <div onClick={() => forgoPassFunc(inputForgotPass)} className={s.regisButton}>
                            <img className={s.btnStartStudy} src={btnBanner} />
                            <span className={s.sendToResertPassword}>Надіслати</span>
                        </div>
                    </form>
                }




                <form
                    className={openDemoForm ? `${s.modal_demo_form} ${s.open}` : `${s.modal_demo_form}`}
                >

                    <input
                        type="text"
                        placeholder={type === 'reg' ? "Ваше ім’я" : "Ваше логин(номер телефона)"}
                        value={firstArea}
                        onChange={e => setFirstArea(e.target.value)}
                    />
                    {type === 'reg' && <input
                        type={type === 'reg' ? "text" : 'password'}
                        placeholder={type === 'reg' ? "Номер телефону" : "Пароль"}
                        value={secondArea}
                        onChange={e => setSecondArea(e.target.value)}
                    />}

                    <div onClick={() => funcClick(firstArea, secondArea)} className={s.regisButton}>
                        <img className={s.btnStartStudy} src={btnBanner} />
                        {/* <input type='submit' value="Розпочати навчання" /> */}
                        {type === 'reg' ? <span className={s.reg_button_text}>Розпочати навчання</span> : <span className={s.login_button_text}>Увійти</span>}

                    </div>

                    {type === 'reg' ? null : <span className={s.resetPasswordText}> Забули пароль?</span>}
                </form>




                <form className={openFullForm ? `${s.modal_full_form} ${s.open}` : `${s.modal_full_form}`}>

                    <input type="text" value={fullReg.name} onChange={(e) => setFullReg(({ ...fullReg, name: e.target.value }))} placeholder="Ім'я" />
                    <input type="text" value={fullReg.surname} onChange={(e) => setFullReg(({ ...fullReg, surname: e.target.value }))} placeholder="Фамілія" />
                    <input type="text" value={fullReg.login} onChange={(e) => setFullReg(({ ...fullReg, login: e.target.value }))} placeholder="Логин" />
                    <input type="text" value={fullReg.mail} onChange={(e) => setFullReg(({ ...fullReg, mail: e.target.value }))} placeholder="Почта" />
                    <input
                        ref={refDate}
                        type="text"
                        value={fullReg.birthday}
                        onChange={(e) => setFullReg(({ ...fullReg, birthday: e.target.value }))}
                        onFocus={() => (refDate.current.type = 'date')}
                        onBlur={() => (refDate.current.type = "text")}
                        placeholder='Дата народження'
                    />
                    {/* <input type="text" value="Дата народження" /> */}
                    <input type="text" value={fullReg.phone} onChange={(e) => setFullReg({ ...fullReg, phone: e.target.value })} placeholder="Номер телефона" />
                    <input type="text" value={fullReg.pass} onChange={(e) => setFullReg({ ...fullReg, pass: e.target.value })} placeholder="Пароль" />
                    <input type="text" value={fullReg.repPass} onChange={(e) => setFullReg({ ...fullReg, repPass: e.target.value })} placeholder="Подтвердить пароль" />

                    {error.message}

                    <div onClick={() => fullRegFunc(fullReg)} className={s.regisButton}>
                        <img className={s.btnStartStudy} src={btnBanner} />
                        <span>Розпочати навчання</span>
                    </div>

                </form>
            </div>
        </Modal>
    )
}

export default ModalRegAuth
