import React, {useState} from 'react'
import s from '../../Lessons.module.css';


const ProgressBar = (props) => {


  return (
    <div className={s.progressBarWrapper}>
        <span className={s.progressBarWrapperTitle}>Етапи уроку:</span>

        <div className={s.progressBar}>
            <div className={s.wrapperProgressBar_block} style={{width: "17%"}}>
                <h5 className={s.progressBar_title} style={{color: "#E5AAAA"}}>Intro</h5>
                <div className={s.progressBar_block}>
                    <span className={s.progressBar_block_line} id={s.first_progressBar_block_line}></span>
                    <span className={s.progressBar_block_active} id={s.first_progressBar_block_active} style={{width: "85%"}}></span>
                </div>
                    
            </div>

            <div className={s.wrapperProgressBar_block} style={{width: "17%"}}>
                <h5 className={s.progressBar_title}>Перевірка тексту</h5>
                <div className={s.progressBar_block}>
                    <span className={s.progressBar_block_line}></span>
                    <span className={s.progressBar_block_active} style={{width: "0%"}}></span>
                </div>
            </div>

            <div className={s.wrapperProgressBar_block} style={{width: "17%"}}>
                <h5 className={s.progressBar_title}>Лексика</h5>
                <div className={s.progressBar_block}>
                    <span className={s.progressBar_block_line}></span>
                    <span className={s.progressBar_block_active} style={{width: "0%"}}></span> 
                </div>
            </div>

            <div className={s.wrapperProgressBar_block} style={{width: "17%"}}>
                <h5 className={s.progressBar_title}>Граматика</h5>
                <div className={s.progressBar_block}>
                    <span className={s.progressBar_block_line}></span>
                    <span className={s.progressBar_block_active} style={{width: "0%"}}></span>
                </div>
            </div>

            <div className={s.wrapperProgressBar_block} style={{width: "17%"}}>
                <h5 className={s.progressBar_title}>Граматика</h5>
                <div className={s.progressBar_block}>
                    <span className={s.progressBar_block_line}></span>
                    <span className={s.progressBar_block_active} style={{width: "0%"}}></span>
                </div>
            </div>

            <div className={s.wrapperProgressBar_block} style={{width: "17%"}}>
                <h5 className={s.progressBar_title}>Медіа</h5>
                <div className={s.progressBar_block}>
                    <span className={s.progressBar_block_line} id={s.last_progressBar_block_line}></span>
                    <span className={s.progressBar_block_active} id={s.last_progressBar_block_line} style={{width: "0%"}}></span>
                </div>
            </div>

        </div>
    </div>

  )
}


export default ProgressBar;