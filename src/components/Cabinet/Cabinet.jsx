import React, { useEffect } from 'react';
import s from './Cabinet.module.css';

import circle_challenge from '../../assets/images/circle_challenge_cabinet.png';

import Modal from 'react-modal';
import btnStartHeader from '../../assets/images/btnStartHeader.png';
import btnBanner from '../../assets/images/btnBanner.png';




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

{/* <ProfileInfo profile={props.profile} status={ props.status } updateStatus={props.updateStatus} />
      <MyPostsContainer  /> */}
const Cabinet = (props) => {

  let subtitle;
  const [loginFormIsOpen, setLoginFormIsOpen] = React.useState(false);

  useEffect(() => {
    setLoginFormIsOpen(true);
  });


  let afterOpenLoginForm = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }



  return (
    <div>
      <div className={s.wrapperUserData}>
        <div className={s.userData}>
          <div className={s.achievements}></div>
          <div className={s.editData}></div>
        </div>
        <div className={s.cabinetChallenge}>
          <h1>CHALLENGE</h1>
          <img src={ circle_challenge }/>
        </div>
      </div>



      <Modal
        isOpen={loginFormIsOpen}
        onAfterOpen={afterOpenLoginForm}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <div className={s.modal_wrapper}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Створити пароль</h2>

          <form className={s.modal_form}>
            <input type="text" value="Пароль"/>
            <input type="text" value="Підтвердити пароль"/>

            <div className={s.regisButton}>
              <img className={s.btnStartStudy} src={btnBanner} />
              <span>Увійти</span>
            </div>
          </form>
        </div>
              
      </Modal>


    </div>
    
  );

}


export default Cabinet;