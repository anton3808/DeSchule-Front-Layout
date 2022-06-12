import React, {useEffect} from 'react';
import s from './PageOfTestToDetermineLevel.module.css';
import {NavLink, Route, useLocation} from "react-router-dom";

import uderlineStartTest from '../../../../assets/images/StartPage/testBtn-Underline.svg';
import testPhoto_1 from '../../../../assets/images/StartPage/testPhoto_1.png';
import testPhoto_2 from '../../../../assets/images/StartPage/testPhoto_2.png';
import testPhoto_3 from '../../../../assets/images/StartPage/testPhoto_3.png';

import btnTest_Finish from '../../../../assets/images/StartPage/btnTest_Finish.svg';

import HeaderStartPage from '../../HeaderStartPage/HeaderStartPage';
import FooterStartPage from '../../FooterStartPage/FooterStartPage';
import ModalRegAuth from '../../../ModalRegAuth/ModalRegAuth';


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



const PageOfTestToDetermineLevel = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);


  const [resultOfTestModalIsOpen, setResultOfTestModalIsOpen] = React.useState(false);

  let openResultOfTestModal = () => {
    setResultOfTestModalIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  let closeResultOfTestModal = () => {
    setResultOfTestModalIsOpen(false);
    document.body.style.overflow = 'unset';
  }
  
        
  return (
    
    <div className={s.PageOfTestToDetermineLevel}>
      
      <HeaderStartPage />

      <div id={'aboutTest'} className={s.blockAboutTest}>
        <h3>Тест для визначення рівня</h3>

        <img className={s.uderlineStartTest} src={uderlineStartTest} />

        <div className={s.blockAboutTestText}>
          <div>
            <p>Пройдіть безкоштовний швидкий тест для визначення рівня володіння мовою.</p>
            <p>Результати оцінювання ви отримаєте одразу після завершення тесту.</p>
          </div>
          
          <div>
            <p>Тест складається з 10 питань з можливістю обрати одну з запропонованих відповідей.</p>
            <p>Також після завершення тестування, у вас буде можливість отримати результати на вашу особисту електронну адресу.</p>
          </div>
        </div>
      </div>


      <div className={s.taskOfTestWrapper}>
        <div className={s.taskOfTest}>
          <h3>1. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint?</h3>
          
          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_first" id="first" />
              <span className={s.checkmark}></span>
            </label>
            <label for="first">2 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_first" id="second" />
              <span className={s.checkmark}></span>
            </label>
            <label for="second">3 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_first" id="third" />
              <span className={s.checkmark}></span>
            </label>
            <label for="third">4 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_first" id="foth" />
              <span className={s.checkmark}></span>
            </label>
            <label for="foth">5 рази на тиждень</label>
          </div>
          
        </div>

        <img src={testPhoto_1} alt="" />
      </div>

      <div className={s.taskOfTestWrapper}>
        <img src={testPhoto_2} alt="" />

        <div className={s.taskOfTest}>
          <h3>2. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint?</h3>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_second" id="first_2" />
              <span className={s.checkmark}></span>
            </label>
            <label for="first_2">2 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_second" id="second_2" />
              <span className={s.checkmark}></span>
            </label>
            <label for="second_2">3 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_second" id="third_2" />
              <span className={s.checkmark}></span>
            </label>
            <label for="third_2">4 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_second" id="foth_3" />
              <span className={s.checkmark}></span>
            </label>
            <label for="foth_3">5 рази на тиждень</label>
          </div>

        </div>
      </div>

      <div className={s.taskOfTestWrapper}>
        <div className={s.taskOfTest}>
          <h3>3. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint?</h3>

          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_third" id="first_3" />
              <span className={s.checkmark}></span>
            </label>
            <label for="first_3">2 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_third" id="second_3" />
              <span className={s.checkmark}></span>
            </label>
            <label for="second_3">3 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_third" id="third_3" />
              <span className={s.checkmark}></span>
            </label>
            <label for="third_3">4 рази на тиждень</label>
          </div>


          <div>
            <label className={s.custom_radio_btn}>
              <input type="radio" name="task_third" id="foth_4" />
              <span className={s.checkmark}></span>
            </label>
            <label for="foth_4">5 рази на тиждень</label>
          </div>

        </div>

        <img src={testPhoto_3} alt="" />
      </div>


      <div className={s.btnTestFinish} onClick={openResultOfTestModal}>
        <img src={btnTest_Finish} />
        <span>Завершити</span>
      </div>


      <ModalRegAuth
          type='resultOfTest'
          isOpen={resultOfTestModalIsOpen}
          // onAfterOpen={afterOpenRegistrationForm}
          onRequestClose={closeResultOfTestModal}
          style={customStyles}
          contentLabel="Example Modal"
          // funcClick={onReg}
        />



      <FooterStartPage />
      
    </div>
  );

}


export default PageOfTestToDetermineLevel;