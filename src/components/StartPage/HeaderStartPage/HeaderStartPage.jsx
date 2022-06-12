import React, { useState } from 'react';
import s from '../StartPage.module.css';
import { NavMenu, NavLink, Route, useHistory } from "react-router-dom";
import dragon from '../../../assets/images/Dragon.png';
import Modal from 'react-modal';
// import btnStartHeader from '../../../assets/images/btnStartHeader.png';
import btnStartHeader from '../../../assets/images/StartPage/headerBtn-StartStudy.svg';
import loginUnderline from '../../../assets/images/StartPage/headerUnderline-Login.svg';

import rectangleLanguage from '../../../assets/images/StartPage/rectangleLanguage.svg';
import btnBanner from '../../../assets/images/btnBanner.png';
import close_icon from '../../../assets/images/close.svg';
import ModalRegAuth from '../../ModalRegAuth/ModalRegAuth';
import axios from 'axios'
import { BASE_URL } from '../../../constants';
import { useDispatch } from 'react-redux';
import { setUserAction } from '../../../redux/reducers/auth-reducer';
// import { configureAnchors } from 'react-scrollable-anchor'
import { Link } from 'react-scroll';
 
// // Offset all anchors by -60 to account for a fixed header
// // and scroll more quickly than the default 400ms
// configureAnchors({offset: -60, scrollDuration: 200})




const customStyles = {

  overlay: {
    position: 'fixed',
    overflow: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: '9999',
    
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #875897',
    background: '#fff',
    overflowY: 'auto',
    // height: "100%",
    WebkitOverflowScrolling: 'touch',
    borderRadius: '30px',
    outline: 'none',
    padding: '40px',
    zIndex: '9999'
  },
};


const HeaderStartPage = () => {

  const dispatch = useDispatch()
  const history = useHistory()

  let subtitle;
  const [registrationFormIsOpen, setRegistrationFormIsOpen] = React.useState(false);
  const [loginFormIsOpen, setLoginFormIsOpen] = React.useState(false);

  const [errorText, setErrorText] = useState('')
  
  let openRegistrationForm = () => {
    setRegistrationFormIsOpen(true);
    document.body.style.overflow = 'hidden';
  }
  let closeRegistrationForm = () => {
    setRegistrationFormIsOpen(false);
    document.body.style.overflow = 'unset';
  }


  let openLoginForm = () => {
    setLoginFormIsOpen(true);
    document.body.style.overflow = 'hidden';
  }
  let closeLoginForm = () => {
    setLoginFormIsOpen(false);
    document.body.style.overflow = 'unset';
  }


  let afterOpenRegistrationForm = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }
  let afterOpenLoginForm = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  



  const onReg = (name, phone) => {
    localStorage.setItem('auth', 2)
    localStorage.setItem('name', name)
    // localStorage.setItem('surname', surname)
    localStorage.setItem('phone', phone)

    history.push('/cabinet')
    // console.log('click reg', name, phone);
  }

  const onAuth = (values) => {
    alert("Email: " + values.mail + "\nPassword: " + values.password  )
    // axios.post(`${BASE_URL}/login`, {
    //   login,
    //   password
    // },
    //   {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json',
    //     }
    //   }).then(function (res) {
    //     console.log('DATA LOGIN', res);
    //     localStorage.setItem('userData', JSON.stringify(res.data))
    //     localStorage.setItem('auth', 1)
    //     dispatch(setUserAction(res.data))
    //     history.push('/cabinet')
    //     setErrorText('')
    //   }).catch(function (error) {
    //     console.log('ERR', error.response);
    //     setErrorText('Почта или пароль введены не правильно')
    //   })
  }


  return (

    <div className={s.header}>

      <NavLink to="/" className={s.navLink}>
        <div className={s.logo}>
          <img src={dragon} />
          <span>eSchule</span>
        </div>                      
      </NavLink>
      

      <nav>
        <Link className={s.linkMenu} activeClassName={s.activeLink} to='about' smooth={true} duration={1000}>Курс</Link>
        <Link className={s.linkMenu} to='course' smooth={true} duration={1000}>Тест</Link>
        <Link className={s.linkMenu} to='reviews' smooth={true} duration={1000}>Додаткові курси</Link>
        <Link className={s.linkMenu} to='reviews' smooth={true} duration={1000}>Відгуки</Link>
      </nav>



      <div className={s.buttonsHeader}>
        <div onClick={openLoginForm} className={s.loginButton}>
          {/* <img src={btnStartHeader} /> */}
          <span>Увійти</span>
          <img src={loginUnderline} alt="" />
        </div>

        <ModalRegAuth
          type='auth'
          isOpen={loginFormIsOpen}
          onAfterOpen={afterOpenLoginForm}
          onRequestClose={closeLoginForm}
          style={customStyles}
          contentLabel="Example Modal"
          funcClick={onAuth}
          errorText={errorText}
        />


        <div onClick={openRegistrationForm} className={s.regisButton}>
          <img src={btnStartHeader} />
          <span>Почати навчання</span>
        </div>

        <ModalRegAuth
          type='packageReg'
          isOpen={registrationFormIsOpen}
          // onAfterOpen={afterOpenRegistrationForm}
          onRequestClose={closeRegistrationForm}
          style={customStyles}
          contentLabel="Example Modal"
        />


        <div className={s.changeLanguage}>
          <span>UA</span>
          <img src={rectangleLanguage} />
        </div>
      </div>

      
    </div>
  );

}








export default HeaderStartPage;