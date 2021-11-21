import React from 'react';
import s from '../StartPage.module.css';
import {NavMenu, NavLink, Route} from "react-router-dom";
import dragon from '../../../assets/images/Dragon.png';
import Modal from 'react-modal';
import btnStartHeader from '../../../assets/images/btnStartHeader.png';
import rectangleLanguage from '../../../assets/images/rectangleLanguage.png';
import btnBanner from '../../../assets/images/btnBanner.png';
import close_icon from '../../../assets/images/close.svg';


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
    subtitle.style.color = '#f00';
  }
  let afterOpenLoginForm = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }


  let closeRegistrationForm = () => {
    setRegistrationFormIsOpen(false);
  }
  let closeLoginForm = () => {
    setLoginFormIsOpen(false);
  }
        


        
  return (
    
    <div className={s.header}>

      <div className={s.logo}>
        <img src={ dragon }  />
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
            <img  src={ btnStartHeader }  />
            <span>Почати навчання</span>
          </div>
            
            <Modal
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
                  <input type="text" value="Ваше ім’я"/>
                  <input type="text" value="Номер телефону"/>

                  <div className={s.regisButton}>
                    <img className={s.btnStartStudy} src={btnBanner} />
                    <span>Розпочати навчання</span>
                  </div>
                </form>
              </div>
              

            </Modal>


            <div onClick={openLoginForm} className={s.loginButton}>
              <img src={ btnStartHeader }  />
              <span>Продовжити</span>
            </div>

            <Modal
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
                  <input type="text" value="Ваше логин(номер телефона)"/>
                  <input type="text" value="Пароль"/>

                  <div className={s.regisButton}>
                    <img className={s.btnStartStudy} src={btnBanner} />
                    <span>Увійти</span>
                  </div>
                </form>
              </div>
              
            </Modal>

        </div>

            <div className={s.changeLanguage}>
              <span>UA</span>
              <img src={rectangleLanguage} />
            </div>
    </div>
  );

}








export default HeaderStartPage;