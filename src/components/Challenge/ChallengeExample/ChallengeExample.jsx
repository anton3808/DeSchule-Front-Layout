import React from 'react';
import s from '../Challenge.module.css';

import challengePhotoMan from '../../../assets/images/challengePhotoMan.png';
import DT_Icon from '../../../assets/images/StartPage/DT_Icon.svg';
import btnModal_Confirm from '../../../assets/images/btnModal_Confirm.svg';
import circleChallenge from '../../../assets/images/circleChallenge.svg';
import stoneBottomPartPage from '../../../assets/images/stoneBottomPartPage.png';
import volumeIconChallenge from '../../../assets/images/volumeIconChallenge.svg';
import finishTestOfChallenge from '../../../assets/images/finishTestOfChallenge.svg';


import characterPhoto_1 from '../../../assets/images/characterPhoto_1.svg';
import characterPhoto_2 from '../../../assets/images/characterPhoto_2.svg';
import characterPhoto_3 from '../../../assets/images/characterPhoto_3.svg';
import characterPhoto_4 from '../../../assets/images/characterPhoto_4.svg';
import characterPhoto_5 from '../../../assets/images/characterPhoto_5.svg';



const ChallengeExample = (props) => {




//   syncScroll($('.item1'), $('.item2'));

//   function syncScroll(el1, el2) {
//     var $el1 = $(el1);
//     var $el2 = $(el2);
//     var forcedScroll = false;

//     $el1.scroll(function() { performScroll($el1, $el2); });
//     $el2.scroll(function() { performScroll($el2, $el1); });

//     function performScroll($scrolled, $toScroll) {
//         if (forcedScroll) return (forcedScroll = false);
//         var percent = ($scrolled.scrollTop() / 
//         ($scrolled[0].scrollHeight - $scrolled.outerHeight())) * 100;
//         setScrollTopFromPercent($toScroll, percent);
//     }


//     function setScrollTopFromPercent($el, percent) {
//         var scrollTopPos = (percent / 100) *
//         ($el[0].scrollHeight - $el.outerHeight());
//         forcedScroll = true;
//         $el.scrollTop(scrollTopPos);
//     }
//   }


  return (
    <div className={s.wrapperChallengeExercises}>
      <div className={s.progressOfExercisesWrapper}>
        <h4>Твій прогрес</h4>

        <h4>Таймер</h4>
      </div>

      <div className={s.dialogExerciseWrapper}>
        <div className={s.dialogExercise}>
            <div className={s.phrasesOfCharacters}>
                <img src={characterPhoto_1} className={s.characterPhoto} alt="" />
                <span>Guten Tag!</span>
                <img src={volumeIconChallenge} className={s.volumeIconChallenge} alt="" />
            </div>

            <div className={s.phrasesOfCharacters}>
                <img src={characterPhoto_2} alt="" className={s.characterPhoto}/>
                <span>Guten Tag!</span>
                <img src={volumeIconChallenge} className={s.volumeIconChallenge} alt="" />
            </div>

            <div className={s.myPhrase}>
                <img src={volumeIconChallenge} className={s.volumeIconChallenge} alt="" />
                <span>Guten Tag!</span>     
            </div>

            <div className={s.phrasesOfCharacters}>
                <img src={characterPhoto_3} className={s.characterPhoto} alt="" />
                <span>Wie heißt du?</span>
                <img src={volumeIconChallenge} className={s.volumeIconChallenge} alt="" />
            </div>

            <div className={s.myPhrase}>
                <img src={volumeIconChallenge} className={s.volumeIconChallenge} alt="" />
                <span>Ich heiße Michael. Und du?</span>     
            </div>

            <div className={s.phrasesOfCharacters}>
                <img src={characterPhoto_4} className={s.characterPhoto} alt="" />
                <span>Ich bin Martina. <br /> Wie geht’s dir in München?</span>
                <img src={volumeIconChallenge} className={s.volumeIconChallenge} alt="" />
            </div>

            <div className={s.phrasesOfCharacters}>
                <img src={characterPhoto_5} className={s.characterPhoto} alt="" />
                <span>Ich bin Martina. <br /> Wie geht’s dir in München?</span>
                <img src={volumeIconChallenge} className={s.volumeIconChallenge} alt="" />
            </div>
        </div>

        <div className={s.dialogVariantsOfAnswersWrapper}>
            <h4>Обери варіант відповіді</h4>

            <div className={s.dialogVariantsOfAnswers}>
                <div className={s.dialogVariantsOfAnswerItem}>
                    <span>Danke, gut. Bist du auch aus Kiew?</span>
                    <img src={volumeIconChallenge} alt="" />
                </div>

                <div className={s.dialogVariantsOfAnswerItem}>
                    <span>Danke, gut. Bist du auch aus Kiew?</span>
                    <img src={volumeIconChallenge} alt="" />
                </div>

                <div className={s.dialogVariantsOfAnswerItem}>
                    <span>Danke, gut. Bist du auch aus Kiew?</span>
                    <img src={volumeIconChallenge} alt="" />
                </div>
            </div>

        </div>
      </div>

      <div className={s.testsWrapper}>
        <div className={s.answerOfTest}>
            <h3>1. Запитання номер 1</h3>

            <div>
                <label className={s.custom_radio_btn}>
                    <input type="radio" name="challenge_task_1" id="first" />
                    <span className={s.checkmark}></span>
                </label>
                <label for="first">2 рази на тиждень</label>
            </div>

            <div>
                <label className={s.custom_radio_btn}>
                <input type="radio" name="challenge_task_1" id="second" />
                <span className={s.checkmark}></span>
                </label>
                <label for="second">3 рази на тиждень</label>
            </div>

            <div>
                <label className={s.custom_radio_btn}>
                <input type="radio" name="challenge_task_1" id="third" />
                <span className={s.checkmark}></span>
                </label>
                <label for="third">4 рази на тиждень</label>
            </div>
        </div>

        <div className={s.answerOfTest}>
            <h3>2. Запитання номер 2</h3>

            <div>
                <label className={s.custom_radio_btn}>
                <input type="radio" name="challenge_task_1" id="first" />
                <span className={s.checkmark}></span>
                </label>
                <label for="first">2 рази на тиждень</label>
            </div>

            <div>
                <label className={s.custom_radio_btn}>
                <input type="radio" name="challenge_task_1" id="second" />
                <span className={s.checkmark}></span>
                </label>
                <label for="second">3 рази на тиждень</label>
            </div>

            <div>
                <label className={s.custom_radio_btn}>
                <input type="radio" name="challenge_task_1" id="third" />
                <span className={s.checkmark}></span>
                </label>
                <label for="third">4 рази на тиждень</label>
            </div>
        </div>

        <div className={s.answerOfTest}>
            <h3>3. Запитання номер 3</h3>

            <div>
                <label className={s.custom_radio_btn}>
                <input type="radio" name="challenge_task_1" id="first" />
                <span className={s.checkmark}></span>
                </label>
                <label for="first">2 рази на тиждень</label>
            </div>

            <div>
                <label className={s.custom_radio_btn}>
                <input type="radio" name="challenge_task_1" id="second" />
                <span className={s.checkmark}></span>
                </label>
                <label for="second">3 рази на тиждень</label>
            </div>

            <div>
                <label className={s.custom_radio_btn}>
                <input type="radio" name="challenge_task_1" id="third" />
                <span className={s.checkmark}></span>
                </label>
                <label for="third">4 рази на тиждень</label>
            </div>
        </div>

        <div className={s.btnFinishTestOfChallenge}>
            <img src={finishTestOfChallenge} alt="" />
            <span>Забрати бали</span>
        </div>
      </div>





      <div className={s.archiveResultOfChallenge}>
          <h4>ВІТАЄМО! ТИ ПРОШОВ CHALLENGE!</h4>

          <div className={s.finalArchiveDialogs}>

            <div className={s.finalArchiveDialog}>
                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_1} className={s.characterPhoto} alt="" />
                    <span>Guten Tag!</span>
                </div>

                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_2} alt="" className={s.characterPhoto}/>
                    <span>Guten Tag!</span>
                </div>

                <div className={s.myPhrase}>
                    <span>Guten Tag!</span>     
                </div>

                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_3} className={s.characterPhoto} alt="" />
                    <span>Wie heißt du?</span>
                </div>

                <div className={s.myPhrase}>
                    <span>Ich heiße Michael. Und du?</span>     
                </div>

                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_4} className={s.characterPhoto} alt="" />
                    <span>Ich bin Martina. <br /> Wie geht’s dir in München?</span>
                </div>

                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_5} className={s.characterPhoto} alt="" />
                    <span>Ich bin Martina. <br /> Wie geht’s dir in München?</span>
                </div>

            </div>

            <div className={s.finalArchiveDialog}>
                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_1} className={s.characterPhoto} alt="" />
                    <span>Guten Tag!</span>
                </div>

                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_2} alt="" className={s.characterPhoto}/>
                    <span>Guten Tag!</span>
                </div>

                <div className={s.myPhrase}>
                    <span>Guten Tag!</span>     
                </div>

                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_3} className={s.characterPhoto} alt="" />
                    <span>Wie heißt du?</span>
                </div>

                <div className={s.myPhrase}>
                    <span>Ich heiße Michael. Und du?</span>     
                </div>

                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_4} className={s.characterPhoto} alt="" />
                    <span>Ich bin Martina. <br /> Wie geht’s dir in München?</span>
                </div>

                <div className={s.phrasesOfCharacters}>
                    <img src={characterPhoto_5} className={s.characterPhoto} alt="" />
                    <span>Ich bin Martina. <br /> Wie geht’s dir in München?</span>
                </div>

            </div>
          </div>


          <div className={s.resultsOfExersice}>
            <div className={s.resultInInterestRate}>
                <h5>Кількість правильних відповідей:</h5>
                <span>90%</span>
            </div>

            <div className={s.resultInDT}>
                <h5>Кількість зароблених балів:</h5>
                <div className={s.countsOfDT}>
                    <img src={DT_Icon} alt="" />
                    <span>+100 DT</span>
                </div>
            </div>
          </div>

          
      </div>
      




      
    </div>
  )
}

export default ChallengeExample;