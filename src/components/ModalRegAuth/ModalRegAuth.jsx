import React, { useEffect, useState } from 'react'
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

                <form className={s.modal_form}>

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
                        <span>{type === 'reg' ? "Розпочати навчання" : "Увійти"}</span>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default ModalRegAuth
