import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import stoneDownTitle from '../../../../../assets/images/stoneDownTitle.png';


const FooterLesson = (props) => {


  return (
    <footer>
        <h1 className={s.deschuleTitle}>DESCHULE</h1>
        <img src={stoneDownTitle} className={s.stoneDownTitle}/>
    </footer>

  )
}


export default FooterLesson;