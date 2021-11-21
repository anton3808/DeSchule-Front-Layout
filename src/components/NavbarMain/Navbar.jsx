import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import cabinet from '../../assets/images/cabinet.svg';
import active_cabinet from '../../assets/images/active_cabinet.svg';
import calendar from '../../assets/images/calendar.svg';
import news from '../../assets/images/news.svg';
import challenge from '../../assets/images/challenge.svg';
import teacher from '../../assets/images/teacher.svg';
import courses from '../../assets/images/courses.svg';
import aboutUs from '../../assets/images/aboutUs.svg';
import dragon from '../../assets/images/Dragon.png';


import { ReactComponent as Cabinet } from '../../assets/images/cabinet.svg';




const Navbar = (props) => {
  
  return (
    
    <nav className={s.nav}>
      <div className={s.logo}>
        <img src={ dragon }  />
        <span>eSchule</span>
      </div>

      <div className={`${s.item} ${s.active}`} >
        <NavLink to="/cabinet" activeClassName={s.activeLink} > 
            <img src={ active_cabinet }  />
            <span>Особистий кабінет</span>
            
            
        </NavLink>
        {/* тег NavLink - это аналог до тега "а", але виконюэ переадресацію без перезагрузки сторінки, to замінсть href */}
        {/* всі атрибути превращаються в props */}
        {/* activeClassName={s.active} - перезаписуєм клас для активних силок */}
      </div>

      <div className={s.item} >
        <NavLink to="/calendar" activeClassName={s.activeLink} >
        <img src={ calendar }  />
        <span>Календар</span></NavLink>
      </div>

      <div className={s.item} >
        <NavLink to="/news" activeClassName={s.activeLink} >
        <img src={ news }  />
        <span>Новини</span>
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/challenge" activeClassName={s.activeLink} >
        <img src={ challenge }  />
        <span>Daily Challenge</span>
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/teacher" activeClassName={s.activeLink} >
        <img src={ teacher }  />
        <span>Вчитель</span>
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/courses" activeClassName={s.activeLink} >
        <img src={ courses }  />
        <span>Курси</span>
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/aboutUs" activeClassName={s.activeLink} >
        <img src={ aboutUs }  />
        <span>Про нас</span>
        </NavLink>
      </div>
    </nav>
  );

}


export default Navbar;