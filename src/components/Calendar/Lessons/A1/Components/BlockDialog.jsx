import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import blockDialogManPhoto from '../../../../../assets/images/blockDialogManPhoto.png';
import blockDialogWomanPhoto from '../../../../../assets/images/blockDialogWomanPhoto.png';
import volumeDialogIcon from '../../../../../assets/images/volumeDialogIcon.png';
    
import blockDialogMutedVolume from '../../../../../assets/images/blockDialogMutedVolume.png';
import dialogFinalViewArrowBack from '../../../../../assets/images/dialogFinalViewArrowBack.png';
import dialogFinalViewButton from '../../../../../assets/images/dialogFinalViewButton.png';


const BlockDialog = (props) => {


  return (
    <div>
        <div className={s.blockDialog}>
            <img src={blockDialogManPhoto} className={s.blockDialogManPhoto} alt="" />
            <img src={blockDialogWomanPhoto} className={s.blockDialogWomanPhoto} alt="" />

            <h2>Діалог. Самостійно обирай хід розмови</h2>

            <div className={s.volumeDialohBlock}>
                <img src={volumeDialogIcon} className={s.volumeDialogIcon} alt="" />
            </div>

            <div className={s.frameDialogContent}>
                <div className={s.wordsFirstSpeakerWrapper}>
                    <span className={s.wordsFirstSpeaker}>Guten Tag!</span>
                </div>
                <div className={s.wordsSecondSpeakerWrapper}>
                    <span className={s.wordsSecondSpeaker}>Guten Tag!</span>
                </div>

                <div className={s.wordsFirstSpeakerWrapper}>
                    <span className={s.wordsFirstSpeaker}>Wie heißt du?</span>
                </div>
                <div className={s.wordsSecondSpeakerWrapper}>
                    <span className={s.wordsSecondSpeaker}>Ich heiße Michael. Und du?</span>
                </div>

                <div className={s.wordsFirstSpeakerWrapper}>
                    <span className={s.wordsFirstSpeaker}>Ich bin Martina. Wie geht’s dir in München?</span>
                </div>
                <div className={s.wordsSecondSpeakerWrapper}>
                    <span className={s.wordsSecondSpeaker}>Danke, gut. Bist du auch aus Kiew?</span>
                </div>
                
                <div className={s.wordsFirstSpeakerWrapper}>
                    <span className={s.wordsFirstSpeaker}>Ja.</span>
                </div>
                <div className={s.continueWrapper}>
                    <span className={s.continue}>...</span>
                </div>
            </div>

            <div className={s.selectNextWords}>
                <span className={s.nextWordFirst}>Und was bist du von Beruf?</span>
                <span className={s.nextWordSecond}>Guten Tag!</span>
                <span className={s.nextWordThird}>Ich heiße Michael. Und du?</span>
            </div>

        </div>






        <div className={s.blockDialogFinalView}>
            <h2>Діалог. Самостійно обирай хід розмови</h2>
            
            <img src={blockDialogMutedVolume} className={s.blockDialogMutedVolume} alt="" />

            <div className={s.wrapperFrameDialogFinalViewContent}>
                <div className={s.frameDialogFinalViewDeutsch} id={s.scrollDialogFrame}>
                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Guten Tag!</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Guten Tag!</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Wie heißt du?</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Ich heiße Michael. Und du?</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Ich bin Martina. Wie geht’s dir in München?</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Danke, gut. Bist du auch aus Kiew?</span>
                    </div>
                    
                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Ja.</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Und was bist du von Beruf?</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Guten Tag!</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Guten Tag!</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Wie heißt du?</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Ich heiße Michael. Und du?</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Ich bin Martina. Wie geht’s dir in München?</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Danke, gut. Bist du auch aus Kiew?</span>
                    </div>
                    
                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Ja.</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Und was bist du von Beruf?</span>
                    </div>

                    <div class={s.forceOverflow}></div>
                </div>

                <div className={s.frameDialogFinalViewTranslate} id={s.scrollDialogFrame}>
                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Доброго дня!</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Доброго дня!</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Як тебе звати?</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Мене звати Михайло, а тебе?</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Я Мартіна. Як тобі в Мюнхені?</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Спасибі, добре. Ти також з Києва?</span>
                    </div>
                    
                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Так.</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>А хто ти за професією?</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Доброго дня!</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Доброго дня!</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Як тебе звати?</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Мене звати Михайло, а тебе?</span>
                    </div>

                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Я Мартіна. Як тобі в Мюнхені?</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>Спасибі, добре. Ти також з Києва?</span>
                    </div>
                    
                    <div className={s.wordsFirstSpeakerWrapper}>
                        <span className={s.wordsFirstSpeaker}>Так.</span>
                    </div>
                    <div className={s.wordsSecondSpeakerWrapper}>
                        <span className={s.wordsSecondSpeaker}>А хто ти за професією?</span>
                    </div>
                </div>
            </div>


            <div className={s.dialogFinalViewFooter}>
                <div className={s.dialogFinalViewFooterPagination}>
                    <img src={dialogFinalViewArrowBack} className={s.dialogFinalViewArrowBack} alt="" />
                    <span>Змінити відповіді діалогу</span>
                </div>
                <div className={s.dialogFinalViewButton}>
                    <span>Завершити  діалог</span>
                    <img src={dialogFinalViewButton} className={s.dialogFinalViewButtonPhoto} alt="" />
                </div>
                
            </div>
        </div>
    </div>

  )
}


export default BlockDialog;