import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";
import Modal from 'react-modal';
import bannerPhoto from '../../../assets/images/bannerPhoto.png';
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

const BannerStartPage = () => {
  
  let subtitle;
  const [registrationFormIsOpen, setRegistrationFormIsOpen] = React.useState(false);


  let openRegistrationForm = () => {
    setRegistrationFormIsOpen(true);
  }



  let afterOpenRegistrationForm = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }



  let closeRegistrationForm = () => {
    setRegistrationFormIsOpen(false);
  }

        
  return (
    
    <div className={s.bannerWrapper}>
      <div className={s.bannerInfo}>
        <h2>Hallo</h2>
        <h1>DESCHULE!</h1>
        <h4>Курс німецкої мови з гарантією результату!</h4>

        <img className={s.smallBtn} src={btnBanner} />

        <span>Вивчай німецьку легко та цікаво з нашою унікальною методикою асоціативного викладення матеріалу.</span>

        

        <div onClick={openRegistrationForm} className={s.regisButton}>
          <img className={s.btnStartStudy} src={btnBanner} />
          <span>Спробувати безкоштовно!</span>
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


        
      </div>

      

      <img className={s.bannerPhoto} src={bannerPhoto} />
      

    </div>
  );

}


export default BannerStartPage;