import React, { useState, useEffect, useRef } from 'react'
import s from './Calendar.module.css';

import map_calendar from '../../assets/images/map_calendar.png';
import mapCalendar from '../../assets/images/mapCalendar.png';

import Chevron from '../../assets/images/chevron.svg';
import Chevron_black from '../../assets/images/Chevron_black.png';

import A1_map_calendar from '../../assets/images/A1_map_calendar.png';
import A2_map_calendar from '../../assets/images/A2_map_calendar.png';
import B1_map_calendar from '../../assets/images/B1_map_calendar.png';
import B2_map_calendar from '../../assets/images/B2_map_calendar.png';
import C1_map_calendar from '../../assets/images/C1_map_calendar.png';

import liechtenshtein_country from '../../assets/images/liechtenshtein_country.png';
import switzerland_country from '../../assets/images/switzerland_country.png';
import luxembourg_country from '../../assets/images/luxembourg_country.png';
import austria_country from '../../assets/images/austria_country.png';
import germany_country from '../../assets/images/germany_country.png';


import line_A1_calendar from '../../assets/images/line_A1_calendar.png';
import line_A2_calendar from '../../assets/images/line_A2_calendar.png';
import line_B1_calendar from '../../assets/images/line_B1_calendar.png';
import line_B2_calendar from '../../assets/images/line_B2_calendar.png';
import line_C1_calendar from '../../assets/images/line_C1_calendar.png';


import point_img_hw from '../../assets/images/point_img_hw.png';


import arrow_back_month from '../../assets/images/arrow_back_month.png';
import arrow_next_month from '../../assets/images/arrow_next_month.png';


import circle_red_calendar_point from '../../assets/images/circle_red_calendar_point.png';
import circle_blue_calendar_point from '../../assets/images/circle_blue_calendar_point.png';
import circle_yellow_calendar_point from '../../assets/images/circle_yellow_calendar_point.png';
import circle_green_calendar_point from '../../assets/images/circle_green_calendar_point.png';

import calendar_day_indecator from '../../assets/images/calendar_day_indecator.png';
import arrow_next_day from '../../assets/images/arrow_next_day.png';
import calendarAddNewTask from '../../assets/images/calendarAddNewTask.svg';
import stoneDownTitle from '../../assets/images/stoneDownTitle.png';

import btnStartHeader from '../../assets/images/btnStartHeader.png';

import './Calendar.scss'
import TimePicker from '../TimePicker/TimePicker';
import axios from 'axios';

import { BASE_URL } from '../../constants/index'
import { useSelector } from 'react-redux';
import OneDay from './OneDay/OneDay';



const Calendar = (props) => {

  // const [toggleA1, toggleA2, toggleB1, toggleB2, toggleC1, setToggleA1, setToggleA2, setToggleB1, setToggleB2, setToggleC1] = useState(false);
  const [toggleA1, setToggleA1] = useState(false);
  const [toggleA2, setToggleA2] = useState(false);
  const [toggleB1, setToggleB1] = useState(false);
  const [toggleB2, setToggleB2] = useState(false);
  const [toggleC1, setToggleC1] = useState(false);


  const [heightElA1, setHeightElA1] = useState();
  const [heightElA2, setHeightElA2] = useState();
  const [heightElB1, setHeightElB1] = useState();
  const [heightElB2, setHeightElB2] = useState();
  const [heightElC1, setHeightElC1] = useState();

  const [activePicker, setActivePicker] = useState(false)

  const [selectType, setSelectType] = useState(1)


  const [dayOrMonth, setDayOrMonth] = useState('day')
  const [currentMonth, setCurrentMonth] = useState('')
  const [currentDay, setCurrentDay] = useState({})
  const [tomorrowDay, setTomorrowDayDay] = useState({})

  const [error, setError] = useState('')

  const [tasksArr, setTasksArr] = useState([])

  const [countDays, setCountDays] = useState(0)

  const [lesson, setLesson] = useState('Урок 1')
  const [homework, setHomework] = useState('Домашнее задание 1')
  const [dopTask, setDopTasks] = useState('Доп задание 1')

  const [titleTask, setTitleTask] = useState('')
  const [descriptionTask, setDescriptionTask] = useState('')
  // const [dateAndTime, setDateAndTime] = useState('')

  const [timeTask, setTimeTask] = useState('00:00')

  const [token, setToken] = useState('')

  const { dataUser } = useSelector(state => state.auth)

  const day = new Date()
  const tomorrow = new Date()



  useEffect(() => {
    if (dataUser.access_token) {
      setToken(dataUser.access_token)
    }
  }, [dataUser])


  useEffect(() => {
    getTasks()
  }, [token])

  useEffect(() => {
    console.log(`${currentDay.day < 10
      ? `0${currentDay.day}`
      : currentDay.day
      }.${currentDay.month < 10
        ? `0${currentDay.month}`
        : currentDay.month
      }.${currentDay.year}`)
    tasksArr.filter(el => el.date.split(' ')[0] === `${currentDay.day < 10
      ? `0${currentDay.day}`
      : currentDay.day
      }.${currentDay.month < 10
        ? `0${currentDay.month}`
        : currentDay.month
      }.${currentDay.year}`)
  }, [tasksArr])

  useEffect(() => {
    // console.log('daydayday', day);
    // tomorrow.setDate(tomorrow.getDate() + 1)
    // // day.setDate(day.getDate() + 10)
    // console.log('tomorrowtomorrow', tomorrow);
    // setCurrentDay({
    //   day: day.getDate(),
    //   month: day.getMonth() + 1,
    //   year: day.getFullYear()
    // })
    // setTomorrowDayDay({
    //   day: tomorrow.getDate(),
    //   month: tomorrow.getMonth() + 1,
    //   year: tomorrow.getFullYear()
    // })
    setCurrentMonth(day.getMonth())
    // console.log('day', day.getMonth());
  }, [])

  useEffect(() => {
    day.setDate(day.getDate() + countDays)
    tomorrow.setDate(tomorrow.getDate() + 1 + countDays)
    // day.setDate(day.getDate() + 10)
    console.log('dayday', day);
    console.log('tomorrowtomorrow', tomorrow);

    setCurrentDay({
      day: day.getDate(),
      month: day.getMonth() + 1,
      year: day.getFullYear()
    })
    setTomorrowDayDay({
      day: tomorrow.getDate(),
      month: tomorrow.getMonth() + 1,
      year: tomorrow.getFullYear()
    })
  }, [countDays])


  const refHeightA1 = useRef()
  const refHeightA2 = useRef()
  const refHeightB1 = useRef()
  const refHeightB2 = useRef()
  const refHeightC1 = useRef()


  useEffect(() => {
    console.log(refHeightA1);
    setHeightElA1(`${refHeightA1.current.scrollHeight}px`);

    console.log(refHeightA2);
    setHeightElA2(`${refHeightA2.current.scrollHeight}px`);

    console.log(refHeightB1);
    setHeightElB1(`${refHeightB1.current.scrollHeight}px`);

    console.log(refHeightB2);
    setHeightElB2(`${refHeightB2.current.scrollHeight}px`);

    console.log(refHeightC1);
    setHeightElC1(`${refHeightC1.current.scrollHeight}px`);

  }, [])



  const toggleStateA1 = () => {

    if (toggleA2) {
      setToggleA2(!toggleA2);
    } else if (toggleB1) {
      setToggleB1(!toggleB1)
    } else if (toggleB2) {
      setToggleB2(!toggleB2)
    } else if (toggleC1) {
      setToggleC1(!toggleC1)
    }

    setToggleA1(!toggleA1);
  }

  const toggleStateA2 = () => {

    if (toggleA1) {
      setToggleA1(!toggleA1);
    } else if (toggleB1) {
      setToggleB1(!toggleB1)
    } else if (toggleB2) {
      setToggleB2(!toggleB2)
    } else if (toggleC1) {
      setToggleC1(!toggleC1)
    }

    setToggleA2(!toggleA2);
  }
  const toggleStateB1 = () => {

    if (toggleA1) {
      setToggleA1(!toggleA1);
    } else if (toggleA2) {
      setToggleA2(!toggleA2)
    } else if (toggleB2) {
      setToggleB2(!toggleB2)
    } else if (toggleC1) {
      setToggleC1(!toggleC1)
    }

    setToggleB1(!toggleB1)
  }
  const toggleStateB2 = () => {

    if (toggleA1) {
      setToggleA1(!toggleA1);
    } else if (toggleA2) {
      setToggleA2(!toggleA2)
    } else if (toggleB1) {
      setToggleB1(!toggleB1)
    } else if (toggleC1) {
      setToggleC1(!toggleC1)
    }

    setToggleB2(!toggleB2)
  }
  const toggleStateC1 = () => {

    if (toggleA1) {
      setToggleA1(!toggleA1);
    } else if (toggleA2) {
      setToggleA2(!toggleA2)
    } else if (toggleB1) {
      setToggleB1(!toggleB1)
    } else if (toggleB2) {
      setToggleB2(!toggleB2)
    }

    setToggleC1(!toggleC1)
  }

  const getTasks = () => {
    if (token) {
      axios.get(`${BASE_URL}/schedule`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }).then(res => {
        console.log('allTasks', res.data.data);
        // res.data.data.forEach(el => {
        //   console.log(el.date, +el.date.split(' ')[1].split(':')[0] * 60 + +el.date.split(' ')[1].split(':')[1]);
        // })

        // console.log(res.data.data
        //   .sort((a, b) => (+a.date.split(' ')[1].split(':')[0] * 60 + +a.date.split(' ')[1].split(':')[1]) - (+b.date.split(' ')[1].split(':')[0] * 60 + +b.date.split(' ')[1].split(':')[1])));

        setTasksArr(res.data.data.sort((a, b) => (+a.date.split(' ')[1].split(':')[0] * 60 + +a.date.split(' ')[1].split(':')[1]) - (+b.date.split(' ')[1].split(':')[0] * 60 + +b.date.split(' ')[1].split(':')[1])))
      }).catch(e => console.log(e))
    }
  }

  const createTask = () => {
    setError('')
    axios.post(`${BASE_URL}/schedule`, {
      event_type_id: selectType,
      title: selectType === 1 ? lesson : selectType === 2 ? homework : selectType === 3 ? dopTask : titleTask,
      description: descriptionTask,
      date: `${currentDay.day}.${currentDay.month}.${currentDay.year} ${timeTask}`,
      link_id: selectType === 1 ? 2 : null,
    }, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${dataUser.access_token}`
      }
    }).then(res => {
      console.log('createTask', res);
      setTitleTask('')
      setDescriptionTask('')
      getTasks()
    }).catch(e => {
      console.log(e.response)
      setError(e.response.data.errors.date[0])
    })
    // console.log({
    //   event_type_id: selectType,
    //   title: titleTask,
    //   description: descriptionTask,
    //   date: `${currentDay.day}.${currentDay.month}.${currentDay.year} ${timeTask}`
    // });


  }

  const prevDay = () => {
    // day.setDate(day.getDate() - 1)
    // tomorrow.setDate(day.getDate() + 1)
    // // day.setDate(day.getDate() + 10)
    // console.log('tomorrowtomorrow', tomorrow);
    // setCurrentDay({
    //   day: day.getDate(),
    //   month: day.getMonth() + 1,
    //   year: day.getFullYear()
    // })
    // setTomorrowDayDay({
    //   day: tomorrow.getDate(),
    //   month: tomorrow.getMonth() + 1,
    //   year: tomorrow.getFullYear()
    // })
    setCountDays(prev => prev - 1)
  }

  const nextDay = () => {
    setCountDays(prev => prev + 1)
  }

  const whatInput = (type) => {
    if (selectType === 1) {
      return (<select onChange={(e) => setLesson(e.target.value)}>
        <option>Урок 1</option>
        <option>Урок 2</option>
        <option>Урок 3</option>
        <option>Урок 4</option>
      </select>)
    } else if (selectType === 2) {
      return (<select onChange={(e) => setHomework(e.target.value)}>
        <option>Домашнее задание 1</option>
        <option>Домашнее задание 2</option>
        <option>Домашнее задание 3</option>
        <option>Домашнее задание 4</option>
      </select>)
    } else if (selectType === 3) {
      return (<select onChange={(e) => setDopTasks(e.target.value)}>
        <option>Доп задание 1</option>
        <option>Доп задание 2</option>
        <option>Доп задание 3</option>
        <option>Доп задание 4</option>
      </select>)
    } else {
      return <input type="text" placeholder="Назва теми" value={titleTask} onChange={(e) => setTitleTask(e.target.value)} />
    }


  }


  // console.log(toggleA1);
  // console.log(toggleA2);
  // console.log(toggleB1);
  // console.log(toggleB2);
  // console.log(toggleC1);




  return (
    <div className={s.wrapperPage}>
      <div className={s.wrapperCalendar}>
        <div className={s.study_plan_wrapper}>
          <h2>План навчання:</h2>

          <div className={s.study_plan_block}>
            <div className={toggleA1 || toggleA2 || toggleB1 || toggleB2 || toggleC1 ? `${s.country_none}` : `${s.map_calendar_wrapper}`} >

              {/* <img src={}/>
            <img src={}/>
            <img src={}/>
            <img src={}/>
            <img src={}/> */}

              <img className={s.map_calendar} src={mapCalendar} />
              <img onClick={toggleStateA1} className={s.A1_map_calendar} src={A1_map_calendar} />
              <img onClick={toggleStateA2} className={s.A2_map_calendar} src={A2_map_calendar} />
              <img onClick={toggleStateB1} className={s.B1_map_calendar} src={B1_map_calendar} />
              <img onClick={toggleStateB2} className={s.B2_map_calendar} src={B2_map_calendar} />
              <img onClick={toggleStateC1} className={s.C1_map_calendar} src={C1_map_calendar} />

              <img className={s.line_A1_calendar} src={line_A1_calendar} />
              <img className={s.line_A2_calendar} src={line_A2_calendar} />
              <img className={s.line_B1_calendar} src={line_B1_calendar} />
              <img className={s.line_B2_calendar} src={line_B2_calendar} />
              <img className={s.line_C1_calendar} src={line_C1_calendar} />

            </div>


            <div className={toggleA1 ? `${s.liechtenshtein_country_wrapper}` : `${s.country_none}`} >
              <h1>LIECHTENSHTEIN</h1>
              <img className={s.liechtenshtein_country} src={liechtenshtein_country} />
            </div>

            <div className={toggleA2 ? `${s.luxembourg_country_wrapper}` : `${s.country_none}`} >
              <h1>LUXEMBOURG</h1>
              <img className={s.luxembourg_country} src={luxembourg_country} />
            </div>

            <div className={toggleB1 ? `${s.switzerland_country_wrapper}` : `${s.country_none}`} >
              <h1>SCHWEIZ</h1>
              <img className={s.switzerland_country} src={switzerland_country} />
            </div>



            <div className={toggleB2 ? `${s.austria_country_wrapper}` : `${s.country_none}`} >
              <h1>AUSTRIA</h1>
              <img className={s.austria_country} src={austria_country} />
            </div>

            <div className={toggleC1 ? `${s.germany_country_wrapper}` : `${s.country_none}`} >
              <h1>GERMANY</h1>
              <img className={s.germany_country} src={germany_country} />
            </div>





            <div className={s.accordion}>

              <div
                onClick={toggleStateA1}
                className={toggleA1 ? `${s.accordion_visible}` : `${s.A1_accardion}`} >
                <span>A1</span>
                <h3>ЛІХТЕНШТЕЙН</h3>

                {toggleA1 ? <img
                  className={`${s.toggleA1} ${s.active}`}
                  src={Chevron} /> : <img
                  className={`${s.toggleA1} ${s.active}`}
                  src={Chevron_black} />}




              </div>

              <div
                className={toggleA1 ? `${s.accordion_toggle} ${s.animated}` : `${s.accordion_toggle}`}
                style={{ height: toggleA1 ? `${heightElA1}` : "0px" }}
                ref={refHeightA1}
              >
                <div className={s.accordionLessons} aria-hidden={toggleA1 ? "true" : "false"}>

                  <div className={s.blockLessonPass}>
                    <div>
                      <span className={s.numberOfLesson}>Урок 1</span>
                      <span className={s.themeOfLesson}>Вивчення нових слів</span>
                    </div>
                    <div className={s.homeworkLink}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonActive}>
                    <div>
                      <span className={s.numberOfLesson}>Урок 2</span>
                      <span className={s.themeOfLesson}>Діалог</span>
                    </div>
                    <div className={s.homeworkLink}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 3</span>
                      <span className={s.themeOfLesson}>Особовий займенник</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>

                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 4</span>
                      <span className={s.themeOfLesson}>Дієслово</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 5</span>
                      <span className={s.themeOfLesson}>Закріплення пройденого матеріалу</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                </div>
              </div>




              <div
                onClick={toggleStateA2}
                className={toggleA2 ? `${s.accordion_visible}` : `${s.A2_accardion}`}>
                <span>A2</span>
                <h3>ЛЮКСЕМБУРГ</h3>

                {toggleA2 ? <img
                  className={`${s.toggleA2} ${s.active}`}
                  src={Chevron} /> : <img
                  className={`${s.toggleA2} ${s.active}`}
                  src={Chevron_black} />}

              </div>

              <div
                className={toggleA2 ? `${s.accordion_toggle} ${s.animated}` : `${s.accordion_toggle}`}
                style={{ height: toggleA2 ? `${heightElA2}` : "0px" }}
                ref={refHeightA2}
              >
                <div className={s.accordionLessons} aria-hidden={toggleA2 ? "true" : "false"}>
                  <div className={s.blockLessonPass}>
                    <div>
                      <span className={s.numberOfLesson}>Урок 1</span>
                      <span className={s.themeOfLesson}>Вивчення нових слів</span>
                    </div>
                    <div className={s.homeworkLink}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>

                  <div className={s.blockLessonPass}>
                    <div>
                      <span className={s.numberOfLesson}>Урок 2</span>
                      <span className={s.themeOfLesson}>Діалог</span>
                    </div>
                    <div className={s.homeworkLink}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLesson}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 3</span>
                      <span className={s.themeOfLesson}>Особовий займенник</span>
                    </div>

                    <div className={s.homeworkLinkActive}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>

                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 4</span>
                      <span className={s.themeOfLesson}>Дієслово</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 5</span>
                      <span className={s.themeOfLesson}>Закріплення пройденого матеріалу</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>
                </div>
              </div>



              <div
                onClick={toggleStateB1}
                className={toggleB1 ? `${s.accordion_visible}` : `${s.B1_accardion}`}>
                <span>B1</span>
                <h3>ШВЕЙЦАРІЯ</h3>

                {toggleB1 ? <img
                  className={`${s.toggleB1} ${s.active}`}
                  src={Chevron} /> : <img
                  className={`${s.toggleB1} ${s.active}`}
                  src={Chevron_black} />}

              </div>

              <div
                className={toggleB1 ? `${s.accordion_toggle} ${s.animated}` : `${s.accordion_toggle}`}
                style={{ height: toggleB1 ? `${heightElB1}` : "0px" }}
                ref={refHeightB1}
              >
                <div className={s.accordionLessons} aria-hidden={toggleB1 ? "true" : "false"}>

                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 1</span>
                      <span className={s.themeOfLesson}>Вивчення нових слів</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 2</span>
                      <span className={s.themeOfLesson}>Діалог</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 3</span>
                      <span className={s.themeOfLesson}>Особовий займенник</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>

                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 4</span>
                      <span className={s.themeOfLesson}>Дієслово</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 5</span>
                      <span className={s.themeOfLesson}>Закріплення пройденого матеріалу</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>
                </div>
              </div>




              <div
                onClick={toggleStateB2}
                className={toggleB2 ? `${s.accordion_visible}` : `${s.B2_accardion}`}>
                <span>B2</span>
                <h3>АВСТРІЯ</h3>

                {toggleB2 ? <img
                  className={`${s.toggleB2} ${s.active}`}
                  src={Chevron} /> : <img
                  className={`${s.toggleB2} ${s.active}`}
                  src={Chevron_black} />}

              </div>

              <div
                className={toggleB2 ? `${s.accordion_toggle} ${s.animated}` : `${s.accordion_toggle}`}
                style={{ height: toggleB2 ? `${heightElB2}` : "0px" }}
                ref={refHeightB2}
              >
                <div className={s.accordionLessons} aria-hidden={toggleB2 ? "true" : "false"}>
                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 1</span>
                      <span className={s.themeOfLesson}>Вивчення нових слів</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 2</span>
                      <span className={s.themeOfLesson}>Діалог</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 3</span>
                      <span className={s.themeOfLesson}>Особовий займенник</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>

                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 4</span>
                      <span className={s.themeOfLesson}>Дієслово</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 5</span>
                      <span className={s.themeOfLesson}>Закріплення пройденого матеріалу</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>
                </div>
              </div>


              <div
                onClick={toggleStateC1}
                className={toggleC1 ? `${s.accordion_visible}` : `${s.C1_accardion}`}>
                <span>C1</span>
                <h3>НІМЕЧЧИНА</h3>

                {toggleC1 ? <img
                  className={`${s.toggleC1} ${s.active}`}
                  src={Chevron} /> : <img
                  className={`${s.toggleC1} ${s.active}`}
                  src={Chevron_black} />}

              </div>

              <div
                className={toggleC1 ? `${s.accordion_toggle} ${s.animated}` : `${s.accordion_toggle}`}
                style={{ height: toggleC1 ? `${heightElC1}` : "0px" }}
                ref={refHeightC1}
              >
                <div className={s.accordionLessons} aria-hidden={toggleC1 ? "true" : "false"}>
                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 1</span>
                      <span className={s.themeOfLesson}>Вивчення нових слів</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 2</span>
                      <span className={s.themeOfLesson}>Діалог</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 3</span>
                      <span className={s.themeOfLesson}>Особовий займенник</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>

                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 4</span>
                      <span className={s.themeOfLesson}>Дієслово</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>


                  <div className={s.blockLessonNext}>
                    <div className={s.lessonTitle}>
                      <span className={s.numberOfLesson}>Урок 5</span>
                      <span className={s.themeOfLesson}>Закріплення пройденого матеріалу</span>
                    </div>

                    <div className={s.homeworkLinkNone}>
                      <div className={s.point_hw}></div>
                      <span>Домашня робота</span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

        </div>







        <div className={s.classScheule}>
          <h2>Графік занять</h2>
          <div className={s.calendarScale}>
            <button onClick={() => setDayOrMonth('day')} className={dayOrMonth === 'day' ? 'dayAndMonth active' : 'dayAndMonth'}>День</button>
            <button onClick={() => setDayOrMonth('month')} className={dayOrMonth === 'month' ? 'dayAndMonth active' : 'dayAndMonth'}>Місяць</button>
          </div>




          {dayOrMonth === 'day' &&
            <div className={s.calendarOfDay} >

              <div className={s.scheuleOfCurrentDay}>
                <div className={s.day_indicator}>
                  <img className={s.calendar_day_indecator} src={calendar_day_indecator} />
                  <h3 className={s.todayTitle}>{day.getDate() === currentDay.day && day.getMonth() + 1 === currentDay.month
                    ? 'СЬОГОДНІ:'
                    : `${currentDay.day < 10 ? `0${currentDay.day}` : currentDay.day}.${currentDay.month < 10 ? `0${currentDay.month}` : currentDay.month}.${currentDay.year}`}</h3>

                  <div className="blockControl">
                    <img onClick={() => prevDay()} className={day.getDate() === currentDay.day && day.getMonth() + 1 === currentDay.month
                      ? 'arrow_next_day deg180 notVisible'
                      : 'arrow_next_day deg180'} src={arrow_next_day} />
                    <span className={s.tomorrowTitle}>{`${tomorrowDay.day < 10 ? `0${tomorrowDay.day}` : tomorrowDay.day}.${tomorrowDay.month < 10 ? `0${tomorrowDay.month}` : tomorrowDay.month}.${tomorrowDay.year}`}</span>
                    <img onClick={() => nextDay()} className={'arrow_next_day'} src={arrow_next_day} />
                  </div>

                </div>

                {
                  tasksArr.filter(el => el.date.split(' ')[0] === `${currentDay.day < 10
                    ? `0${currentDay.day}`
                    : currentDay.day
                    }.${currentDay.month < 10
                      ? `0${currentDay.month}`
                      : currentDay.month
                    }.${currentDay.year}`).map((item, i) => {
                      return (
                        <OneDay key={i} getTasks={getTasks} item={item} pos={i} />
                      )
                    })
                }



                {/* <div className={`${s.lineScheuleTimeInDay} ${s.lineScheuleTimeInDayPair}`}>
                  <h4>18:45</h4>
                  <span>Спілкування</span>
                </div> */}
              </div>

              <div className={s.blockToAddNewTask}>
                <h3>ДОДАТИ НОВЕ ЗАВДАННЯ</h3>

                <div className={s.formToAddTask}>

                  {whatInput(selectType)}


                  <select
                    onChange={(e) => {
                      if (e.target.value === 'Урок') {
                        setSelectType(1)
                      } else if (e.target.value === 'Домашнє завдання') {
                        setSelectType(2)
                      } else if (e.target.value === 'Додаткові теми') {
                        setSelectType(3)
                      } else if (e.target.value === 'Інші справи') {
                        setSelectType(4)
                      }
                    }}
                  >
                    <option>Урок</option>
                    <option>Домашнє завдання</option>
                    <option>Додаткові теми</option>
                    <option>Інші справи</option>
                  </select>

                  <img src={calendarAddNewTask} className={s.calendarAddNewTask} onClick={() => setActivePicker(true)} />

                  <textarea value={descriptionTask} onChange={(e) => setDescriptionTask(e.target.value)} name="" id="" cols="30" rows="10" placeholder="Опис завдання"></textarea>



                  <div className={s.pointsForExplanation}>
                    <div className={s.lesson_point_color}>
                      <img src={circle_red_calendar_point} />
                      <span>Урок</span>
                    </div>
                    <div className={s.homework_point_color}>
                      <img src={circle_blue_calendar_point} />
                      <span>Домашнє завдання</span>
                    </div>
                    <div className={s.additional_topics_point_color}>
                      <img src={circle_yellow_calendar_point} />
                      <span>Додаткові теми</span>
                    </div>
                    <div className={s.other_hings_point_color}>
                      <img src={circle_green_calendar_point} />
                      <span>Інші справи</span>
                    </div>
                  </div>
                  <div onClick={() => createTask()} className='regisButton' >
                    <img src={btnStartHeader} />
                    <span>Зберегти</span>
                  </div>
                </div>
                <TimePicker setTimeTask={setTimeTask} active={activePicker} setActive={setActivePicker} />
              </div>
              {error && <div className='errorMessage'>{error}</div>}
            </div>}



          {dayOrMonth === 'month' &&
            <>
              {currentMonth === 11 && <div className={s.calendarDecember}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(10)} />
                  <span>ГРУДЕНЬ 2021</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(0)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div onClick={() => {
                    setCountDays(25 - currentDay.day)
                    setDayOrMonth('day')
                  }} className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div onClick={() => {
                    setCountDays(26 - currentDay.day)
                    setDayOrMonth('day')
                  }} className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div onClick={() => {
                    setCountDays(27 - currentDay.day)
                    setDayOrMonth('day')
                  }} className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div onClick={() => {
                    setCountDays(28 - currentDay.day)
                    setDayOrMonth('day')
                  }} className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div onClick={() => {
                    setCountDays(29 - currentDay.day)
                    setDayOrMonth('day')
                  }} className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div onClick={() => {
                    setCountDays(30 - currentDay.day)
                    setDayOrMonth('day')
                  }} className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div onClick={() => {
                    setCountDays(31 - currentDay.day)
                    setDayOrMonth('day')
                  }} className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}




              {currentMonth === 0 && <div className={s.calendarJanuary}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(11)} />
                  <span>СІЧЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(1)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}




              {currentMonth === 1 && <div className={s.calendarFebruary}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(0)} />
                  <span>ЛЮТИЙ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(2)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}






              {currentMonth === 2 && <div className={s.calendarMarch}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(1)} />
                  <span>БЕРЕЗЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(3)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}





              {currentMonth === 3 && <div className={s.calendarApril}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(2)} />
                  <span>КВІТЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(4)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                </div>
              </div>}





              {currentMonth === 4 && <div className={s.calendarMay}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(3)} />
                  <span>ТРАВЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(5)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}




              {currentMonth === 5 && <div className={s.calendarJune}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(4)} />
                  <span>ЧЕРВЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(6)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}






              {currentMonth === 6 && <div className={s.calendarJuly}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(5)} />
                  <span>ЛИПЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(7)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                </div>
              </div>}




              {currentMonth === 7 && <div className={s.calendarAugust}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(6)} />
                  <span>СЕРПЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(8)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}





              {currentMonth === 8 && <div className={s.calendarSeptember}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(7)} />
                  <span>ВЕРЕСЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(9)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>

                </div>
              </div>}






              {currentMonth === 9 && <div className={s.calendarOctober}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(8)} />
                  <span>ЖОВТЕНЬ 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(10)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}



              {currentMonth === 10 && <div className={s.calendarNovember}>
                <div className={s.month_indicator}>
                  <img className={s.arrow_back_month} src={arrow_back_month} onClick={() => setCurrentMonth(9)} />
                  <span>ЛИСТОПАД 2022</span>
                  <img className={s.arrow_next_month} src={arrow_next_month} onClick={() => setCurrentMonth(11)} />
                </div>
                <div className={s.day_of_week}>
                  <div className={s.monday_day_of_week}><span>Пн</span></div>
                  <div className={s.tuesday_day_of_week}><span>Вт</span></div>
                  <div><span>Ср</span></div>
                  <div><span>Чт</span></div>
                  <div><span>Пт</span></div>
                  <div><span>Сб</span></div>
                  <div className={s.sunday_day_of_week}><span>Нд</span></div>
                </div>


                <div className={s.date_grid}>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.first_day}`}>
                    <span className={s.numberOfDay}>1</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>2</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>3</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.currentDay}`}>

                    <span className={s.numberOfDay}>4</span>

                    <div className={s.scheuleOfDay}>
                      <div className={s.scheuleOfDayPoints}>
                        <img src={circle_red_calendar_point} />
                        <span>Спілкування</span>
                      </div>
                    </div>

                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>5</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>6</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>7</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>8</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>9</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>10</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>11</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>12</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>13</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>14</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>15</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>16</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>17</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>18</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>19</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>20</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>21</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>22</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>23</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>24</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>25</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>26</span>
                  </div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}>
                    <span className={s.numberOfDay}>27</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>28</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>29</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>30</span>
                  </div>
                  <div className={s.gridCalendarDay}>
                    <span className={s.numberOfDay}>31</span>
                  </div>
                  <div className={s.gridCalendarDay}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                  <div className={`${s.gridCalendarDay} ${s.weekendCalendar}`}></div>
                </div>
              </div>}

              <div className={s.pointsForExplanation}>
                <div className={s.lesson_point_color}>
                  <img src={circle_red_calendar_point} />
                  <span>Урок</span>
                </div>
                <div className={s.homework_point_color}>
                  <img src={circle_blue_calendar_point} />
                  <span>Домашнє завдання</span>
                </div>
                <div className={s.additional_topics_point_color}>
                  <img src={circle_yellow_calendar_point} />
                  <span>Додаткові теми</span>
                </div>
                <div className={s.other_hings_point_color}>
                  <img src={circle_green_calendar_point} />
                  <span>Інші справи</span>
                </div>
              </div>
            </>}






        </div>
      </div>

    </div >
  )
}


export default Calendar;