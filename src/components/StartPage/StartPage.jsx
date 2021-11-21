import React from 'react';
import s from './StartPage.module.css';
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
import HeaderStartPage from './HeaderStartPage/HeaderStartPage';
import BannerStartPage from './BannerStartPage/BannerStartPage';
import FirstFormStartPage from './FirstFormStartPage/FirstFormStartPage';
import SecondFormStartPage from './SecondFormStartPage/SecondFormStartPage';
import FooterStartPage from './FooterStartPage/FooterStartPage';
import WhyWe from './WhyWe/WhyWe';
import UniqueTechnique from './UniqueTechnique/UniqueTechnique';
import StudyByTravelling from './StudyByTravelling/StudyByTravelling';




const StartPage = (props) => {
  
  return (
    
    <div className={s.wrapperStartPage}>

      <HeaderStartPage/>

      <BannerStartPage/>

      <WhyWe />

      <UniqueTechnique />

      <FirstFormStartPage />

      <StudyByTravelling />

      <SecondFormStartPage />

      <FooterStartPage />
      

    </div>
    
  );

}


export default StartPage;