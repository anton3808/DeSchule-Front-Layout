import React, {useState} from 'react'

import s from '../Lessons.module.css';

import ProgressBar from './Components/ProgressBar';
import BlockIntro from './Components/BlockIntro';
import BlockReadAndTranslate from './Components/BlockReadAndTranslate';
import BlockGrammarTasks from './Components/BlockGrammarTasks';
import FooterLesson from './Components/FooterLesson';
import BlockMediaTask from './Components/BlockMediaTask';



const Lesson_2 = (props) => {

  return (
    <div className={s.wrapperLesson}>
        <ProgressBar />

        <h1 className={s.titleOfLesson}>Урок 2</h1>

        <BlockIntro />

        <BlockReadAndTranslate />

        <BlockGrammarTasks />

        <BlockMediaTask />

        <FooterLesson />

    </div>
  )

}


export default Lesson_2;