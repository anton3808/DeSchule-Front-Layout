import React, { useState } from 'react'

import './TimePicker.scss'

import TimeKeeper from 'react-timekeeper';

const TimePicker = ({active, setActive}) => {

    const [time, setTime] = useState('12:34')

    return (
        <div className={active ? `timePicker active` : `timePicker`} onClick={() => setActive(false)}>
            {/* <div className={active ? 'timePicker__content active' : 'timePicker__content'} onClick={(e) => e.stopPropagation()}> */}
                <TimeKeeper
                    time={time}
                    onChange={(newTime) => setTime(newTime.formatted24)}
                />
            {/* </div> */}
        </div>
    )
}

export default TimePicker
