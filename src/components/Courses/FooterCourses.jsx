import React from 'react';
import s from './Courses.module.css';

import stoneDownTitle from '../../assets/images/stoneDownTitle.png';


const FooterCourses = (props) => {

  return (
    <footer>
        <h1 className={s.deschuleTitle}>DESCHULE</h1>
        <img src={stoneDownTitle} className={s.stoneDownTitle}/>
    </footer>

  )
}


export default FooterCourses;