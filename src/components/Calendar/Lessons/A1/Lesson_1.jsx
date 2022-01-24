import React, {useState} from 'react'

import ProgressBar from './Components/ProgressBar.jsx';
import BlockIntro from './Components/BlockIntro.jsx';
import BlockVocabulary from './Components/BlockVocabulary.jsx';
import FooterLesson from './Components/FooterLesson.jsx';
import BlockGrammar from './Components/BlockGrammar.jsx';
import BlockCards from './Components/BlockCards.jsx';

import s from '../Lessons.module.css';

import BlockDialog from './Components/BlockDialog.jsx';


const Lesson_1 = (props) => {


  return (
    <div className={s.wrapperLesson}>

        <ProgressBar />

        <h1 className={s.titleOfLesson}>Урок 1</h1>

        <BlockIntro />

        <BlockVocabulary />

        <BlockCards />
        
        <BlockDialog />

        <BlockGrammar />

        <FooterLesson />

    </div>
  )
}


export default Lesson_1;