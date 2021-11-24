import React, { useEffect } from 'react';//импортируэм язык JSX
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarMain from './components/NavbarMain/Navbar';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import Teacher from './components/Teacher/Teacher';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter, Route } from "react-router-dom";

import Calendar from './components/Calendar/Calendar';
import CabinetContainer from './components/Cabinet/CabinetContainer';
import Challenge from './components/Challenge/Challenge';
import NewsContainer from './components/News/NewsContainer';
import StartPageContainer from './components/StartPage/StartPageContainer';
import { useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Cabinet from './components/Cabinet/Cabinet';
import StartPage from './components/StartPage/StartPage';



const App = (props) => {

  const { dataUser } = useSelector(state => state.auth)

  useEffect(() => {
    console.log('DATA USER REDUX', dataUser)
  }, [dataUser])

  useEffect(() => {
    console.log('AUTH', localStorage.getItem('auth'));

  }, [])

  if (localStorage.getItem('auth') === '0' || localStorage.getItem('auth') === null) {
    return (
      <Route exact path="/" render={() => <StartPage />} />
    )
  }

  return (
    <div className='app-wrapper'>
      <Route path="/cabinet" render={() => <NavbarMain />} /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
      <Route path="/calendar" render={() => <Navbar />} />
      <Route path="/news" render={() => <Navbar />} />
      <Route path="/challenge" render={() => <Navbar />} />
      <Route path="/teacher" render={() => <Navbar />} />
      <Route path="/courses" render={() => <Navbar />} />
      <Route path="/aboutUs" render={() => <Navbar />} />

      <Route path="/cabinet" render={() => <Header />} /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
      <Route path="/calendar" render={() => <Header />} />
      <Route path="/news" render={() => <Header />} />
      <Route path="/challenge" render={() => <Header />} />
      <Route path="/teacher" render={() => <Header />} />
      <Route path="/courses" render={() => <Header />} />
      <Route path="/aboutUs" render={() => <Header />} />

      <div className="app-wrapper-content">
        {/* Route використовується для роботи як силки, path - адрес сторінки, component - в цей параметр ми передаєм компоненту яка буде віддображатись */}
        {/* path="/dialogs" - це путь читається з корня то навіть якшо буде такий путь /dialogs/spam/dkkmd всеодно буде показуватись цей компонента */}
        {/* exact - говорить щоб компонента виводилась якщо путь в точ точ такий самий  */}

        {/* Route это компонента еоторая смотрит за url, если он совпадает то делает render */}
        {/* <Route path="/calendar" render={ () => <DialogsContainer /> } /> */}

        <Route path="/cabinet" render={() => <Cabinet />} /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
        <Route path="/calendar" render={() => <Calendar />} />
        <Route path="/news" render={() => <NewsContainer />} />
        <Route path="/challenge" render={() => <Challenge />} />
        <Route path="/teacher" render={() => <Teacher />} />
        <Route path="/courses" render={() => <Courses />} />
        <Route path="/aboutUs" render={() => <AboutUs />} />


      </div>

    </div>

  );
}


export default App;
