import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import transformSentencesPhoto from '../../../../../assets/images/transformSentences.png';
import transformSentencesPhotoBlock from '../../../../../assets/images/transformSentencesPhoto.png';


import translatePhoto_1 from '../../../../../assets/images/translatePhoto_1.png';
import translatePhoto_2 from '../../../../../assets/images/translatePhoto_2.png';
import translatePhoto_3 from '../../../../../assets/images/translatePhoto_3.png';
import translatePhoto_4 from '../../../../../assets/images/translatePhoto_4.png';

import correctAnswerIcon from '../../../../../assets/images/correctAnswerIcon.png';
import titleIcon from '../../../../../assets/images/titleIcon.png';


const BlockGrammarTasks = (props) => {


  return (
    <div className={s.blockGrammarTasks}>

            <div className={s.firstTask}>
                <div className={s.titleHeader}>
                    <img src={titleIcon} className={s.titleIcon} alt="" />
                    <h2>Звідки вони?</h2>
                </div>

                <p className={s.titleHeaderText}>Сформулюй відповідь на питання використовуюсчи дані: </p>

                <div className={s.translateSentencesAndUseWords}>
                    <table>
                        <tr>
                            <td></td>
                            <td> 
                                <h5>WER IST DAS?</h5> 
                            </td>
                        </tr>
                        <tr>
                            <td className={s.firstColumn}>Das ist Ralph</td>
                            <td className={s.secondColumn} id={s.topCell}>
                                <input type="text" placeholder='...'/>
                            </td>
                        </tr>
                        <tr>
                            <td className={s.firstColumn}>Eobard und Walley</td>
                            <td className={s.secondColumn}>
                                <input type="text" placeholder='...'/>
                            </td>
                        </tr>
                        <tr>
                            <td className={s.firstColumn}>Leo</td>
                            <td className={s.secondColumn}>
                                <input type="text" placeholder='...'/>
                            </td>
                        </tr>
                        <tr>
                            <td className={s.firstColumn}>Eddie und Eva</td>
                            <td className={s.secondColumn}>
                                <input type="text" placeholder='...'/>
                            </td>
                        </tr>
                        <tr>
                            <td className={s.firstColumn}>Clifford</td>
                            <td className={s.secondColumn}>
                                <input type="text" placeholder='...'/>
                            </td>
                        </tr>
                        <tr>
                            <td className={s.firstColumn}>Linda</td>
                            <td className={s.secondColumn} id={s.bottomCell}>
                                <input type="text" placeholder='...'/>
                            </td>
                        </tr>                        
                    </table>
                </div>

                <div className={s.transformSentences}>
                    <img src={transformSentencesPhoto}  className={s.transformSentencesPhoto} alt="" />
                    <div className={s.transformSentencesWrapperContent}>
                        <span className={s.transformSentencesTitle}>Harrison - <strong>Unternehmer (підприємець)</strong></span>
                        <div className={s.transformSentencesContent}>
                            <span> - Was ist er von Beruf? </span>
                            <input type="text" placeholder='Дайте відповідь на запитання' />
                            <div className={s.transformSentencesButton}>
                                <img src={correctAnswerIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.transformSentences}>
                    <img src={transformSentencesPhoto}  className={s.transformSentencesPhoto} alt="" />
                    <div className={s.transformSentencesWrapperContent}>
                        <span className={s.transformSentencesTitle}>Harrison - <strong>Unternehmer (підприємець)</strong></span>
                        <div className={s.transformSentencesContent}>
                            <span> - Was ist er von Beruf? </span>
                            <input type="text" placeholder='Дайте відповідь на запитання' />
                            <div className={s.transformSentencesButton}>
                                <img src={correctAnswerIcon} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={s.wrapperTransformSentences}>
                    <div>
                        <div className={s.transformSentences}>
                            <img src={transformSentencesPhoto}  className={s.transformSentencesPhoto} alt="" />
                            <div className={s.transformSentencesWrapperContent}>
                                <span className={s.transformSentencesTitle}>Harrison - <strong>Unternehmer (підприємець)</strong></span>
                                <div className={s.transformSentencesContent}>
                                    <input type="text" placeholder='Дайте відповідь на запитання' />
                                    <div className={s.transformSentencesButton}>
                                        <img src={correctAnswerIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={s.transformSentences}>
                            <img src={transformSentencesPhoto}  className={s.transformSentencesPhoto} alt="" />
                            <div className={s.transformSentencesWrapperContent}>
                                <span className={s.transformSentencesTitle}>Harrison - <strong>Unternehmer (підприємець)</strong></span>
                                <div className={s.transformSentencesContent}>
                                    <input type="text" placeholder='Дайте відповідь на запитання' />
                                    <div className={s.transformSentencesButton}>
                                        <img src={correctAnswerIcon} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <img src={transformSentencesPhotoBlock} className={s.transformSentencesPhotoBlock} alt="" />
                </div>
            </div>




            <div className={s.secondTask}>
                <div className={s.titleHeader}>
                    <img src={titleIcon} className={s.titleIcon} alt="" />
                    <h2>Прочитай та дай відповіді на питання після тексту</h2>
                </div>

                <p className={s.titleHeaderText}>Прочитай текст вголос і спробуй перекласти. 
                Якщо трапляється незнайоме слово- ти завжди можеш подивитись його у словнику! </p>
                

                <div className={s.readAndAnswer}>
                    <span className={s.firstQuotes}>&#8220;</span> 
                    <p>Am Wochenende gehen wir immer einkaufen. Zuerst beginnen wir mit dem Nahrungsmittel. 
                        Unsere Einkaufsliste ist lang, wir kaufen für die ganze Woche ein. 
                        Außerdem kommen Gäste dieses Wochenende zu Besuch und ich werde für sie kochen. 
                        In den Einkaufswagen stellen wir sofort eine Kiste Mineralwasser. 
                        In der Kiste sind zwölf Flaschen. Eine große Packung Nudeln, zwei Kilo Zucker und 
                        drei Kilo Mehl brauchen wir auch. Ich bin sicher, alle essen gerne Kartoffeln. 
                        Wir brauchen vier Kilogramm davon. Sechs Flaschen Bier brauchen wir auch. 
                        Fünf Packungen Apfelsaft sind sehr wichtig, denn die Kinder kommen auch.  </p>
                    <span className={s.lastQuotes}>&#8221;</span>
                </div>

                <div className={s.answerTheQuestion}>
                    <strong> - Was ist er von Beruf? </strong>
                    <div className={s.answerTheQuestionInput}>
                        <input type="text" placeholder='Дайте відповідь на запитання'/>
                        <div className={s.correctAnswerButton}>
                            <img src={correctAnswerIcon} alt="" />
                        </div>
                    </div>
                </div>

                <div className={s.answerTheQuestion}>
                    <strong> - Was ist er von Beruf? </strong>
                    <div className={s.answerTheQuestionInput}>
                        <input type="text" placeholder='Дайте відповідь на запитання'/>
                        <div className={s.correctAnswerButton}>
                            <img src={correctAnswerIcon} alt="" />
                        </div>
                    </div>
                </div>

            </div>




            <div className={s.thirdTask}>
                <div className={s.titleHeader}>
                    <img src={titleIcon} className={s.titleIcon} alt="" />
                    <h2>Прочитай та впиши пропущені слова у тексті</h2>
                </div>

                <p className={s.titleHeaderText}>Прочитай текст вголос і спробуй перекласти. 
                Якщо трапляється незнайоме слово - ти завжди можеш подивитись його у словнику! </p>

                <p className={s.translateText}>  Am Wochenende gehen <input></input> immer einkaufen. Zuerst beginnen wir mit dem Nahrungsmittel. 
                Unsere Einkaufsliste <input></input> lang, wir kaufen für die ganze Woche ein. 
                Außerdem kommen Gäste dieses Wochenende zu Besuch und <input></input> werde für sie kochen. 
                In den Einkaufswagen stellen wir sofort eine Kiste Mineralwasser. In der Kiste sind zwölf Flaschen. 
                Eine große Packung Nudeln, zwei Kilo Zucker und drei Kilo Mehl brauchen <input></input> auch. 
                Ich bin sicher, alle essen gerne Kartoffeln. Wir brauchen vier Kilogramm davon. 
                Sechs Flaschen Bier brauchen <input></input> auch. Fünf Packungen Apfelsaft sind sehr wichtig, 
                denn die Kinder kommen auch. </p>
            </div>






            <div className={s.forthTask}>
                <div className={s.titleHeader}>
                    <img src={titleIcon} className={s.titleIcon} alt="" />
                    <h2>Перекладіть слова</h2>
                </div>

                <p className={s.titleHeaderText}>Запишіть німецькою, що бачите на картинці </p>

                <div className={s.translateWords}>
                    <div className={s.translateWordBlock}>
                        <img src={translatePhoto_1} alt="" />
                        <input type="text" placeholder='Введіть переклад зображення'/>
                    </div>

                    <div className={s.translateWordBlock}>
                        <img src={translatePhoto_2} alt="" />
                        <input type="text" placeholder='Введіть переклад зображення'/>
                    </div>

                    <div className={s.translateWordBlock}>
                        <img src={translatePhoto_3} alt="" />
                        <input type="text" placeholder='Введіть переклад зображення'/>
                    </div>

                    <div className={s.translateWordBlock}>
                        <img src={translatePhoto_4} alt="" />
                        <input type="text" placeholder='Введіть переклад зображення'/>
                    </div>
                </div>

            </div>
            
        </div>

  )
}


export default BlockGrammarTasks;