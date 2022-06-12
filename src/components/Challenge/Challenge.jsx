import React from 'react';
import s from './Challenge.module.css';

import challengePhotoMan from '../../assets/images/challengePhotoMan.png';
import DT_Icon from '../../assets/images/StartPage/DT_Icon.svg';
import btnModal_Confirm from '../../assets/images/btnModal_Confirm.svg';
import circleChallenge from '../../assets/images/circleChallenge.svg';
import stoneBottomPartPage from '../../assets/images/stoneBottomPartPage.png';


const Challenge = (props) => {
  return (
    <div className={s.wrapperChallengePage}>
      
      <div className={s.challengeHeader}>
        <img src={challengePhotoMan} className={s.challengePhotoMan} alt="" />

        <div className={s.challengeHeaderItems}>
          <div className={s.challengeHeaderItem}>
            <div className={s.circlePoint}></div>
            <h5>Додаткові бали</h5>
          </div>

          <div className={s.challengeHeaderItem}>
            <div className={s.circlePoint}></div>
            <h5>Дух суперництва</h5>
          </div>

          <div className={s.challengeHeaderItem}>
            <div className={s.circlePoint}></div>
            <h5>Поглиблені знання</h5>
          </div>

          <div className={s.challengeHeaderItem}>
            <div className={s.circlePoint}></div>
            <h5>Подарунки</h5>
          </div>
        </div>

        <p>Це все і більше ти отрамаєш регулярно беручи участь у спеціальних змаганнях від школи Deschtule !</p>


      </div>


      <div className={s.challengeContentWrapper}>

        <div className={s.challengeListWrapper}>
          <h3>CHALLENGE LIST</h3>

          <div className={s.challengeList}>

            <div className={s.challengeBlock}>
              <h4>Маленький крок для початку</h4>
              <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod temp ncididunt ut labore et dolore magna aliqua. </p>

              <div className={s.challengeProgressPoints}>
                <div>
                  <img src={DT_Icon} alt="" />
                  <span className={s.countsOfDT}>+1</span>
                </div>
                

                <div className={s.progressBar_challenge}>
                  <span className={s.progressBar_challenge_line} id={s.first_progressBar_challenge_line}></span>
                  <span className={s.progressBar_challenge_active} id={s.first_progressBar_challenge_active} style={ {width: "80px"} }></span>
                </div>

                <span className={s.stepsOfChallenge}>0/1</span>
              </div>
            </div>

            <div className={s.challengeBlock}>
              <h4>Маленький крок для початку</h4>
              <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod temp ncididunt ut labore et dolore magna aliqua. </p>

              <div className={s.challengeProgressPoints}>
                <div>
                  <img src={DT_Icon} alt="" />
                  <span className={s.countsOfDT}>+1</span>
                </div>
                

                <div className={s.progressBar_challenge}>
                  <span className={s.progressBar_challenge_line} id={s.first_progressBar_challenge_line}></span>
                  <span className={s.progressBar_challenge_active} id={s.first_progressBar_challenge_active} style={ {width: "80px"} }></span>
                </div>

                <span className={s.stepsOfChallenge}>0/1</span>
              </div>
            </div>

            <div className={s.challengeBlock}>
              <h4>Маленький крок для початку</h4>
              <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod temp ncididunt ut labore et dolore magna aliqua. </p>

              <div className={s.challengeProgressPoints}>
                <div>
                  <img src={DT_Icon} alt="" />
                  <span className={s.countsOfDT}>+1</span>
                </div>
                

                <div className={s.progressBar_challenge}>
                  <span className={s.progressBar_challenge_line} id={s.first_progressBar_challenge_line}></span>
                  <span className={s.progressBar_challenge_active} id={s.first_progressBar_challenge_active} style={ {width: "80px"} }></span>
                </div>

                <span className={s.stepsOfChallenge}>0/1</span>
              </div>
            </div>

            <div className={s.challengeBlock}>
              <h4>Маленький крок для початку</h4>
              <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod temp ncididunt ut labore et dolore magna aliqua. </p>

              <div className={s.challengeProgressPoints}>
                <div>
                  <img src={DT_Icon} alt="" />
                  <span className={s.countsOfDT}>+1</span>
                </div>
                

                <div className={s.progressBar_challenge}>
                  <span className={s.progressBar_challenge_line} id={s.first_progressBar_challenge_line}></span>
                  <span className={s.progressBar_challenge_active} id={s.first_progressBar_challenge_active} style={ {width: "80px"} }></span>
                </div>

                <span className={s.stepsOfChallenge}>0/1</span>
              </div>
            </div>

            <div className={s.challengeBlock}>
              <h4>Маленький крок для початку</h4>
              <p>Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit, sed do eiusmod temp ncididunt ut labore et dolore magna aliqua. </p>

              <div className={s.challengeProgressPoints}>
                <div>
                  <img src={DT_Icon} alt="" />
                  <span className={s.countsOfDT}>+1</span>
                </div>
                

                <div className={s.progressBar_challenge}>
                  <span className={s.progressBar_challenge_line} id={s.first_progressBar_challenge_line}></span>
                  <span className={s.progressBar_challenge_active} id={s.first_progressBar_challenge_active} style={ {width: "80px"} }></span>
                </div>

                <span className={s.stepsOfChallenge}>0/1</span>
              </div>
            </div>

          </div>


        </div>

        <div className={s.selectedChallengeWrapper}>
          <img src={circleChallenge} className={s.circleChallenge} alt="" />

          <h2>CHALLENGE</h2>

          <div className={s.selectedChallenge}>
            <div>
              <div className={s.challengeProgressPoints}>
                <div>
                  <img src={DT_Icon} alt="" />
                  <span className={s.countsOfDT}>+1</span>
                </div>
                  

                <div className={s.progressBar_challenge}>
                  <span className={s.progressBar_challenge_line} id={s.first_progressBar_challenge_line}></span>
                  <span className={s.progressBar_challenge_active} id={s.first_progressBar_challenge_active} style={ {width: "80px"} }></span>
                </div>

                <span className={s.stepsOfChallenge}>0/1</span>
              </div>

            </div>

            <p>Прийми виклик - зароби додаткові бали (XP) та покращ свої знання!</p>

            <div className={s.countsOfDT_challenge}>
              <img src={DT_Icon} alt="" />
              <span>+100 DT</span>
            </div>


            <div className={s.btnChallenge_Start}>
              <img src={btnModal_Confirm} alt="" />
              <span>Забрати бали</span>
            </div>

          </div>

        </div>


      </div>




      {/* <h1 className={s.deschuleTitle}>DESCHULE</h1>
      <img src={stoneBottomPartPage} className={s.stoneDownTitle} /> */}
    </div>
  )
}

export default Challenge;