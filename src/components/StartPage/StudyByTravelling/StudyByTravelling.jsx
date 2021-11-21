import React from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";
import Modal from 'react-modal';
import bannerPhoto from '../../../assets/images/bannerPhoto.png';
import btnBanner from '../../../assets/images/btnBanner.png';



import A1_active from '../../../assets/images/A1_active.png';
import A1 from '../../../assets/images/A1.png';

import A2_active from '../../../assets/images/A2_active.png';
import A2 from '../../../assets/images/A2.png';

import B1_active from '../../../assets/images/B1_active.png';
import B1 from '../../../assets/images/B1.png';

import B2_active from '../../../assets/images/B2_active.png';
import B2 from '../../../assets/images/B2.png';

import C1_active from '../../../assets/images/C1_active.png';
import C1 from '../../../assets/images/C1.png';


import german from '../../../assets/images/german.png';
import liechtenstein from '../../../assets/images/liechtenstein.png';
import liechtenstein_active from '../../../assets/images/liechtenstein_active.png';

import luxembourg from '../../../assets/images/luxembourg.png';
import switzerland from '../../../assets/images/switzerland.png';
import austria from '../../../assets/images/austria.png';

import a1_line from '../../../assets/images/a1_line.png';
import a2_line from '../../../assets/images/a2_line.png';
import b1_line from '../../../assets/images/b1_line.png';
import b2_line from '../../../assets/images/b2_line.png';
import c1_line from '../../../assets/images/c1_line.png';



import circle_block_about_country from '../../../assets/images/circle_block_about_country.png';

import liechtenshtein_country from '../../../assets/images/liechtenshtein_country.png';

import line_under_country from '../../../assets/images/line_under_country.png';

import correct from '../../../assets/images/correct.png';


const StudyByTravelling = () => {
  

        
  return (
    
    <div>

      <div className={s.studyAndTravelWrapper}>
        <div className={s.leftPartText}>
          <h2>Вивчай німецьку подорожуючи!</h2>

          <img className={s.btnStartStudy} src={btnBanner} />
          
          <div className={s.informationAboutCountry}>
            <h3> <span className={s.amount}>5</span> країн</h3>

            <span className={s.aboutCountry}>Протягом повноціного та поетапного курсу ви не тільки познайомишся з улюбленими героями 
              та навіть відвідаєте 5 німецькомовних країн. Навчання з нами дає можливість подорожувати по них, 
              як Баррі Аллен ( серіал Флеш). Сьогодні ви в Ліхтенштейні(А1), а завтра в Німеччині(С1). </span>
          </div>
          

          <div className={s.levelsCircle}>
            <h3> <span className={s.amount}>5</span> рівнів:</h3>

            <div className={s.A1_circle}>
              <div className={s.A1_circle_active}>
                <img src={A1_active} />
                <span>A1</span>
              </div>

              <div className={s.A1_circle_NO_active}>
                
              </div>
              
            </div>
            
            <div className={s.A2_circle}>
              <div className={s.A2_circle_active}>

              </div>

              <div className={s.A2_circle_NO_active}>
                <img src={A2} />
                <span>A2</span>
              </div>

            </div>
            
            <div className={s.B1_circle}>
              <div className={s.B1_circle_active}>

              </div>

              <div className={s.B1_circle_NO_active}>
                <img src={B1} />
                <span>B1</span>
              </div>
              
            </div>

            <div className={s.B2_circle}>
              <div className={s.B2_circle_active}>

              </div>

              <div className={s.B2_circle_NO_active}>
                <img src={B2} />
                <span>B2</span>
              </div>
              
            </div>

            <div className={s.C1_circle}>
              <div className={s.C1_circle_active}>

              </div>

              <div className={s.C1_circle_NO_active}>
                <img src={C1} />
                <span>C1</span>
              </div>
              
            </div>

          </div>

        </div>



        <div className={s.rightPartCountries}>
          <img className={s.german_country} src={german} alt="" />
          <img className={s.liechtenstein_country} src={liechtenstein_active} alt="" />
          <img className={s.luxembourg_country} src={luxembourg} alt="" />
          <img className={s.switzerland_country} src={switzerland} alt="" />
          <img className={s.austria_country} src={austria} alt="" />


          <img className={s.a1_line} src={a1_line} />
          <img className={s.a2_line} src={a2_line} />
          <img className={s.b1_line} src={b1_line} />
          <img className={s.b2_line} src={b2_line} />
          <img className={s.c1_line} src={c1_line} />


          <div className={s.A1_map_circle}>
            <div className={s.A1_map_circle_active}>
              <img src={A1_active} />
              <span>A1</span>
            </div>

            <div className={s.A1_map_circle_NO_active}>
                
            </div>
              
          </div>
            
          <div className={s.A2_map_circle}>
            <div className={s.A2_map_circle_active}>

            </div>

            <div className={s.A2_map_circle_NO_active}>
              <img src={A2} />
              <span>A2</span>
            </div>

          </div>
            
          <div className={s.B1_map_circle}>
            <div className={s.B1_map_circle_active}>

            </div>

            <div className={s.B1_map_circle_NO_active}>
              <img src={B1} />
              <span>B1</span>
            </div>
              
          </div>

          <div className={s.B2_map_circle}>
            <div className={s.B2_map_circle_active}>

            </div>

            <div className={s.B2_map_circle_NO_active}>
              <img src={B2} />
              <span>B2</span>
            </div>
              
          </div>

          <div className={s.C1_map_circle}>
            <div className={s.C1_map_circle_active}>

            </div>

            <div className={s.C1_map_circle_NO_active}>
              <img src={C1} />
              <span>C1</span>
            </div>
              
          </div>          
        </div>
      </div>  

      <div className={s.liechtenstein_block}>
        <h1>LIECHTENSTEIN</h1>

        <div className={s.liechtenstein_block_about}>
          <div className={s.part_photo_country}>
            <img src={liechtenshtein_country} />
            <img className={s.line_under_country} src={line_under_country} />
          </div>

          <div className={s.part_about_country}>
            <div className={s.title_about_country}>
              <div className={s.A1_circle_active}>
                <img src={A1_active} />
                <span>A1</span>
              </div>

              <h2>- Ліхтенштейн</h2>
            </div>
            

            <p>Зазвичай, цй рівень є найкоротшим і відповідає примітивному рівню і в подільшому людина 
              неодноразово повертається до матеріалу цього рівня, щоб пригадати елементарні речі, 
              проте ми вважаємо, що початковий рівень є чиненайважливішим, тому що тут, в Люксимбургу, 
              будується основа. Ви виробляєте так зване відчуття мови, звикаєте до методики та будете по 
              завершенню рівня вміти: </p>

            <div className={s.point_list}>
              <img src={correct} />
              <span>Розуміння простих фраз в повільному та чіткому мовленні;</span>
            </div>

            <div className={s.point_list}>
              <img src={correct} />
              <span>Граматика: ви будете ознайомленні з так званою основою: особами, прийменниками, 
                відмінюванням, питаннями, всіма часовими формами, наказовим способом і багато іншого. </span>
            </div>

            <div className={s.point_list}>
              <img src={correct} />
              <span>ви будете розуміти оголошення і нескладні тексти.</span>
            </div>

            <div className={s.point_list}>
              <img src={correct} />
              <span>на цьому етапі вам вже будуть навіть зустрічатись частинки фільмів, пісень і цікавих відео.</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );

}


export default StudyByTravelling;