import React, { useEffect, useState, useRef } from 'react'
import Modal from 'react-modal';
import s from '../StartPage/StartPage.module.css';

import close_icon from '../../assets/images/close.svg';
import btnBanner from '../../assets/images/btnBanner.png';

const ModalRegAuth = ({ type, isOpen, onAfterOpen, onRequestClose, style, contentLabel, funcClick, subtitle }) => {

    const [firstArea, setFirstArea] = useState('')
    const [secondArea, setSecondArea] = useState('')
    const [thirdArea, setThirdArea] = useState('')

    useEffect(() => {
        if(!isOpen) {
            setFirstArea('')
            setSecondArea('')
        }
    }, [isOpen])




    // const [openDemoForm, setOpenDemoForm] = useState(false);
    // const [openFullForm, setOpenFullForm] = useState(false);

    // const [heightDemoForm, setHeightDemoForm] = useState();
    // const [heightFullForm, setHeightFullForm] = useState();

    
    // const refDemoForm = useRef()
    // const refFullForm = useRef()


    // useEffect(() => {
    //     console.log(refDemoForm);
    //     setHeightDemoForm(`${refDemoForm.current.scrollHeight}px`);

    //     console.log(refFullForm);
    //     setHeightFullForm(`${refFullForm.current.scrollHeight}px`);

    // }, [])



    // const demoFormOpen = () => {
    //     setOpenDemoForm(!openDemoForm)
    // }
    // const fullFormOpen = () => {
    //     setOpenFullForm(!openFullForm)
    // }



    // console.log(openDemoForm);
    // console.log(openFullForm);

  

    const [openDemoForm, setOpenDemoForm] = React.useState(false);
    const [openFullForm, setOpenFullForm] = React.useState(false);

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
                            }}>
                            Отримати 3 уроки
                        </span>
                    </div>

                    <div className={s.wholeCourse}>
                        <h3>Повний доступ до курсу за підписку</h3>
                        <span onClick={() => {
                                setOpenFullForm(!openFullForm);
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
                        placeholder={type === 'reg' ? "Ваша фамилия" : "Пароль"}
                        value={secondArea}
                        onChange={e => setSecondArea(e.target.value)}
                    />
                    {type === 'reg' && <input
                        type={type === 'reg' ? "text" : 'password'}
                        placeholder={type === 'reg' ? "Номер телефону" : "Пароль"}
                        value={thirdArea}
                        onChange={e => setThirdArea(e.target.value)}
                    />}

                    <div onClick={() => funcClick(firstArea, secondArea, thirdArea)} className={s.regisButton}>
                        <img className={s.btnStartStudy} src={btnBanner} />
                        {/* <input type='submit' value="Розпочати навчання" /> */}
                        {type === 'reg' ? <span className={s.reg_button_text}>Розпочати навчання</span> : <span className={s.login_button_text}>Увійти</span>}
                        
                    </div>

                    {type === 'reg' ? null : <span className={s.resetPasswordText}> Забули пароль?</span> }
                </form>

                }

                
                

                <form 
                className={`${s.resetPasswordForm} ${s.open}`}
                >
                    <h3>Відновлення пароля</h3>
                
                    <input type="text" value="Почта" />

                    <div className={s.regisButton}>
                        <img className={s.btnStartStudy} src={btnBanner} />
                        <span className={s.sendToResertPassword}>Надіслати</span>
                    </div>
                </form>




                <form 
                className={openDemoForm ? `${s.modal_demo_form} ${s.open}`  : `${s.modal_demo_form}`}
                >
                
                    <input
                        type="text"
                        placeholder={type === 'reg' ? "Ваше ім’я" : "Ваше логин(номер телефона)"}
                        value={firstArea}
                        onChange={e => setFirstArea(e.target.value)}
                    />
                    <input
                        type={type === 'reg' ? "text" : 'password'}
                        placeholder={type === 'reg' ? "Ваша фамилия" : "Пароль"}
                        value={secondArea}
                        onChange={e => setSecondArea(e.target.value)}
                    />
                    {type === 'reg' && <input
                        type={type === 'reg' ? "text" : 'password'}
                        placeholder={type === 'reg' ? "Номер телефону" : "Пароль"}
                        value={thirdArea}
                        onChange={e => setThirdArea(e.target.value)}
                    />}

                    <div onClick={() => funcClick(firstArea, secondArea, thirdArea)} className={s.regisButton}>
                        <img className={s.btnStartStudy} src={btnBanner} />
                        {/* <input type='submit' value="Розпочати навчання" /> */}
                        {type === 'reg' ? <span className={s.reg_button_text}>Розпочати навчання</span> : <span className={s.login_button_text}>Увійти</span>}
                        
                    </div>

                    {type === 'reg' ? null : <span className={s.resetPasswordText}> Забули пароль?</span> }
                </form>




                <form className={openFullForm ? `${s.modal_full_form} ${s.open}` : `${s.modal_full_form}`}>

                    <input type="text" value="Ім'я" />
                    <input type="text" value="Фамілія" />
                    <input type="text" value="Логин" />
                    <input type="text" value="Почта" />
                    <input type="date" id="date" name="date"/>
                    <input type="text" value="Дата народження" />
                    <input type="text" value="Номер телефона" />
                    <input type="text" value="Пароль" />

                    <div className={s.regisButton}>
                        <img className={s.btnStartStudy} src={btnBanner} />
                        <span>Розпочати навчання</span>
                    </div>

                </form>
            </div>
        </Modal>
    )
}

export default ModalRegAuth
