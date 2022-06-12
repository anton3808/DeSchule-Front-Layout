import React, {useState} from 'react';
import s from './Footer.module.css';//підключення стилів як модуль (якобєкт з ключом назви класа і значенням нового класа)
import {BrowserRouter, Route} from "react-router-dom";
import stoneBottomPartPage from '../../assets/images/stoneBottomPartPage.png';


const Footer = (props) => {




  return (
    
    <footer className={s.footer}>
      <h1 className={s.deschuleTitle}>DESCHULE</h1>
      <img src={stoneBottomPartPage} className={s.stoneBottomPartPage} />
    </footer>
  );

}

export default Footer;