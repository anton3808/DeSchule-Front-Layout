import React from 'react';
import s from '../StartPage.module.css';
import { NavLink, Route, useHistory } from "react-router-dom";
import Modal from 'react-modal';

import btnPackagesBuy from '../../../assets/images/StartPage/btnPackages-Buy.svg';

import uderlineStartTest from '../../../assets/images/StartPage/testBtn-Underline.svg';

import checkMark from '../../../assets/images/StartPage/checkMark.svg';
import cancelMark from '../../../assets/images/StartPage/cancelMark.svg';
import lockForDisablePoints from '../../../assets/images/StartPage/lockForDisablePoints.svg';
import sherlokGetFreePhoto from '../../../assets/images/StartPage/sherlokGetFreePhoto.png';
import stoneBackgroundGetFree from '../../../assets/images/StartPage/stoneBackgroundGetFree.svg';
import cloudsOfFreePackage from '../../../assets/images/StartPage/cloudsOfFreePackage.svg';
import btnFreePackage from '../../../assets/images/StartPage/btnFreePackage.svg';
import underlineTextInCloud from '../../../assets/images/StartPage/underlineTextInCloud.svg';




import mainPhotoOfHomeAlone from '../../../assets/images/StartPage/mainPhotoOfHomeAlone2.png';
import mainPhotoOfGuardiansOfTheGalaxy from '../../../assets/images/StartPage/mainPhotoOfGuardiansOfTheGalaxy2.png';




import btnBanner from '../../../assets/images/StartPage/bannerBtn-StartStudy.svg';
import ModalRegAuth from '../../ModalRegAuth/ModalRegAuth';
import { Link } from 'react-router-dom';



const customStyles = {
  overlay: {
    position: 'fixed',
    overflow: 'auto',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    zIndex: '9999',
    
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '1px solid #875897',
    background: '#fff',
    overflowY: 'auto',
    // height: "100%",
    WebkitOverflowScrolling: 'touch',
    borderRadius: '30px',
    outline: 'none',
    padding: '40px',
    zIndex: '9999'
  },
};




const PackagesOfCourse = () => {


  const history = useHistory()

  
  let subtitle;
  const [registrationFormIsOpen, setRegistrationFormIsOpen] = React.useState(false);


  let openRegistrationForm = () => {
    setRegistrationFormIsOpen(true);
    document.body.style.overflow = 'hidden';
  }



  let afterOpenRegistrationForm = () => {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }



  let closeRegistrationForm = () => {
    setRegistrationFormIsOpen(false);
    document.body.style.overflow = 'unset';
  }

  const onReg = (name, phone) => {
    localStorage.setItem('auth', 2)
    localStorage.setItem('name', name)
    // localStorage.setItem('surname', surname)
    localStorage.setItem('phone', phone)

    history.push('/cabinet')
    // console.log('click reg', name, phone);
  }


  
        
  return (
    
    <div id={'packagesOfCourse'} className={s.packagesOfCourseWrapper}>

      <h3>Пакети нашого курсу</h3>
      <img className={s.uderlinePackages} src={uderlineStartTest} />


      <div className={s.mainPackagesOfCourse}>
        <div className={s.packageHomeAlone}>

          <div className={s.packageHomeAlonePhoto}>
            <img src={mainPhotoOfHomeAlone} />

            <div className={s.packageHomeAlonePhotoText}>
              <h3>Тариф “Сам у дома”</h3>
              <h4> <span className={s.priceForPackage}>3 800 грн</span> <span className={s.perMonthOfPackage}>/ місяць</span> </h4>
            </div>
          </div>

          <div className={s.packageHomeAloneMainText}>
            <h4>Для самостійного вивчення німецької мови від А1-С1 з власним зручним графіком. Ви отримуєте:</h4>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>доступ до всіх матеріалів для вивчення</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>автоматична перевірка завдань</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>зворотній зв’язок до вправ</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>оцінка прогресу</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>сертифікація кожного рівня</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>унікальна система мотивації</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>персоналізований план</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>загальна спільнота у Telegram</span>
            </div>



            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
              <img src={cancelMark} />
              <span>закрита спільнота для “Вартових галактики” у Telegram</span>
            </div>

            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
              <img src={cancelMark} />
              <span>тижневий марафон “Говоріння”</span>
            </div>

            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
              <img src={cancelMark} />
              <span>розділ “Мій ментор”</span>
            </div>

            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
              <img src={cancelMark} />
              <span>перевірка творчих завдань та говоріння</span>
            </div>

            <div className={`${s.pointsOfPackage} ${s.disablePointsOfPackage}`}>
              <img src={cancelMark} />
              <span>індивідуальні консультації ментора: 7 годин в місяць</span>
            </div>


            <div className={s.lockForDisablePoints}>
              <img src={lockForDisablePoints} />
              <span>Доступно у тарифі “Вартові галактики”</span>
            </div> 
            
          </div>


          
          <Link to={{ 
              pathname:'/buying-main-course', 
              state: {
                homeAlonePackage: true
              } 
            }}>

            <div className={s.btnPackagesBuy}>
              <img src={btnPackagesBuy} />
              <span>Купити</span>
            </div>
          </Link> 
          
          
{/* 
          <NavLink to='/buying-main-course'>
            <div className={s.btnPackagesBuy}>
              <img src={btnPackagesBuy} />
              <span>Купити</span>
            </div>
          </NavLink> */}


        </div>


        <div className={s.packageGuardiansOfTheGalaxy}>

          <div className={s.packageGuardiansOfTheGalaxyPhoto}>
            <img src={mainPhotoOfGuardiansOfTheGalaxy} />

            <div className={s.packageGuardiansOfTheGalaxyPhotoText}>
              <h3>Тариф “Стражі галактики”</h3>
              <h4> <span className={s.priceForPackage}>5 800 грн</span> <span className={s.perMonthOfPackage}>/ місяць</span> </h4>
            </div>
          </div>

          <div className={s.packageGuardiansOfTheGalaxyMainText}>
            <h4>Для самостійного вивчення німецької мови від А1-С1 з власним зручним графіком. Ви отримуєте:</h4>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>доступ до всіх матеріалів для вивчення</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>автоматична перевірка завдань</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>зворотній зв’язок до вправ</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>оцінка прогресу</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>сертифікація кожного рівня</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>унікальна система мотивації</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>персоналізований план</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>загальна спільнота у Telegram</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>закрита спільнота для “Вартових галактики” у Telegram</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>тижневий марафон “Говоріння”</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>розділ “Мій ментор”</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>перевірка творчих завдань та говоріння</span>
            </div>

            <div className={s.pointsOfPackage}>
              <img src={checkMark} />
              <span>індивідуальні консультації ментора: 7 годин в місяць</span>
            </div>
            
          </div>


          

          <Link to={{ 
              pathname:'/buying-main-course', 
              state: {
                guardiansOfTheGalaxyPackage: true
              } 
            }}>

            <div className={s.btnPackagesBuy}>
              <img src={btnPackagesBuy} />
              <span>Купити</span>
            </div>
          </Link> 

        </div>
      </div>



      <div className={s.getFreePackage}>

        <div className={s.partLeft_FreePackage}>
          <img className={s.sherlokGetFreePhoto} src={sherlokGetFreePhoto}  />
          <img className={s.stoneBackgroundGetFree} src={stoneBackgroundGetFree} />
        </div>
        
        <div className={s.partRight_FreePackage}>
          <img className={s.cloudsOfFreePackage} src={cloudsOfFreePackage} />

          <div className={s.textInCloud}>
            <h4>Невпевнені, який пакет обрати?</h4>
            <img src={underlineTextInCloud} />
          </div>
          

          <h5>Затестіть 5 безкоштовних уроків та додатковий курс</h5>

          <div className={s.btnPackagesBuy} onClick={openRegistrationForm}>
            <img src={btnFreePackage} />
            <span>Вперед</span>
          </div>

          <ModalRegAuth
            type='fastReg'
            isOpen={registrationFormIsOpen}
            onAfterOpen={afterOpenRegistrationForm}
            onRequestClose={closeRegistrationForm}
            style={customStyles}
            contentLabel="Example Modal"
            funcClick={onReg}
          />
        </div>
        
      </div>


      
    </div>
  );

}


export default PackagesOfCourse;