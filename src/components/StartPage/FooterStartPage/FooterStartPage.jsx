import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";
import dragon from '../../../assets/images/Dragon.png';
import instagramFooter from '../../../assets/images/instagramFooter.png';
import facebookFooter from '../../../assets/images/facebookFooter.png';


const FooterStartPage = () => {
  
        
            
        
  return (
    
    <div className={s.footer}>

      <div className={s.logo}>
        <img src={ dragon }  />
        <div>
          <h3>eSchule</h3>
          <span>Онлайн школа іноземних мов</span>
        </div>
        
      </div>


      <div className={s.infoFooter}>
        <span>+38 (096) - 017 - 54 - 70</span>
        <span>deschule@gmail.com</span>
      </div>


      <div className={s.socialNetworks}>
        <img src={instagramFooter} />
        <img src={facebookFooter} />
      </div>

    </div>
  );

}


export default FooterStartPage;