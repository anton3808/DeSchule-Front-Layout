import React, { useEffect, useState } from 'react';
import s from './Cabinet.module.css';

import circle_challenge from '../../assets/images/circle_challenge_cabinet.png';

import Modal from 'react-modal';
import btnStartHeader from '../../assets/images/btnStartHeader.png';
import btnBanner from '../../assets/images/btnBanner.png';
import axios from 'axios'
import { BASE_URL } from '../../constants';



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
const Cabinet = ({ auth }) => {

  const [userNextData, setUserNext] = useState({
    email: '',
    pass: '',
    repPass: ''
  })
  const [error, setError] = useState({code: '', message: ''})

  let subtitle;
  const [loginFormIsOpen, setLoginFormIsOpen] = React.useState(false);

  useEffect(() => {
    setLoginFormIsOpen(true);
  });


  let afterOpenLoginForm = () => {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  const validForm = (nextData) => {
    // console.log(nextData);
    if(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(nextData.email) === false) {
      setError({code: 'email', message: 'Неверный формат почты'})
    } else if(nextData.email.length === 0) {
      setError({code: 'email', message: 'Обязательное поле: Почта'})
    } else if(nextData.pass.length === 0) {
      setError({code: 'pass', message: 'Обязательное поле: Пароль'})
    } else if(nextData.repPass.length === 0) {
      setError({code: 'pass', message: 'Обязательное поле: Підтвердити пароль'})
    } else if(nextData.pass !== nextData.repPass) {
      setError({code: 'pass', message: 'Пароли не совпадают'})
    } else {
      setError({code: '', message: ''})
      axios.post(`${BASE_URL}/register`, {
        name: localStorage.getItem('name'),
        surname: localStorage.getItem('surname'),
        phone: localStorage.getItem('phone'),
        password: nextData.pass,
        password_confirmation: nextData.repPass,
        email: nextData.email
      },
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(res => {
        console.log('REG DATA', res);
      }).catch(function (error) {
        console.log('ERR', error);
      })
      
    }
    // console.log(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(nextData.email));
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
          <img src={circle_challenge} />
        </div>
      </div>


      {auth !== '1'  && <Modal
        isOpen={loginFormIsOpen}
        onAfterOpen={afterOpenLoginForm}
        style={customStyles}
        contentLabel="Example Modal"
      >

        <div className={s.modal_wrapper}>
          <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Створити пароль</h2>

          <form className={s.modal_form}>
            <input type="text" placeholder="Почта" onChange={(e) => setUserNext(prev => ({...prev, email: e.target.value}))} />
            <input type="text" placeholder="Пароль" onChange={(e) => setUserNext(prev => ({...prev, pass: e.target.value}))} />
            <input type="text" placeholder="Підтвердити пароль" onChange={(e) => setUserNext(prev => ({...prev, repPass: e.target.value}))} />

            <div onClick={() => validForm(userNextData)} className={s.regisButton}>
              <img className={s.btnStartStudy} src={btnBanner} />
              <span>Увійти</span>
            </div>
          </form>
          {error.message && <div>{error.message}</div>} {//ДОБАВИТЬ СЮДА СТИЛЕЙ
          }
          
        </div>

      </Modal>}



    </div>

  );

}


export default Cabinet;