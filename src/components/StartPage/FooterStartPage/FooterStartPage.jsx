import React from 'react';
import s from '../StartPage.module.css';
import dragon from '../../../assets/images/Dragon.png';


import footerYoutubeIcon from '../../../assets/images/StartPage/footerYoutubeIcon.svg';
import footerInstagramIcon from '../../../assets/images/StartPage/footerInstagramIcon.svg';
import footerFacebookIcon from '../../../assets/images/StartPage/footerFacebookIcon.svg';

import footerPhoneIcon from '../../../assets/images/StartPage/footerPhoneIcon.svg';
import footerMailIcon from '../../../assets/images/StartPage/footerMailIcon.svg';


import { Link } from 'react-scroll';

const FooterStartPage = () => {
  
        
            
        
  return (
    
    <div className={s.footer}>

      <div className={s.footerTopPart}>
        <div className={s.footerLogoWrapper}>
          <div className={s.logo}>
            <img src={ dragon }  />
            <div>
              <h3>eSchule</h3>
              <span>Онлайн школа іноземних мов</span>
            </div>
          </div>

          <nav>
            <Link className={s.footerLinkMenu} activeClassName={s.activeLink} to='about' smooth={true} duration={1000}>Курс</Link>
            <Link className={s.footerLinkMenu} to='course' smooth={true} duration={1000}>Безкоштовний тест</Link>
            <Link className={s.footerLinkMenu} to='reviews' smooth={true} duration={1000}>Додаткові курси</Link>
            <Link className={s.footerLinkMenu} to='reviews' smooth={true} duration={1000}>Відгуки</Link>
          </nav>
        </div>
        

        <div className={s.footerContactWrapper}>
          <h2>Entfesseln Sie Ihr volles Potenzial</h2>

          <div className={s.infoFooterWrapper}>
            <div className={s.contactIntoFooter}>
              <div className={s.footerPhone}>
                <img src={footerPhoneIcon} />
                <span>+38 (096) - 017 - 54 - 70</span>
              </div>
              
              <div>
                <img src={footerMailIcon} />
                <span>deschule@gmail.com</span>
              </div>
            </div>

            <div className={s.socialNetworksFooter}>
              <div>
                <img src={footerYoutubeIcon} />
              </div>

              <div>
                <img src={footerInstagramIcon} />
              </div>

              <div>
                <img src={footerFacebookIcon} />
              </div>
            </div>
          </div>
          
        </div>
      </div>



      <div  className={s.footerBottomPart}>
        <span>Privacy police © Deschule — All Rights Reserved.</span>
      </div>
      

      


      


      

    </div>
  );

}


export default FooterStartPage;