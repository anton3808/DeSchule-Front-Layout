import React from 'react';
import s from '../StartPage.module.css';
import { NavMenu, NavLink, Route, useHistory } from "react-router-dom";
import dragon from '../../../assets/images/Dragon.png';
import Modal from 'react-modal';
import btnStartHeader from '../../../assets/images/btnStartHeader.png';
import rectangleLanguage from '../../../assets/images/rectangleLanguage.png';
import btnBanner from '../../../assets/images/btnBanner.png';
import close_icon from '../../../assets/images/close.svg';
import ModalRegAuth from '../../ModalRegAuth/ModalRegAuth';
import axios from 'axios'
import { BASE_URL } from '../../../constants';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../../redux/reducers/auth-reducer';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


const HeaderStartPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  let subtitle;
  const [registrationFormIsOpen, setRegistrationFormIsOpen] = React.useState(false);
  const [loginFormIsOpen, setLoginFormIsOpen] = React.useState(false);

  let openRegistrationForm = () => {
    setRegistrationFormIsOpen(true);
  }
  let openLoginForm = () => {
    setLoginFormIsOpen(true);
  }


  let afterOpenRegistrationForm = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  let afterOpenLoginForm = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }


  let closeRegistrationForm = () => {
    setRegistrationFormIsOpen(false);
  }
  let closeLoginForm = () => {
    setLoginFormIsOpen(false);
  }

  const onReg = () => {
    console.log('click reg');
  }

  const onAuth = (login, password) => {
    axios.post(`${BASE_URL}/login`, {
      login,
      password
    },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(function (res) {
        console.log('DATA LOGIN', res.data);
        localStorage.setItem('userData', JSON.stringify(res.data))
        localStorage.setItem('auth', 1)
        dispatch(setUserAction(res.data))
        history.push('/cabinet')
      }).catch(function (error) {
        console.log('ERR', error);
      })
    console.log('click auth', login, password);
  }


  return (

    <div className={s.header}>

      <div className={s.logo}>
        <img src={dragon} />
        <span>eSchule</span>
      </div>

      <nav>
        <NavLink className={s.linkMenu} to="/" activeStyle>
          Про проект
          </NavLink>
        <NavLink className={s.linkMenu} to="/about" activeStyle>
          Курси
          </NavLink>
        <NavLink className={s.linkMenu} to="/contact" activeStyle>
          Відгуки
          </NavLink>

      </nav>

      <div className={s.buttonsHeader}>
        <div onClick={openRegistrationForm} className={s.regisButton}>
          <img src={btnStartHeader} />
          <span>Почати навчання</span>
        </div>

        <ModalRegAuth
          type='reg'
          isOpen={registrationFormIsOpen}
          onAfterOpen={afterOpenRegistrationForm}
          onRequestClose={closeRegistrationForm}
          style={customStyles}
          contentLabel="Example Modal"
          funcClick={onReg}
        />

        {/* <Modal
          isOpen={registrationFormIsOpen}
          onAfterOpen={afterOpenRegistrationForm}
          onRequestClose={closeRegistrationForm}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <div className={s.modal_wrapper}>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Реєстрація</h2>

            <img onClick={closeRegistrationForm} src={close_icon} className={s.close_icon}></img>

            <form className={s.modal_form}>
              <input type="text" value="Ваше ім’я" />
              <input type="text" value="Номер телефону" />

              <div onClick={onSubmit} className={s.regisButton}>
                <img className={s.btnStartStudy} src={btnBanner} />
                <span>Розпочати навчання</span>
              </div>
            </form>
          </div>


        </Modal> */}


        <div onClick={openLoginForm} className={s.loginButton}>
          <img src={btnStartHeader} />
          <span>Продовжити</span>
        </div>

        <ModalRegAuth
          type='auth'
          isOpen={loginFormIsOpen}
          onAfterOpen={afterOpenLoginForm}
          onRequestClose={closeLoginForm}
          style={customStyles}
          contentLabel="Example Modal"
          funcClick={onAuth}
        />

        {/* <Modal
          isOpen={loginFormIsOpen}
          onAfterOpen={afterOpenLoginForm}
          onRequestClose={closeLoginForm}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <div className={s.modal_wrapper}>
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Увійти</h2>

            <img onClick={closeLoginForm} src={close_icon} className={s.close_icon}></img>

            <form className={s.modal_form}>
              <input type="text" value="Ваше логин(номер телефона)" />
              <input type="text" value="Пароль" />

              <div className={s.regisButton}>
                <img className={s.btnStartStudy} src={btnBanner} />
                <span>Увійти</span>
              </div>
            </form>
          </div>

        </Modal> */}

      </div>

      <div className={s.changeLanguage}>
        <span>UA</span>
        <img src={rectangleLanguage} />
      </div>
    </div>
  );

}








export default HeaderStartPage;