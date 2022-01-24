import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import vocabularyCurrentPhoto from '../../../../../assets/images/vocabularyCurrentPhoto.png';
import circleVocabulary from '../../../../../assets/images/circleVocabulary.png';
import volumeCurrentWord from '../../../../../assets/images/volumeCurrentWord.png';
import plusCurrentWord from '../../../../../assets/images/plusCurrentWord.png';
import minusCurrentWord from '../../../../../assets/images/minusCurrentWord.png';


const BlockVocabulary = (props) => {


  return (
    <div className={s.blockVocabulary}>

            <h3>Оберіть слова для вивчення:</h3>
            
            <img src={vocabularyCurrentPhoto} className={s.vocabularyCurrentPhoto} alt="" />
            <img src={circleVocabulary} className={s.circleVocabulary} alt="" />
            
            <div className={s.contentVocabulary}>
                <div className={s.currentWord}>
                    <img src={volumeCurrentWord} className={s.volumeCurrentWord} alt="" />

                    <span className={s.inGermanCurrentWord}>du</span>
                    <span className={s.inUkraineCurrentWord}>ти</span>

                    <span className={s.currentWordButtons}>
                        <img src={minusCurrentWord} className={s.minusCurrentWord} alt="" />
                        <img src={plusCurrentWord} className={s.plusCurrentWord} alt="" />
                    </span> 
                </div>

                <div className={s.currentWordBackground}>

                </div>
                    
                <div className={s.listWords} id={s.scrollListWordsFrame}>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>er/sie/es</span>
                        <span className={s.inUkraineWord}>ВІН/ВОНА/ВОНО</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>Wir</span>
                        <span className={s.inUkraineWord}>Ми</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>Ihr</span>
                        <span className={s.inUkraineWord}>Ви</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>er/sie/es</span>
                        <span className={s.inUkraineWord}>ВІН/ВОНА/ВОНО</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>Wir</span>
                        <span className={s.inUkraineWord}>Ми</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>Ihr</span>
                        <span className={s.inUkraineWord}>Ви</span>
                    </div>

                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>er/sie/es</span>
                        <span className={s.inUkraineWord}>ВІН/ВОНА/ВОНО</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>Wir</span>
                        <span className={s.inUkraineWord}>Ми</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>Ihr</span>
                        <span className={s.inUkraineWord}>Ви</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>er/sie/es</span>
                        <span className={s.inUkraineWord}>ВІН/ВОНА/ВОНО</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>Wir</span>
                        <span className={s.inUkraineWord}>Ми</span>
                    </div>
                    <div className={s.wordInVocabulary}>
                        <span className={s.inGermanWord}>Ihr</span>
                        <span className={s.inUkraineWord}>Ви</span>
                    </div>
                </div>

            </div>
        </div>

  )
}


export default BlockVocabulary;