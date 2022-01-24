import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import grammarVideo from '../../../../../assets/images/grammarVideo.png';
import grammarExerciseMan from '../../../../../assets/images/grammarExerciseMan.png';

import photoRules from '../../../../../assets/images/photoRules.png';
import icon_rules from '../../../../../assets/images/icon_rules.png';
import rulesOfUsePhoto from '../../../../../assets/images/rulesOfUsePhoto.png';
import rulesOfUseIcon from '../../../../../assets/images/rulesOfUseIcon.png';
import checkIconRulesOfUser from '../../../../../assets/images/checkIconRulesOfUser.png';

import blockTranslateIcon from '../../../../../assets/images/blockTranslateIcon.png';
import blockTranslateWomanPhoto from '../../../../../assets/images/blockTranslateWomanPhoto.png';
import arrowButtonTranslateSentences from '../../../../../assets/images/arrowButtonTranslateSentences.png';
import correctSentences from '../../../../../assets/images/correctSentences.png';

import photoCard from '../../../../../assets/images/photoCard.png';
import buttonCard from '../../../../../assets/images/buttonCard.png';


const BlockGrammar = (props) => {


  return (
    <div className={s.blockGrammar}>
            <h1>Граматика</h1>
            <img src={grammarVideo} className={s.grammarVideo} alt="" />

            <div className={s.grammarAttention}>
                <img src={grammarExerciseMan} className={s.grammarExerciseMan} alt="" />

                <div className={s.grammarAttentionText}>
                    <h4>ЗВЕРНИ УВАГУ</h4>
                    <p>У мовній школі Deschule ми використовуємо спеціальну методику для кращої концентрації 
                        та засвоєння матеріалу, а також даруємо бонуси за старанність. Тому, шукай та доповнюй 
                        місця, де не вистачає слів!</p>
                </div>
            </div>

            <div className={s.personalPronomen}>
                <h3>Особові займенники / <span>Personal pronomen</span></h3>
                <span className={s.textPersonalPronomen}>Особові займенники ми використовуємо для того, щоб вказати на особу до якої відносяться наші слова.</span>
                <h4>ОСОБОВИЙ ЗАЙМЕННИК МАЄ ТРИ ОСОБИ В  ОДНИНІ <span>(SINGULAR)</span> І  МНОЖИНІ <span>(PLURAL):</span></h4>
            
                <div className={s.personalPronomenTables}>
                    <div className={s.tableSingular}>
                        <h5>ОДНИНА:</h5>
                        <table>
                            <tr>
                                <td className={s.firstColumn}>Ich</td>
                                <td className={s.secondColumn} id={s.topCell}>я</td>
                            </tr>
                            <tr>
                                <td className={s.firstColumn}>...</td>
                                <td className={s.secondColumn}>ти</td>
                            </tr>
                            <tr>
                                <td className={s.firstColumn}>er / sie / es</td>
                                <td className={s.secondColumn}>він / вона / воно</td>
                            </tr>
                        </table>
                    </div>
                        
                    <div>
                        <h5>МНОЖИНА:</h5>
                        <table>
                            <tr>
                                <td className={s.firstColumn}>Wir</td>
                                <td className={s.secondColumn} id={s.topCell}>ми</td>
                            </tr>
                            <tr>
                                <td className={s.firstColumn}>Ihr</td>
                                <td className={s.secondColumn}>ви</td>
                            </tr>
                            <tr>
                                <td className={s.firstColumn}>sie / Sie</td>
                                <td className={s.secondColumn}>вони / Ви</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>




            <div className={s.blockRules}>

                <div className={s.blockRulesTextWrapper}>
                    <img src={photoRules} className={s.photoRules} alt="" />
                    <div>
                        <div className={s.blockRulesIcon}>
                            <img src={icon_rules} alt="" />
                            <h3>ПРАВИЛА:</h3>
                        </div>
                    
                        <div className={s.blockRulesText}>
                            <div className={s.blockRulesTextHeader}>
                                <span className={s.exclamation_mark}>!</span>
                                <span>Особові займенники <strong>ich, du, wir, ihr, Sie</strong> у номінатів, 
                                    акузатів та датів завжди вказують на особу:</span>
                            </div>
                            <div className={s.blockRulesTextBody}>
                                <p> <strong>Ich</strong> habe <strong className={s.rulesStrontWord}>dich</strong> gestern gesehen. <span>— Я бачив тебе вчора.</span> </p>
                                <p> <strong>Wir</strong> haben <strong className={s.rulesStrontWord}>euch</strong> nicht vergessen. <span>— Ми вас не забули.</span> </p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={s.blockRulesText}>
                    <div className={s.blockRulesTextHeader}>
                        <span className={s.exclamation_mark}>!</span>
                        <span>Особові займенники <strong>er, sie, es, sie (множина)</strong> у номінатів, 
                        акузатів та датів завжди вказують на раніше згадувані особи або предмети:</span>
                    </div>
                    <div className={s.blockRulesTextBody}>
                        <p> <strong>Der Professor</strong> ist krank. <strong className={s.rulesStrontWord}>Er</strong> kommt heute nicht. <span>— Професор хворий. Він сьогодні не прийде.</span> </p>
                        <p> <strong>Die Verkäuferin</strong> bedient mich gut. Ich kenne <strong className={s.rulesStrontWord}>sie</strong> schon lange. <span> — Продавчиня обслуговує мене добре. Я давно її знаю.</span> </p>
                    </div>
                </div>

                <div className={s.blockRulesText}>
                    <div className={s.blockRulesTextHeader}>
                        <span className={s.exclamation_mark}>!</span>
                        <span>Особові займенники також вживаються з прийменниками <strong>Präposition:</strong></span>
                    </div>
                    <div className={s.blockRulesTextBody}>
                        <p> Wann gehst du zum Zahnarzt? — Ich war gestern <strong className={s.rulesStrontWord}>bei ihm.</strong> <span>Коли ти йдеш до стоматолога? — Я був вчора у нього.</span> </p>
                        <p> Hörst du manchmal noch etwas <strong className={s.rulesStrontWord}>von ihr</strong>? — Nein, ich habe schon lange nicht mehr <strong className={s.rulesStrontWord}>mit ihr</strong> telefoniert. <span>Ти щось іноді чуєш від неї? — Ні, я давно їй не дзвонив.</span> </p>
                    </div>
                </div>
            </div>




            <div className={s.rulesOfUse}>
                <div>
                    <div className={s.rulesOfUseHeader}>
                        <img src={rulesOfUseIcon} alt="" />
                        <h2>ПРАВИЛА ВЖИВАННЯ:</h2>
                    </div>

                    <h3>Вживання нульового артикля:</h3>

                    <div className={s.rulesOfUseTitle} >
                        <img src={checkIconRulesOfUser} alt="" />
                        <span>Перед власними іменами та іменами людей, міст, країн 
                            (але є винятки, типу die Ukraine, sie Schweiz, der Sudan) і континентів:</span>
                    </div>

                    <div className={s.rulesOfUseBody}>
                        <p> Berlin ist <strong className={s.rulesStrontWord}>die</strong> Hauptstadt Deutschlands. - Берлін - столиця Німеччини. </p>
                        <p> <strong className={s.rulesStrontWord}>Ich</strong> lebe in Deutschland. - Я живу в Німеччині. </p>
                        <p> Frank <strong className={s.rulesStrontWord}>ist</strong> 20 …(Jahre) alt. Френку 20 ... (років). </p>
                    </div>


                    <div className={s.rulesOfUseTitle} >
                        <img src={checkIconRulesOfUser} alt="" />
                        <span>Національність та професії після sein und werden.</span>
                    </div>

                    <div className={s.rulesOfUseBody}>
                        <p> <strong className={s.rulesStrontWord}>Ich</strong> bin Ukrainer.  -  Я українець. </p>
                        <p> <strong className={s.rulesStrontWord}>Er</strong> ...(wird) Arzt in der Zukunft. -  Він ... (буде) лікарем у майбутньому. </p>
                    </div>


                    <div className={s.rulesOfUseTitle} >
                        <img src={checkIconRulesOfUser} alt="" />
                        <span>У множині, якщо в однині іменник вживався з неозначеним артиклем:</span>
                    </div>

                    <div className={s.rulesOfUseBody}>
                        <p> Kinder gehen in <strong className={s.rulesStrontWord}>die</strong> …(Schule). 
                        ( в значенні, що не конкретні діти йдуть до школи, а всі, в загальному) - Діти ходять до ... (школи) </p>
                    </div>


                    <div className={s.rulesOfUseTitle} >
                        <img src={checkIconRulesOfUser} alt="" />
                        <span>Якщо перед іменником стоїть займенник або кількісний числівник, або займенник:   </span>
                    </div>

                    <div className={s.rulesOfUseBody}>
                        <p> <strong className={s.rulesStrontWord}>Sein</strong> Buch ist wirklich interessant. - Його книга справді цікава. </p>
                        <p> Ein paar Eigenschaften sind dabei …(wichtig).  (Декілька скілів є важливими в цьому) </p>
                        <p> 3 Briefe sind jetzt im Postamt.  - Зараз на пошті 3 листи. </p>
                    </div>


                    <div className={s.rulesOfUseTitle} >
                        <img src={checkIconRulesOfUser} alt="" />
                        <span>У звертанняx:</span>
                    </div>

                    <div className={s.rulesOfUseBody}>
                        <p> Leute, machen <strong className={s.rulesStrontWord}>wir</strong> das alles ein bisschen anders! - Хлопці, давайте зробимо це трохи інакше! </p>
                    </div>
                    
                </div>

                <img src={rulesOfUsePhoto} className={s.rulesOfUsePhoto} alt="" />
            </div>


            <div className={s.blockTranslate}>
                <div className={s.blockTranslateHeader}>
                    <img src={blockTranslateIcon} alt="" />
                    <h2>ПЕРЕКЛАДІТЬ:</h2>
                </div>

                <div className={s.blockTranslateBody}>
                    <div className={s.blockTranslateBodyLeftPart}>
                        <span >А зараз давай перевіримо твої успіхи! Переклади кілька слів, наведених нижче:</span>
                        <img src={blockTranslateWomanPhoto} className={s.blockTranslateWomanPhoto} alt="" />
                    </div>
                    

                    <div className={`${s.blockTranslateMain} ${s.blockTranslateMainCorrect}`}>
                        <img src={photoCard} className={s.photoTranslateWord} alt="" />
                        <div className={s.blockTranslateCardsContent}>
                            <h4>Берлін - столиця Німеччини.</h4>
                            <input type="text" placeholder='Введіть спереклад німецькою' />
                            <div className={s.buttonTranslateSentences}>
                                <span>Далі</span>
                                <img src={buttonCard} className={s.buttonCardTranslate} alt="" />
                                <img src={arrowButtonTranslateSentences} className={s.arrowButtonTranslateSentences} alt="" />
                            </div>
                        </div>

                        <img src={correctSentences} className={s.correctSentences} alt="" />
                    </div>
                </div>

            </div>
        </div>

  )
}


export default BlockGrammar;