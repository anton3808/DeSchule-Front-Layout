import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import stoneDownTitle from '../../../../assets/images/stoneDownTitle.png';
import volumeDialogIcon from '../../../../../assets/images/volumeDialogIcon.png';
import checkDialogIcon from '../../../../../assets/images/checkDialogIcon.png';
import checkDialogPhoto from '../../../../../assets/images/checkDialogPhoto.png';
import checkDialogButtonPhoto from '../../../../../assets/images/checkDialogButtonPhoto.png';


const FooterLesson = (props) => {


  return (
    <div>
        <div className={s.blockCheckDialog}>
            <div className={s.titleHeader}>
                <img src={checkDialogIcon} className={s.checkDialogIcon} alt="" />
                <h2>Переклад діалогу</h2>
            </div>

            <div className={s.wrapperCheckDialogContent}>
                <div>
                    <p className={s.titleHeaderText} >У попередньому уроці ти вивчав діалог. Давай згадаємо його! 
                    У вікні нижче наведений текст українською - твоє завдання вголос перекласти його німецькою!</p>

                    <img src={checkDialogPhoto} className={s.checkDialogPhoto} alt="" />
                </div>

                <div className={s.wrapperFrameDialogContent}>
                    <div className={s.frameDialogContent}>
                        <div className={s.wordsDialogLeftWrapper}>
                            <span className={s.wordsDialog}>Доброго дня!</span>
                        </div>

                        <div className={s.wordsDialogRightWrapper}>
                            <span className={s.wordsDialog}>Guten Tag!</span>
                        </div>
                        
                        <div className={s.wordsDialogLeftWrapper}>
                            <span className={s.wordsDialog}>Як тебе звати?</span>
                        </div>
                        <div className={s.wordsDialogRightWrapper}>
                            <span className={s.wordsDialog}>Wie heißt du?</span>
                        </div>
                        
                        <div className={s.wordsDialogLeftWrapper}>
                            <span className={s.wordsDialog}>Я Мартіна. Як тобі в Мюнхені?</span>
                        </div>
                        <div className={s.currentWordsWrapper}>
                            <span className={s.currentWords}>Ich bin Martina. Wie geht´s in München?</span>
                        </div>
                    </div>


                    <div className={s.checkDialogFooter}>                    
                        <span className={s.checkDialogPagination}><span>4</span> з 10</span>

                        <div className={s.checkDialogButton}>
                            <img src={checkDialogButtonPhoto} alt="" />
                            <span>Перевірити себе!</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        <div className={s.blockCheckDialog}>
            <div className={s.titleHeader}>
                <img src={checkDialogIcon} className={s.checkDialogIcon} alt="" />
                <h2>Переклад діалогу</h2>
            </div>

            <div className={s.wrapperCheckDialogContent}>
                <div>
                    <div className={s.checkDialogTitle}>
                        <p className={s.titleHeaderText} >Гарна робота! <br />
                        А тепер прослухай текст ще раз та передивись репліки, з якими виникали труднощі!</p>

                        <img src={volumeDialogIcon} className={s.volumeDialogIcon} alt="" />
                    </div>
                    

                    <img src={checkDialogPhoto} className={s.checkDialogPhoto} alt="" />
                </div>

                <div className={s.wrapperFrameDialogContent}>
                    <div className={s.frameDialogContent}>
                        <div className={s.wordsDialogLeftWrapper}>
                            <span className={s.wordsDialog}>Guten Tag!</span>
                        </div>
                        <div className={s.wordsDialogRightWrapper}>
                            <span className={s.wordsDialog}>Guten Tag!</span>
                        </div>
                        
                        <div className={s.wordsDialogLeftWrapper}>
                            <span className={s.wordsDialog}>Wie heißt du?</span>
                        </div>
                        <div className={s.currentWordsWrapper}>
                            <span className={s.currentWords}>Ich heiße Michael. Und du?</span>
                        </div> 

                        <div className={s.wordsDialogLeftWrapper}>
                            <span className={s.wordsDialog}>Ich bin Martina. Wie geht’s dir in München?</span>
                        </div>
                        <div className={s.wordsDialogRightWrapper}>
                            <span className={s.wordsDialog}>Danke, gut. Bist du auch aus Kiew?</span>
                        </div>                       
                    </div>


                    <div className={s.checkDialogFooter}>                    
                        <span className={s.checkDialogPagination}><span>6</span> з 10</span>

                        <div className={s.checkDialogButton}>
                            <img src={checkDialogButtonPhoto} alt="" />
                            <span>Перевірити себе!</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    </div>

  )
}


export default FooterLesson;