import React from 'react';//импортируэм язык JSX
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarMain from './components/NavbarMain/Navbar';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import Teacher from './components/Teacher/Teacher';
import AboutUs from './components/AboutUs/AboutUs';
import {BrowserRouter, Route} from "react-router-dom";

import Calendar from './components/Calendar/Calendar';
import CabinetContainer from './components/Cabinet/CabinetContainer';
import Challenge from './components/Challenge/Challenge';
import NewsContainer from './components/News/NewsContainer';
import StartPageContainer from './components/StartPage/StartPageContainer';



const App = (props) => {
  return (

    <Route exact path="/" render={ () => <StartPageContainer/> } />
    
      // <div className='app-wrapper'>
        

      //   <Route path="/cabinet" render={ () => <NavbarMain/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
      //   <Route path="/calendar" render={ () => <Navbar /> } />
      //   <Route path="/news" render={ () => <Navbar/> } />
      //   <Route path="/challenge" render={ () => <Navbar/> } />
      //   <Route path="/teacher" render={ () => <Navbar /> } />
      //   <Route path="/courses" render={ () => <Navbar /> } />
      //   <Route path="/aboutUs" render={ () => <Navbar /> } />

      //   <Route path="/cabinet" render={ () => <HeaderContainer/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
      //   <Route path="/calendar" render={ () => <HeaderContainer /> } />
      //   <Route path="/news" render={ () => <HeaderContainer/> } />
      //   <Route path="/challenge" render={ () => <HeaderContainer/> } />
      //   <Route path="/teacher" render={ () => <HeaderContainer /> } />
      //   <Route path="/courses" render={ () => <HeaderContainer /> } />
      //   <Route path="/aboutUs" render={ () => <HeaderContainer /> } />

      //   <div className="app-wrapper-content">
      //     {/* Route використовується для роботи як силки, path - адрес сторінки, component - в цей параметр ми передаєм компоненту яка буде віддображатись */}
      //     {/* path="/dialogs" - це путь читається з корня то навіть якшо буде такий путь /dialogs/spam/dkkmd всеодно буде показуватись цей компонента */}
      //     {/* exact - говорить щоб компонента виводилась якщо путь в точ точ такий самий  */}

      //     {/* Route это компонента еоторая смотрит за url, если он совпадает то делает render */}
      //     {/* <Route path="/calendar" render={ () => <DialogsContainer /> } /> */}

      //     <Route path="/cabinet" render={ () => <CabinetContainer/> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
      //     <Route path="/calendar" render={ () => <Calendar /> } />
      //     <Route path="/news" render={ () => <NewsContainer/> } />
      //     <Route path="/challenge" render={ () => <Challenge/> } />
      //     <Route path="/teacher" render={ () => <Teacher /> } />
      //     <Route path="/courses" render={ () => <Courses /> } />
      //     <Route path="/aboutUs" render={ () => <AboutUs /> } />

          
      //   </div>

      // </div>
    
  );
}


export default App;
