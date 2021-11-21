import React from 'react';
import s from './Navbar.module.css';
import {NavLink, Route} from "react-router-dom";
import cabinet from '../../assets/images/cabinet.svg';
import active_cabinet from '../../assets/images/active_cabinet.svg';
import calendar from '../../assets/images/calendar.svg';
import active_calendar from '../../assets/images/active_calendar.svg';
import news from '../../assets/images/news.svg';
import active_news from '../../assets/images/active_news.svg';
import challenge from '../../assets/images/challenge.svg';
import active_challenge from '../../assets/images/active_challenge.svg';
import teacher from '../../assets/images/teacher.svg';
import active_teacher from '../../assets/images/active_teacher.svg';
import courses from '../../assets/images/courses.svg';
import active_courses from '../../assets/images/active_courses.svg';
import aboutUs from '../../assets/images/aboutUs.svg';
import active_aboutUs from '../../assets/images/active_aboutUs.svg';

import dragon from '../../assets/images/Dragon.png';


const Navbar = () => {
  
        
            
        
  return (
    
    <nav className={s.nav}>
      <div className={s.logo}>
        <img src={ dragon }  />
      </div>

      <div className={`${s.item} ${s.active}`} >
        <NavLink to="/cabinet" activeClassName={s.activeLink} > 
          
          <Route path="/cabinet" render={ () => <img src={ active_cabinet }/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
          <Route path="/calendar" render={ () => <img src={ cabinet }  /> } />
          <Route path="/news" render={ () => <img src={ cabinet }/> } />
          <Route path="/challenge" render={ () => <img src={ cabinet }/> } />
          <Route path="/teacher" render={ () => <img src={ cabinet }/> } />
          <Route path="/courses" render={ () => <img src={ cabinet }/> } />
          <Route path="/aboutUs" render={ () => <img src={ cabinet }/> } />
       
        </NavLink>
        {/* тег NavLink - это аналог до тега "а", але виконюэ переадресацію без перезагрузки сторінки, to замінсть href */}
        {/* всі атрибути превращаються в props */}
        {/* activeClassName={s.active} - перезаписуєм клас для активних силок */}
      </div>

      <div className={s.item} >
        <NavLink to="/calendar" activeClassName={s.activeLink} >

          <Route path="/cabinet" render={ () => <img src={ calendar }/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
          <Route path="/calendar" render={ () => <img src={ active_calendar }  /> } />
          <Route path="/news" render={ () => <img src={ calendar }/> } />
          <Route path="/challenge" render={ () => <img src={ calendar }/> } />
          <Route path="/teacher" render={ () => <img src={ calendar }/> } />
          <Route path="/courses" render={ () => <img src={ calendar }/> } />
          <Route path="/aboutUs" render={ () => <img src={ calendar }/> } />
          
        </NavLink>
      </div>

      <div className={s.item} >
        <NavLink to="/news" activeClassName={s.activeLink} >
          <Route path="/cabinet" render={ () => <img src={ news }/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
          <Route path="/calendar" render={ () => <img src={ news }  /> } />
          <Route path="/news" render={ () => <img src={ active_news }/> } />
          <Route path="/challenge" render={ () => <img src={ news }/> } />
          <Route path="/teacher" render={ () => <img src={ news }/> } />
          <Route path="/courses" render={ () => <img src={ news }/> } />
          <Route path="/aboutUs" render={ () => <img src={ news }/> } />
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/challenge" activeClassName={s.activeLink} >
          <Route path="/cabinet" render={ () => <img src={ challenge }/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
          <Route path="/calendar" render={ () => <img src={ challenge }  /> } />
          <Route path="/news" render={ () => <img src={ challenge }/> } />
          <Route path="/challenge" render={ () => <img src={ active_challenge }/> } />
          <Route path="/teacher" render={ () => <img src={ challenge }/> } />
          <Route path="/courses" render={ () => <img src={ challenge }/> } />
          <Route path="/aboutUs" render={ () => <img src={ challenge }/> } />
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/teacher" activeClassName={s.activeLink} >

          <Route path="/cabinet" render={ () => <img src={ teacher }/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
          <Route path="/calendar" render={ () => <img src={ teacher }  /> } />
          <Route path="/news" render={ () => <img src={ teacher }/> } />
          <Route path="/challenge" render={ () => <img src={ teacher }/> } />
          <Route path="/teacher" render={ () => <img src={ active_teacher }/> } />
          <Route path="/courses" render={ () => <img src={ teacher }/> } />
          <Route path="/aboutUs" render={ () => <img src={ teacher }/> } />

        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/courses" activeClassName={s.activeLink} >

          <Route path="/cabinet" render={ () => <img src={ courses }/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
          <Route path="/calendar" render={ () => <img src={ courses }  /> } />
          <Route path="/news" render={ () => <img src={ courses }/> } />
          <Route path="/challenge" render={ () => <img src={ courses }/> } />
          <Route path="/teacher" render={ () => <img src={ courses }/> } />
          <Route path="/courses" render={ () => <img src={ active_courses }/> } />
          <Route path="/aboutUs" render={ () => <img src={ courses }/> } />

        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/aboutUs" activeClassName={s.activeLink} >

          <Route path="/cabinet" render={ () => <img src={ aboutUs }/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
          <Route path="/calendar" render={ () => <img src={ aboutUs }  /> } />
          <Route path="/news" render={ () => <img src={ aboutUs }/> } />
          <Route path="/challenge" render={ () => <img src={ aboutUs }/> } />
          <Route path="/teacher" render={ () => <img src={ aboutUs }/> } />
          <Route path="/courses" render={ () => <img src={ aboutUs }/> } />
          <Route path="/aboutUs" render={ () => <img src={ active_aboutUs }/> } />

        </NavLink>
      </div>
    </nav>
  );

}


export default Navbar;