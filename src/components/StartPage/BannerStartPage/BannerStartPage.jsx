import React from 'react';
import s from '../StartPage.module.css';
import { NavLink, Route, useHistory } from "react-router-dom";
import Modal from 'react-modal';
import bannerPhoto from '../../../assets/images/bannerPhoto.png';

import btnBanner from '../../../assets/images/StartPage/bannerBtn-StartStudy.svg';
import bannerUnderline from '../../../assets/images/StartPage/banner-Underline.svg';

import close_icon from '../../../assets/images/close.svg';
import ModalRegAuth from '../../ModalRegAuth/ModalRegAuth';



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

const BannerStartPage = () => {

  const history = useHistory()

  
  let subtitle;
  const [registrationFormIsOpen, setRegistrationFormIsOpen] = React.useState(false);


  let openRegistrationForm = () => {
    setRegistrationFormIsOpen(true);
    document.body.style.overflow = 'hidden';
  }



  let afterOpenRegistrationForm = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }



  let closeRegistrationForm = () => {
    setRegistrationFormIsOpen(false);
    document.body.style.overflow = 'unset';
  }




  const onReg = (name, surname, phone) => {
    localStorage.setItem('auth', 2)

    localStorage.setItem('name', name)
    localStorage.setItem('surname', surname)
    localStorage.setItem('phone', phone)

    history.push('/cabinet')
    // console.log('click reg', name, phone);
  }




  return (

    <div className={s.bannerWrapper}>
      <div className={s.bannerInfo}>
        <h2>Hallo</h2>
        <h1>DESCHULE!</h1>
        <h4>Курс німецкої мови з гарантією результату!</h4>

        <img className={s.bannerUnderline} src={bannerUnderline} />

        <span>Вивчай німецьку легко та цікаво з нашою унікальною методикою асоціативного викладення матеріалу.</span>



        <div onClick={openRegistrationForm} className={s.regisButton}>
          <img src={btnBanner} />
          <span>Спробувати безкоштовно!</span>
        </div>

        <ModalRegAuth
          type='fastReg'
          isOpen={registrationFormIsOpen}
          onAfterOpen={afterOpenRegistrationForm}
          onRequestClose={closeRegistrationForm}
          style={customStyles}
          contentLabel="Example Modal"
          funcClick={onReg}
        />
      </div>



      <img className={s.bannerPhoto} src={bannerPhoto} />


    </div>
  );

}


export default BannerStartPage;