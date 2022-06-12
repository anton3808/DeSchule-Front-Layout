import React, {useState} from 'react';
import s from './Header.module.css';//підключення стилів як модуль (якобєкт з ключом назви класа і значенням нового класа)
import {BrowserRouter, Route} from "react-router-dom";
import dictionary from '../../assets/images/dictionary.png';
import bell from '../../assets/images/bell.svg';
import photo_user from '../../assets/images/photo_user.png';
import Modal from 'react-modal';

import btnBanner from '../../assets/images/btnBanner.png';
import close_icon from '../../assets/images/close.svg';
import iconAddPhoto from '../../assets/images/iconAddPhoto.svg';
import vocabularyModelPlus from '../../assets/images/vocabularyModelPlus.png';
import vocabularAddNewWordButton from '../../assets/images/vocabularAddNewWordButton.png';

import searchNewsButtonPhoto from '../../assets/images/searchNewsButtonPhoto.png';


import photoVocabularyWord_1 from '../../assets/images/photoVocabularyWord_1.png';
import photoVocabularyWord_2 from '../../assets/images/photoVocabularyWord_2.png';
import photoVocabularyWord_3 from '../../assets/images/photoVocabularyWord_3.png';
import photoVocabularyWord_4 from '../../assets/images/photoVocabularyWord_4.png';

import DT_Icon from '../../assets/images/StartPage/DT_Icon.svg';



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    width: '800px',
    height: '85%',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: '50px',
    background: '#E7E7E7',
    
  },
};



const Header = (props) => {


  let today = new Date();
  
  var month;
  var dayOfWeek;
  
  switch (parseInt(today.getMonth()+1)) {
      case 1:   
        month = "Січня";
        break
      case 2:   
        month = "Лютого";
        break
      case 3: 
        month = "Березня";
        break
      case 4: 
        month = "Квітня";
        break
      case 5: 
        month = "Травня";
        break
      case 6: 
        month = "Червня";
        break
      case 7: 
        month = "Липня";
        break
      case 8: 
        month = "Серпня";
        break
      case 9: 
        month = "Вересня";
        break
      case 10: 
        month = "Жовтня";
        break
      case 11: 
        month = "Листопада";
        break
      case 12:  
        month = "Грудня";
        break
      default:      
        month = "Січня";
    }




    switch (today.getDay()) {
      case 0:
          dayOfWeek = "Неділя";
          break;
      case 1:
          dayOfWeek = "Понеділок";
          break;
      case 2:
          dayOfWeek = "Вівторок";
          break;
      case 3:
          dayOfWeek = "Середа";
          break;
      case 4:
          dayOfWeek = "Четверг";
          break;
      case 5:
          dayOfWeek = "П'ятниця";
          break;
      case 6:
          dayOfWeek = "Субота";
      }  

  let date = today.getDate() + "-"+ parseInt(today.getMonth()+1) +"-"+today.getFullYear();

  var currentWeekDay = today.getDay();






  let subtitle;

  const [vocabularyModalWindowIsOpen, setVocabularyModalWindowIsOpen] = React.useState(false);

  let openVocabularyModalWindow = () => {
    setVocabularyModalWindowIsOpen(true);
    // alert('Hello');
  }

  let afterOpenVocabularyModalWindow = () => {
    subtitle.style.color = '#f00';
  }

  let closeVocabularyModalWindow = () => {
    setVocabularyModalWindowIsOpen(false);
  }


  return (

    
    <header className={s.header}>


      <div className={s.header_menu_wrapper}>

        <Route path="/calendar/a1/lesson_1" render={ () => <span className={s.currentPage}>Урок 1</span> } /> 
        <Route path="/calendar/a1/lesson_2" render={ () => <span className={s.currentPage}>Урок 2</span> } /> 
        <Route path="/calendar/a1/lesson_3" render={ () => <span className={s.currentPage}>Урок 3</span> } /> 

        <Route path="/cabinet" render={ () => <span className={s.currentPage}>Особистий кабінет</span> } /> {/* :userId - параметр з урл адреса, ? - етот знак сообщает что етот параметр не обязательний*/}
        <Route exact path="/calendar" render={ () => <span className={s.currentPage}>Календар</span> } />
        <Route path="/news" render={ () => <span className={s.currentPage}>Новини</span> } />
        <Route exact path="/challenge" render={ () => <span className={s.currentPage}>Daily challenge</span> } />
        <Route path="/challenge/example" render={ () => <span className={s.currentPage}>Challenge Example</span> } />
        <Route path="/teacher" render={ () => <span className={s.currentPage}>Вчитель</span> } />
        <Route path="/courses" render={ () => <span className={s.currentPage}>Курси</span> } />
        <Route path="/aboutUs" render={ () => <span className={s.currentPage}>Про нас</span> } />


        <div className={s.header_menu}>

          <div className={s.time}>
            <span>{dayOfWeek}, <span className={s.dateToday}>{today.getDate()} {month} {today.getFullYear()}</span></span>
          </div>

          <div className={s.countsOfDT}>
            <img src={DT_Icon} alt="" />
            <span>100 DT</span>
          </div>
        

          <img onClick={openVocabularyModalWindow} className={s.dictionary_img} src={ dictionary }  />

          {/* let subtitle;
          const [vocabularyModalWindowIsOpen, setVocabularyModalWindowIsOpen] = React.useState(false);

          let openVocabularyModalWindow = () => {
            setVocabularyModalWindowIsOpen(true);
          }

          let afterOpenVocabularyModalWindow = () => {
            // references are now sync'd and can be accessed.
            subtitle.style.color = '#f00';
          }

          let closeVocabularyModalWindow = () => {
            setVocabularyModalWindowIsOpen(false);
          } */}

          <Modal
            isOpen={vocabularyModalWindowIsOpen}
            onAfterOpen={afterOpenVocabularyModalWindow}
            onRequestClose={closeVocabularyModalWindow}
            style={customStyles}
            contentLabel="Example Modal"
          >
             <div className={s.modal_wrapper}>
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}><span> Словник /</span> Wörterbuch</h2>

                <img onClick={closeVocabularyModalWindow} src={close_icon} className={s.close_icon}></img>

                <div className={s.vocabularyModalWrapper}>

                  <div className={s.vocabularyModalHeader}>
                    <div className={s.searchNewsInput}>
                      <input type="text" placeholder='Введіть слово для пошуку' />
                      <div className={s.searchNewsButton}>
                        <img src={searchNewsButtonPhoto} alt="" />
                      </div>
                    </div>

                    <span>Додати нове слово</span>
                    <img src={vocabularyModelPlus} alt="" />
                  </div>

                  <div className={s.vocabularyModalAddNewWord}>
                    <div className={s.addPhotoToWord}>
                      <img src={iconAddPhoto} alt="" />
                      <span>додати фото</span>
                    </div>

                    <input type="text" placeholder='Введіть слово німецькою' />
                    <input type="text" placeholder='Введіть переклад' />

                    <img src={vocabularAddNewWordButton} className={s.vocabularAddNewWordButton} alt="" />
                  </div>


                  <div className={s.vocabularyModalListWords} id={s.scrollVocabularyModalListWords}>

                    <div className={s.vocabularyWordWrapper}>
                      <div className={s.photoVocabularyWordWrapper}>
                        <img src={photoVocabularyWord_1} className={s.photoVocabularyWord} alt="" />
                        <div className={s.topPartOfWord}></div>
                        <div className={s.bottomPartOfWord}></div>
                      </div>
                      

                      <div className={s.vocabularyWordText}>
                        <div className={s.vocabularyWordTranslation}>
                          <div className={s.vocabularyWordInGerman}>
                            <h3>Schüler</h3>
                          </div>
                          <div className={s.vocabularyWordTranslate}>
                            <h4>студент</h4>
                          </div>
                        </div>

                        <div className={s.vocabularyWordExample}>
                          <p> 
                            <span className={s.exampleInGerman}> <strong>Schüler</strong> verließen das Klassenzimmer nach Paaren </span>
                            <span className={s.translationOfTheExample}>Студенти покидали аудиторію після пар</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className={s.vocabularyWordWrapper}>
                      <div className={s.photoVocabularyWordWrapper}>
                        <img src={photoVocabularyWord_2} className={s.photoVocabularyWord} alt="" />
                        <div className={s.topPartOfWord}></div>
                        <div className={s.bottomPartOfWord}></div>
                      </div>
                      

                      <div className={s.vocabularyWordText}>
                        <div className={s.vocabularyWordTranslation}>
                          <div className={s.vocabularyWordInGerman}>
                            <h3>Schüler</h3>
                          </div>
                          <div className={s.vocabularyWordTranslate}>
                            <h4>студент</h4>
                          </div>
                        </div>

                        <div className={s.vocabularyWordExample}>
                          <p> 
                            <span className={s.exampleInGerman}> <strong>Schüler</strong> verließen das Klassenzimmer nach Paaren </span>
                            <span className={s.translationOfTheExample}>Студенти покидали аудиторію після пар</span>
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className={s.vocabularyWordWrapper}>
                      <div className={s.photoVocabularyWordWrapper}>
                        <img src={photoVocabularyWord_3} className={s.photoVocabularyWord} alt="" />
                        <div className={s.topPartOfWord}></div>
                        <div className={s.bottomPartOfWord}></div>
                      </div>
                      

                      <div className={s.vocabularyWordText}>
                        <div className={s.vocabularyWordTranslation}>
                          <div className={s.vocabularyWordInGerman}>
                            <h3>Schüler</h3>
                          </div>
                          <div className={s.vocabularyWordTranslate}>
                            <h4>студент</h4>
                          </div>
                        </div>

                        <div className={s.vocabularyWordExample}>
                          <p> 
                            <span className={s.exampleInGerman}> <strong>Schüler</strong> verließen das Klassenzimmer nach Paaren </span>
                            <span className={s.translationOfTheExample}>Студенти покидали аудиторію після пар</span>
                          </p>
                        </div>
                      </div>
                    </div>




                    <div className={s.vocabularyWordWrapper}>
                      <div className={s.photoVocabularyWordWrapper}>
                        <img src={photoVocabularyWord_4} className={s.photoVocabularyWord} alt="" />
                        <div className={s.topPartOfWord}></div>
                        <div className={s.bottomPartOfWord}></div>
                      </div>
                      

                      <div className={s.vocabularyWordText}>
                        <div className={s.vocabularyWordTranslation}>
                          <div className={s.vocabularyWordInGerman}>
                            <h3>Schüler</h3>
                          </div>
                          <div className={s.vocabularyWordTranslate}>
                            <h4>студент</h4>
                          </div>
                        </div>

                        <div className={s.vocabularyWordExample}>
                          <p> 
                            <span className={s.exampleInGerman}> <strong>Schüler</strong> verließen das Klassenzimmer nach Paaren </span>
                            <span className={s.translationOfTheExample}>Студенти покидали аудиторію після пар</span>
                          </p>
                        </div>
                      </div>
                    </div>


                    <div className={s.vocabularyWordWrapper}>
                      <div className={s.photoVocabularyWordWrapper}>
                        <img src={photoVocabularyWord_1} className={s.photoVocabularyWord} alt="" />
                        <div className={s.topPartOfWord}></div>
                        <div className={s.bottomPartOfWord}></div>
                      </div>
                      

                      <div className={s.vocabularyWordText}>
                        <div className={s.vocabularyWordTranslation}>
                          <div className={s.vocabularyWordInGerman}>
                            <h3>Schüler</h3>
                          </div>
                          <div className={s.vocabularyWordTranslate}>
                            <h4>студент</h4>
                          </div>
                        </div>

                        <div className={s.vocabularyWordExample}>
                          <p> 
                            <span className={s.exampleInGerman}> <strong>Schüler</strong> verließen das Klassenzimmer nach Paaren </span>
                            <span className={s.translationOfTheExample}>Студенти покидали аудиторію після пар</span>
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                  
                </div>

              

              </div>
          </Modal>

        
          <img className={s.bell} src={ bell }  />

          <div className={s.user_data}>
            <img className={s.photo_user} src={ photo_user }  />
            <div className={s.user_info}>
              <span className={s.name}>Андрій Андрієнко</span>
              <span className={s.status}>Вчитель</span>
            </div>
          </div>

        </div>

      </div>

      
    </header>
  );

}

//<div className={s.loginBlock}>
  //      { props.isAuth ? props.login
    //      : <NavLink to={'/login'}>Login</NavLink>
      //  }
     // </div>

export default Header;