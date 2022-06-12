import React, { useEffect } from 'react';//импортируэм язык JSX
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import NavbarMain from './components/NavbarMain/Navbar';
import Navbar from './components/Navbar/Navbar';
import Courses from './components/Courses/Courses';
import Teacher from './components/Teacher/Teacher';
import AboutUs from './components/AboutUs/AboutUs';
import { BrowserRouter, Route, useHistory } from "react-router-dom";

import Calendar from './components/Calendar/Calendar';
import Lesson_1 from './components/Calendar/Lessons/A1/Lesson_1';
import Lesson_2 from './components/Calendar/Lessons/A1/Lesson_2';
import Lesson_3 from './components/Calendar/Lessons/A1/Lesson_3';
import CabinetContainer from './components/Cabinet/CabinetContainer';
import Challenge from './components/Challenge/Challenge';
import NewsContainer from './components/News/NewsContainer';
import CurrentNewsContainer from './components/News/CurrentNews/CurrentNews';
import StartPageContainer from './components/StartPage/StartPageContainer';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Cabinet from './components/Cabinet/Cabinet';
import StartPage from './components/StartPage/StartPage';
import { setUserAction } from './redux/reducers/auth-reducer';
import PageOfTestToDetermineLevel from './components/StartPage/TestToDetermineLevel/PageOfTestToDetermineLevel/PageOfTestToDetermineLevel';
import BuyingAdditionalCoursePage from './components/StartPage/AdditionalCourses/BuyingAdditionalCoursePage/BuyingAdditionalCoursePage';
import BuyingMainCoursePage from './components/StartPage/PackagesOfCourse/BuyingMainCoursePage/BuyingMainCoursePage';
import ChallengeExample from './components/Challenge/ChallengeExample/ChallengeExample';



const App = (props) => {

  const { dataUser } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    console.log('DATA USER REDUX', dataUser)
  }, [dataUser])

  useEffect(() => {
    const getItem = localStorage.getItem('userData')
    if(getItem) {
      if(Object.keys(JSON.parse(getItem)).length > 0) {
        dispatch(setUserAction(JSON.parse(getItem)))
      }
    }
    
  }, [])

  
  useEffect(() => {
    console.log('AUTH', localStorage.getItem('auth'));
    if (localStorage.getItem('auth') === '0') {
      history.push('/')
    } else if (localStorage.getItem('auth') === '/test') {
      history.push('/test')
    } else if (localStorage.getItem('auth') === '/buying-main-course') {
      history.push('/buying-main-course')
    } else if (localStorage.getItem('auth') === '/buying-additional-course') {
      history.push('/buying-additional-course')
    } 
    
  }, [])


  // useEffect(() => {
  //   console.log('AUTH', localStorage.getItem('auth'));
  //   if (localStorage.getItem('auth') === '0' || localStorage.getItem('auth') === null) {
  //     history.push('/')
  //   } 
    
  // }, [])


  // useEffect(() => {
  //   console.log('AUTH', localStorage.getItem('auth'));
  //   if (localStorage.getItem('auth') === '/test' || localStorage.getItem('auth') === null) {
  //     history.push('/test')
  //   }
    
  // }, [])

  //   useEffect(() => {
  //   console.log('AUTH', localStorage.getItem('auth'));
  //   if (localStorage.getItem('auth') === '/buying-main-course' || localStorage.getItem('auth') === null) {
  //     history.push('/buying-main-course')
  //   }
    
  // }, [])


  //   useEffect(() => {
  //   console.log('AUTH', localStorage.getItem('auth'));
  //   if (localStorage.getItem('auth') === '/buying-additional-course' || localStorage.getItem('auth') === null) {
  //     history.push('/buying-additional-course')
  //   }
    
  // }, [])

  
  // useEffect(() => {
  //   if (history.location.pathname === '/' && (localStorage.getItem('auth') === '1' || localStorage.getItem('auth') === '2')) {
  //     // console.log('ZASHLI');
  //     history.push('/cabinet')
  //   }
  //   // console.log(history.location, localStorage.getItem('auth') === '1');
  // }, [history.location.path])


  

  


  // if (localStorage.getItem('auth') === '/test' || localStorage.getItem('auth') === null) {

  //   return (
  //     <Route exact path="/test" render={() => <PageOfTestToDetermineLevel />} />
  //   )
  // }  

  //  if (localStorage.getItem('auth') === '/buying-main-course' || localStorage.getItem('auth') === null) {
  //   return (
  //     <Route exact path="/buying-main-course" render={() => <BuyingMainCoursePage />} />
  //   )
  // }  


  //  if (localStorage.getItem('auth') === '/buying-additional-course' || localStorage.getItem('auth') === null) {
  //   return (
  //     <Route exact path="/buying-additional-course" render={() => <BuyingAdditionalCoursePage />} />
  //   )
  // }  


  // if (localStorage.getItem('auth') === '0' || localStorage.getItem('auth') === null) {

  //   return (
  //     <Route exact path="/" render={() => <StartPage />} /> 
  //   )
  // }


  if (localStorage.getItem('auth') === '0' || localStorage.getItem('auth') === '/test' || localStorage.getItem('auth') === '/buying-main-course' || localStorage.getItem('auth') === '/buying-additional-course' || localStorage.getItem('auth') === null) {
    return (
      <div>
        <Route exact path="/" render={() => <StartPage />} /> 
        <Route exact path="/test" render={() => <PageOfTestToDetermineLevel />} />
        <Route exact path="/buying-main-course" render={() => <BuyingMainCoursePage />} />
        <Route exact path="/buying-additional-course" render={() => <BuyingAdditionalCoursePage />} />
      </div>
    )
  }

  

  

  return (
    <div className='app-wrapper'>
      <Route path="/cabinet" render={() => <NavbarMain />} /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
      <Route path="/calendar" render={() => <Navbar />} />
      <Route path="/news" render={() => <Navbar />} />
      <Route path="/challenge" render={() => <NavbarMain />} />
      <Route path="/challenge/example" render={() => <NavbarMain />} />
      <Route path="/teacher" render={() => <Navbar />} />
      <Route path="/courses" render={() => <Navbar />} />
      <Route path="/aboutUs" render={() => <Navbar />} />

      <Route path="/cabinet" render={() => <Header />} /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
      <Route path="/calendar" render={() => <Header />} />
      <Route path="/news" render={() => <Header />} />
      <Route path="/challenge" render={() => <Header />} />
      <Route path="/challenge/example" render={() => <Header />} />
      <Route path="/teacher" render={() => <Header />} />
      <Route path="/courses" render={() => <Header />} />
      <Route path="/aboutUs" render={() => <Header />} />

      <div className="app-wrapper-content">
        {/* Route використовується для роботи як силки, path - адрес сторінки, component - в цей параметр ми передаєм компоненту яка буде віддображатись */}
        {/* path="/dialogs" - це путь читається з корня то навіть якшо буде такий путь /dialogs/spam/dkkmd всеодно буде показуватись цей компонента */}
        {/* exact - говорить щоб компонента виводилась якщо путь в точ точ такий самий  */}

        {/* Route это компонента еоторая смотрит за url, если он совпадает то делает render */}
        {/* <Route path="/calendar" render={ () => <DialogsContainer /> } /> */}

        <Route path="/cabinet" render={() => <Cabinet auth={localStorage.getItem('auth')} />} /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
        <Route exact path="/calendar" render={() => <Calendar />} />
        <Route path="/calendar/A1/lesson_1" render={() => <Lesson_1 />} />
        <Route path="/calendar/A1/lesson_2" render={() => <Lesson_2 />} />
        <Route path="/calendar/A1/lesson_3" render={() => <Lesson_3 />} />
        <Route exact path="/news" render={() => <NewsContainer />} />
        <Route exact path="/news/current_news" render={() => <CurrentNewsContainer />} />
        <Route exact path="/challenge" render={() => <Challenge />} />
        <Route path="/challenge/example" render={() => <ChallengeExample />} />
        <Route path="/teacher" render={() => <Teacher />} />
        <Route path="/courses" render={() => <Courses />} />
        <Route path="/aboutUs" render={() => <AboutUs />} />


      </div>


      <Route path="/cabinet" render={() => <Footer />} /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
      <Route path="/calendar" render={() => <Footer />} />
      <Route path="/news" render={() => <Footer />} />
      <Route path="/challenge" render={() => <Footer />} />
      <Route path="/challenge/example" render={() => <Footer />} />
      <Route path="/teacher" render={() => <Footer />} />
      <Route path="/courses" render={() => <Footer />} />
      <Route path="/aboutUs" render={() => <Footer />} />

      

    </div>

  );
}


export default App;
