import React from 'react';
import s from './Courses.module.css';

import searchNewsButtonPhoto from '../../assets/images/searchNewsButtonPhoto.png';
import additionalTopicsPhoto from '../../assets/images/additionalTopicsPhoto.png';
import deschuleShopItemPhoto from '../../assets/images/deschuleShopItemPhoto.png';

import stoneDownTitle from '../../assets/images/stoneDownTitle.png';
import DeschuleShop from './DeschuleShop';
import AdditionalTopics from './AdditionalTopics';
import Subscriptions from './Subscriptions';
import { NavLink, Route } from 'react-router-dom';


const Courses = (props) => {
  return (
    <div className={s.wrapperCoursesPage}>
      <div className={s.coursesPaginations}>
        <NavLink to="/courses/subscriptions" activeClassName={s.activeLink} >
          <div>Курси</div>
        </NavLink>

        <NavLink to="/courses/additional_topics" activeClassName={s.activeLink} >
          <div>Вивчення додаткових тем</div>
        </NavLink>

        <NavLink to="/courses/deschule_shop" activeClassName={s.activeLink} >
          <div>Deschule shop</div>
        </NavLink>
      </div>

      <Route path="/courses/subscriptions" render={ () => <Subscriptions /> } /> 
      <Route path="/courses/additional_topics" render={ () => <AdditionalTopics /> } /> 
      <Route path="/courses/deschule_shop" render={ () => <DeschuleShop /> } /> 
      
    </div>
  )
}


export default Courses;