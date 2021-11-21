import React from 'react';
import s from './Header.module.css';//підключення стилів як модуль (якобєкт з ключом назви класа і значенням нового класа)
import {BrowserRouter, Route} from "react-router-dom";
import dictionary from '../../assets/images/dictionary.png';
import bell from '../../assets/images/bell.svg';
import photo_user from '../../assets/images/photo_user.png';

import DayJS from 'react-dayjs';
//{ dateFormat(now, "N") }
const Header = (props) => {
  //const now = new Date();


  let today = new Date();
  
  var month;
  var dayOfWeek;
  
  switch (parseInt(today.getMonth()+1)) {
      case 1:   
        month = "Січня";
        break
      case 2:   
        month = "Лютого";
        break
      case 3: 
        month = "Березня";
        break
      case 4: 
        month = "Квітня";
        break
      case 5: 
        month = "Травня";
        break
      case 6: 
        month = "Червня";
        break
      case 7: 
        month = "Липня";
        break
      case 8: 
        month = "Серпня";
        break
      case 9: 
        month = "Вересня";
        break
      case 10: 
        month = "Жовтня";
        break
      case 11: 
        month = "Листопада";
        break
      case 12:  
        month = "Грудня";
        break
      default:      
        month = "Січня";
    }




    switch (today.getDay()) {
      case 0:
          dayOfWeek = "Неділя";
          break;
      case 1:
          dayOfWeek = "Понеділок";
          break;
      case 2:
          dayOfWeek = "Вівторок";
          break;
      case 3:
          dayOfWeek = "Середа";
          break;
      case 4:
          dayOfWeek = "Четверг";
          break;
      case 5:
          dayOfWeek = "П'ятниця";
          break;
      case 6:
          dayOfWeek = "Субота";
      }
  

  

  let date = today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

  var currentWeekDay = today.getDay();


  return (
    <header className={s.header}>


      <div className={s.header_menu}>

        <Route path="/cabinet" render={ () => <span className={s.currentPage}>Особистий кабінет</span> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
        <Route path="/calendar" render={ () => <span className={s.currentPage}>Календар</span> } />
        <Route path="/news" render={ () => <span className={s.currentPage}>Новини</span> } />
        <Route path="/challenge" render={ () => <span className={s.currentPage}>Daily challenge</span> } />
        <Route path="/teacher" render={ () => <span className={s.currentPage}>Вчитель</span> } />
        <Route path="/courses" render={ () => <span className={s.currentPage}>Курси</span> } />
        <Route path="/aboutUs" render={ () => <span className={s.currentPage}>Про нас</span> } />


        <div className={s.time}>
          <span>{dayOfWeek}, {today.getDate()} {month} {today.getFullYear()}</span>
          
        </div>


        <img className={s.dictionary_img} src={ dictionary }  />
      
        <img className={s.bell} src={ bell }  />

        <div className={s.user_data}>
          <img className={s.photo_user} src={ photo_user }  />
          <div className={s.user_info}>
            <span className={s.name}>Андрій Андрієнко</span>
            <span className={s.status}>Вчитель</span>
          </div>
        </div>

      </div>

      
    </header>
  );

}

//<div className={s.loginBlock}>
  //      { props.isAuth ? props.login
    //      : <NavLink to={'/login'}>Login</NavLink>
      //  }
     // </div>

export default Header;