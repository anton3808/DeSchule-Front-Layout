import React, {useState} from 'react'
import s from '../../Lessons.module.css';

import textVideo from '../../../../../assets/images/textVideo.png';
import textPhoto from '../../../../../assets/images/textPhoto.png';

import titleIcon from '../../../../../assets/images/titleIcon.png';


const BlockReadAndTranslate = (props) => {


  return (
    <div className={s.blockReadAndTranslate}>
            <div className={s.titleHeaderBlock}>
                <img src={titleIcon} className={s.titleIcon} alt="" />
                <h2>Прочитай та переклади</h2>
            </div>

            <p className={s.titleHeaderText} >Прочитай текст вголос і спробуй перекласти. Якщо трапляється незнайоме слово - ти 
                завжди можеш подивитись його у словнику!</p>

            <img src={textVideo} className={s.textVideo} alt="" />

            <div className={s.blockReadAndTranslateContent}>
                <img src={textPhoto} className={s.textPhoto} alt="" />

                <div>
                    <span className={s.firstQuotes}>&#8220;</span> 
                    <p> Am Wochenende gehen wir immer einkaufen. Zuerst beginnen wir mit dem Nahrungsmittel. 
                        Unsere Einkaufsliste ist lang, wir kaufen für die ganze Woche ein. 
                        Außerdem kommen Gäste dieses Wochenende zu Besuch und ich werde für sie kochen. 
                        In den Einkaufswagen stellen wir sofort eine Kiste Mineralwasser. 
                        In der Kiste sind zwölf Flaschen. Eine große Packung Nudeln, zwei Kilo Zucker 
                        und drei Kilo Mehl brauchen wir auch. Ich bin sicher, alle essen gerne Kartoffeln. 
                        Wir brauchen vier Kilogramm davon. Sechs Flaschen Bier brauchen wir auch. 
                        Fünf Packungen Apfelsaft sind sehr wichtig, denn die Kinder kommen auch. 
                        Beim Obstregal kaufen wir verschiedene Früchte: Äpfel, Bananen, Erdbeeren und 
                        Kirschen werde ich für den Nachtisch verwenden, es gibt Obstsalat. 
                        Im ersten Kühlregal gibt es eine große Auswahl an Fleisch und Fisch. 
                        Ich entscheide mich für ein Huhn. Ich kaufe auch Würstchen für Vorspeise. 
                        Nach der Essenabteilung gehen wir manchmal Kleider, oder Technik kaufen. 
                        Dieses Kaufzentrum ist fünfstöckig. Das gefällt mir sehr. In dem ersten Stock 
                        verkauft man Damen- und Herrenkleidung: Röcke, Kleider, Blusen, Hosen, Hemden, 
                        Unterwäsche, Jacken und Mäntel. Damen- und Herrenschuhe sind auch da. 
                        In dem dritten Stock gibt es Technikgeschäfte. Sie verkaufen Mikrowellen und 
                        Wasserkocher, Spül- und Waschmaschinen, Kühlschränke, Staubsauger, Fernseher, 
                        Computer, Kaffeemaschinen, Hand. </p>
                    <span className={s.lastQuotes}>&#8221;</span>
                </div>          
            </div>
        </div>

  )
}


export default BlockReadAndTranslate;