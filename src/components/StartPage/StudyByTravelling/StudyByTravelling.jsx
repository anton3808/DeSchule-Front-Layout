import React, { useState, useEffect, useRef } from 'react';
import s from '../StartPage.module.css';
import {NavLink, Route} from "react-router-dom";
import Modal from 'react-modal';
import bannerPhoto from '../../../assets/images/bannerPhoto.png';
import studyByTravellingUnderline from '../../../assets/images/StartPage/studyByTravelling-Underline.svg';




import levels_A1_active from '../../../assets/images/StartPage/levels-A1-Circle-active.svg';
import levels_A1 from '../../../assets/images/StartPage/levels-A1-Circle.svg';

import levels_A2_active from '../../../assets/images/StartPage/levels-A2-Circle-active.svg';
import levels_A2 from '../../../assets/images/StartPage/levels-A2-Circle.svg';

import levels_B1_active from '../../../assets/images/StartPage/levels-B1-Circle-active.svg';
import levels_B1 from '../../../assets/images/StartPage/levels-B1-Circle.svg';

import levels_B2_active from '../../../assets/images/StartPage/levels-B2-Circle-active.svg';
import levels_B2 from '../../../assets/images/StartPage/levels-B2-Circle.svg';

import levels_C1_active from '../../../assets/images/StartPage/levels-C1-Circle-active.svg';
import levels_C1 from '../../../assets/images/StartPage/levels-C1-Circle.svg';

import levels_C2_active from '../../../assets/images/StartPage/levels-C2-Circle-active.svg';
import levels_C2 from '../../../assets/images/StartPage/levels-C2-Circle.svg';





import liechtenstein_active from '../../../assets/images/StartPage/map-liechtenstein-active.svg';
import liechtenstein from '../../../assets/images/StartPage/map-liechtenstein.svg';

import luxembourg_active from '../../../assets/images/StartPage/map-luxembourg-active.svg';
import luxembourg from '../../../assets/images/StartPage/map-luxembourg.svg';

import switzerland_active from '../../../assets/images/StartPage/map-switzerland-active.svg';
import switzerland from '../../../assets/images/StartPage/map-switzerland.svg';

import austria_active from '../../../assets/images/StartPage/map-austria-active.svg';
import austria from '../../../assets/images/StartPage/map-austria.svg';

import germany_active from '../../../assets/images/StartPage/map-germany-active.svg';
import germany from '../../../assets/images/StartPage/map-germany.svg';

import belgium_active from '../../../assets/images/StartPage/map-belgium-active.svg';
import belgium from '../../../assets/images/StartPage/map-belgium.svg';





import a1_line from '../../../assets/images/StartPage/map-A1-Line.svg';
import a2_line from '../../../assets/images/StartPage/map-A2-Line.svg';
import b1_line from '../../../assets/images/StartPage/map-B1-Line.svg';
import b2_line from '../../../assets/images/StartPage/map-B2-Line.svg';
import c1_line from '../../../assets/images/StartPage/map-C1-Line.svg';
import c2_line from '../../../assets/images/StartPage/map-C2-Line.svg';


import checkMark from '../../../assets/images/StartPage/checkMark.svg';




import circle_block_about_country from '../../../assets/images/circle_block_about_country.png';



// import liechtenshtein_country from '../../../assets/images/liechtenshtein_country.png';

import liechtenshtein_country from '../../../assets/images/StartPage/liechtenshtein-active-country.svg';
import luxembourg_country from '../../../assets/images/StartPage/luxembourg-active-country.svg';
import switzerland_country from '../../../assets/images/StartPage/switzerland-active-country.svg';
import austria_country from '../../../assets/images/StartPage/austria-active-country.svg';
import germany_country from '../../../assets/images/StartPage/germany-active-country.svg';
import belgium_country from '../../../assets/images/StartPage/belgium-active-country.svg';


import country_underline from '../../../assets/images/StartPage/country-underline.svg';




const StudyByTravelling = () => {

  const [toggleA1Level, setToggleA1Level] = useState(true);
  const [toggleA2Level, setToggleA2Level] = useState(false);
  const [toggleB1Level, setToggleB1Level] = useState(false);
  const [toggleB2Level, setToggleB2Level] = useState(false);
  const [toggleC1Level, setToggleC1Level] = useState(false);
  const [toggleC2Level, setToggleC2Level] = useState(false);


  const toggleStateA1Level = () => {
    
    if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level);
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    }
  }


  const toggleStateA2Level = () => {

    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleA2Level) {
      setToggleA2Level(!toggleA2Level);
    }
  }


  const toggleStateB1Level = () => {

    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleB1Level) {
      setToggleB1Level(!toggleB1Level);
    }
  }


  const toggleStateB2Level = () => {

    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level)
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleB2Level) {
      setToggleB2Level(!toggleB2Level);
    }
  }

  const toggleStateC1Level = () => {

    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level)
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC2Level) {
      setToggleC2Level(!toggleC2Level)
    }

    if (!toggleC1Level) {
      setToggleC1Level(!toggleC1Level);
    }
  }

  const toggleStateC2Level = () => {

    if (toggleA1Level) {
      setToggleA1Level(!toggleA1Level);
    } else if (toggleA2Level) {
      setToggleA2Level(!toggleA2Level)
    } else if (toggleB1Level) {
      setToggleB1Level(!toggleB1Level)
    } else if (toggleB2Level) {
      setToggleB2Level(!toggleB2Level)
    } else if (toggleC1Level) {
      setToggleC1Level(!toggleC1Level)
    }

    if (!toggleC2Level) {
      setToggleC2Level(!toggleC2Level);
    }
  }
  


        
  return (
    
    <div id={'course'}>

      <div className={s.studyAndTravelWrapper}>

        <div className={s.leftPartText}>
          <h2>Вивчай німецьку подорожуючи!</h2>

          <img className={s.studyByTravellingUnderline} src={studyByTravellingUnderline} />
          
          <div className={s.informationAboutCountry}>
            <h3> <span className={s.amount}>5</span> країн</h3>

            <span className={s.aboutCountry}>Протягом повноціного та поетапного курсу ви не тільки познайомишся з улюбленими героями 
              та навіть відвідаєте 5 німецькомовних країн. Навчання з нами дає можливість подорожувати по них, 
              як Баррі Аллен ( серіал Флеш). Сьогодні ви в Ліхтенштейні(А1), а завтра в Німеччині(С1). </span>
          </div>
          

          <div className={s.levelsCircle}>
            <h3> <span className={s.amount}>5</span> рівнів:</h3>

            <div className={s.A1_circle} onClick={toggleStateA1Level}>
              {toggleA1Level ? 
                <div className={s.A1_circle_active}>
                  <img src={levels_A1_active} />
                  <span>A1</span>
                </div>    
                :    
                <div className={s.A1_circle_NO_active}>
                  <img src={levels_A1} />
                  <span>A1</span>
                </div>      
              }
            </div>

            
            <div className={s.A2_circle} onClick={toggleStateA2Level}>
              {toggleA2Level ? 
                <div className={s.A2_circle_active}>
                  <img src={levels_A2_active} />
                  <span>A2</span>
                </div>
                :    
                <div className={s.A2_circle_NO_active}>
                  <img src={levels_A2} />
                  <span>A2</span>
                </div>  
              }
            </div>
          

            <div className={s.B1_circle} onClick={toggleStateB1Level}>
              {toggleB1Level ? 
                <div className={s.B1_circle_active}>
                  <img src={levels_B1_active} />
                  <span>B1</span>
                </div>
                :    
                <div className={s.B1_circle_NO_active}>
                  <img src={levels_B1} />
                  <span>B1</span>
                </div>
              }
            </div>


            <div className={s.B2_circle} onClick={toggleStateB2Level}>
              {toggleB2Level ? 
                <div className={s.B2_circle_active}>
                  <img src={levels_B2_active} />
                  <span>B2</span>
                </div>
                :    
                <div className={s.B2_circle_NO_active}>
                  <img src={levels_B2} />
                  <span>B2</span>
                </div>
              }
            </div>

            <div className={s.C1_circle} onClick={toggleStateC1Level}>
              {toggleC1Level ? 
                <div className={s.C1_circle_active}>
                  <img src={levels_C1_active} />
                  <span>C1</span>
                </div>
                :    
                <div className={s.C1_circle_NO_active}>
                  <img src={levels_C1} />
                  <span>C1</span>
                </div>
              }              
            </div>

            <div className={s.C2_circle} onClick={toggleStateC2Level}>
              {toggleC2Level ? 
                <div className={s.C2_circle_active}>
                  <img src={levels_C2_active} />
                  <span>?</span>
                </div>
                :    
                <div className={s.C2_circle_NO_active}>
                  <img src={levels_C2} />
                  <span>?</span>
                </div>
              }   
            </div>

          </div>

        </div>




        <div className={s.rightPartCountries}>
          {toggleC2Level ? 
            <img className={s.belgium_country} src={belgium_active} alt="" />
            : 
            <img className={s.belgium_country} src={belgium} onClick={toggleStateC2Level} alt="" />
          }

          {toggleC1Level ? 
            <img className={s.german_country} src={germany_active} alt="" />
            : 
            <img className={s.german_country} src={germany} onClick={toggleStateC1Level} alt="" />
          }

          {toggleB2Level ? 
            <img className={s.austria_country} src={austria_active} alt="" />
            : 
            <img className={s.austria_country} src={austria} onClick={toggleStateB2Level} alt="" />
          }

          {toggleB1Level ? 
            <img className={s.switzerland_country} src={switzerland_active} alt="" />
            : 
            <img className={s.switzerland_country} src={switzerland} onClick={toggleStateB1Level} alt="" />
          }

          {toggleA2Level ? 
            <img className={s.luxembourg_country} src={luxembourg_active} alt="" />
            : 
            <img className={s.luxembourg_country} src={luxembourg} onClick={toggleStateA2Level} alt="" />
          }
          
          {toggleA1Level ? 
            <img className={s.liechtenstein_country} src={liechtenstein_active} alt="" />  
            : 
            <img className={s.liechtenstein_country} src={liechtenstein} onClick={toggleStateA1Level} alt="" />  
          }

          

          <img className={s.a1_line} src={a1_line} />
          <img className={s.a2_line} src={a2_line} />
          <img className={s.b1_line} src={b1_line} />
          <img className={s.b2_line} src={b2_line} />
          <img className={s.c1_line} src={c1_line} />
          <img className={s.c2_line} src={c2_line} />



          <div className={s.A1_map_circle}>
            {toggleA1Level ? 
              <div className={s.A1_map_circle_active}>
                <img src={levels_A1_active} />
                <span>A1</span>
              </div>
              : 
              <div className={s.A1_map_circle_NO_active} onClick={toggleStateA1Level}>
                <img src={levels_A1} />
                <span>A1</span>
              </div>
            }  
          </div>
            

          <div className={s.A2_map_circle}>
            {toggleA2Level ? 
              <div className={s.A2_map_circle_active}>
                <img src={levels_A2_active} />
                <span>A2</span>
              </div>
              : 
              <div className={s.A2_map_circle_NO_active} onClick={toggleStateA2Level}>
                <img src={levels_A2} />
                <span>A2</span>
              </div>
            }  
          </div>
            

          <div className={s.B1_map_circle}>
            {toggleB1Level ? 
              <div className={s.B1_map_circle_active}>
                <img src={levels_B1_active} />
                <span>B1</span>
              </div>
              : 
              <div className={s.B1_map_circle_NO_active} onClick={toggleStateB1Level}>
                <img src={levels_B1} />
                <span>B1</span>
              </div>
            }  
          </div>


          <div className={s.B2_map_circle}>
            {toggleB2Level ? 
              <div className={s.B2_map_circle_active}>
                <img src={levels_B2_active} />
                <span>B2</span>
              </div>
              : 
              <div className={s.B2_map_circle_NO_active} onClick={toggleStateB2Level}>
                <img src={levels_B2} />
                <span>B2</span>
              </div>
            }  
          </div>


          <div className={s.C1_map_circle}>
            {toggleC1Level ? 
              <div className={s.C1_map_circle_active}>
                <img src={levels_C1_active} />
                <span>C1</span>
              </div>
              : 
              <div className={s.C1_map_circle_NO_active} onClick={toggleStateC1Level}>
                <img src={levels_C1} />
                <span>C1</span>
              </div>
            }  
          </div>   


          <div className={s.C2_map_circle}>
            {toggleC2Level ? 
              <div className={s.C2_map_circle_active}>
                <img src={levels_C2_active} />
                <span>?</span>
              </div>
              : 
              <div className={s.C2_map_circle_NO_active} onClick={toggleStateC2Level}>
                <img src={levels_C2} />
                <span>?</span>
              </div>
            }                
          </div>   

        </div>
      </div>  



















      <div className={s.singleCountryBlock}>
        {(() => {
          if (toggleA1Level) {
            return (
              <h1 className={s.liechtenshteinTitle} >LIECHTENSTEIN</h1>
            )
          } else if (toggleA2Level) {
            return (
              <h1 className={s.luxembourgTitle} >LUXEMBURG</h1>
            )
          } else if (toggleB1Level) {
            return (
              <h1 className={s.switzerlandTitle} >DIE SCHWEIZ</h1>
            )
          } else if (toggleB2Level) {
            return (
              <h1 className={s.austriaTitle} >ÖSTERREICH</h1>
            )
          } else if (toggleC1Level) {
            return (
              <h1 className={s.germanyTitle} >DEUTSCHLAND</h1>
            )
          } else if (toggleC2Level) {
            return (
              <h1 className={s.belgiumTitle} >BELGIEN</h1>
            )
          }
        })()}

        <div className={s.singleCountryAbout}>
          <div className={s.part_photo_country}>
            {(() => {
              if (toggleA1Level) {
                return (
                  <img src={liechtenshtein_country} className={s.liechtenshtein_country} />
                )
              } else if (toggleA2Level) {
                return (
                  <img src={luxembourg_country} className={s.luxembourg_country} />
                )
              } else if (toggleB1Level) {
                return (
                  <img src={switzerland_country} className={s.switzerland_country} />
                )
              } else if (toggleB2Level) {
                return (
                  <img src={austria_country} className={s.austria_country} />
                )
              } else if (toggleC1Level) {
                return (
                  <img src={germany_country} className={s.germany_country} />
                )
              } else if (toggleC2Level) {
                return (
                  <img src={belgium_country} className={s.belgium_country} />
                )
              }
            })()}

            <img className={s.line_under_country} src={country_underline} />
          </div>

          <div className={s.part_about_country}>
            

            {(() => {
              if (toggleA1Level) {
                return (
                  <div className={s.title_about_country}>
                    <div className={s.A1_circle_active}>
                      <img src={levels_A1_active} />
                      <span>A1</span>
                    </div>

                    <h2>- Ліхтенштейн</h2>
                  </div>
                )
              } else if (toggleA2Level) {
                return (
                  <div className={s.title_about_country}>
                    <div className={s.A2_circle_active}>
                      <img src={levels_A2_active} />
                      <span>A2</span>
                    </div>

                    <h2>- Люксембург</h2>
                  </div>
                )
              } else if (toggleB1Level) {
                return (
                  <div className={s.title_about_country}>
                    <div className={s.B1_circle_active}>
                      <img src={levels_B1_active} />
                      <span>B1</span>
                    </div>

                    <h2>- Швейцарія</h2>
                  </div>
                )
              } else if (toggleB2Level) {
                return (
                  <div className={s.title_about_country}>
                    <div className={s.B2_circle_active}>
                      <img src={levels_B2_active} />
                      <span>B2</span>
                    </div>

                    <h2>- Австрія</h2>
                  </div>
                )
              } else if (toggleC1Level) {
                return (
                  <div className={s.title_about_country}>
                    <div className={s.C1_circle_active}>
                      <img src={levels_C1_active} />
                      <span>C1</span>
                    </div>

                    <h2>- Німеччина</h2>
                  </div>
                )
              } else if (toggleC2Level) {
                return (
                  <div className={s.title_about_country}>
                    <div className={s.C2_circle_active}>
                      <img src={levels_C2_active} />
                      <span>?</span>
                    </div>

                    <h2>- Бельгія</h2>
                  </div>
                )
              }
            })()}

            
                  

            <p>Зазвичай, цй рівень є найкоротшим і відповідає примітивному рівню і в подільшому людина 
                    неодноразово повертається до матеріалу цього рівня, щоб пригадати елементарні речі, 
                    проте ми вважаємо, що початковий рівень є чиненайважливішим, тому що тут, в Люксимбургу, 
                    будується основа. Ви виробляєте так зване відчуття мови, звикаєте до методики та будете по 
                    завершенню рівня вміти: </p>

            <div className={s.point_list}>
              <img src={checkMark} />
              <span>Розуміння простих фраз в повільному та чіткому мовленні;</span>
            </div>

            <div className={s.point_list}>
              <img src={checkMark} />
              <span>Граматика: ви будете ознайомленні з так званою основою: особами, прийменниками, 
                      відмінюванням, питаннями, всіма часовими формами, наказовим способом і багато іншого. </span>
            </div>

            <div className={s.point_list}>
              <img src={checkMark} />
              <span>ви будете розуміти оголошення і нескладні тексти.</span>
            </div>

            <div className={s.point_list}>
              <img src={checkMark} />
              <span>на цьому етапі вам вже будуть навіть зустрічатись частинки фільмів, пісень і цікавих відео.</span>
            </div>

          </div>

        </div>
      </div>
 


 









      




{/* 

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
                <img src={levels_A1_active} />
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

 */}




    </div>
  );

}


export default StudyByTravelling;