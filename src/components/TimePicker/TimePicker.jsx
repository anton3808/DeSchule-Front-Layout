import React, { useEffect, useState } from 'react'

import './TimePicker.scss'

import TimeKeeper from 'react-timekeeper';

const TimePicker = ({ active, setActive, setTimeTask }) => {

    const [time, setTime] = useState('12:34')

    useEffect(() => {
        setTimeTask(time)
    }, [time])

    return (
        <div className={active ? `timePicker active` : `timePicker`} onClick={() => setActive(false)}>
            <div onClick={(e) => e.stopPropagation()}>
                <TimeKeeper
                    onDoneClick={() => setActive(false)}
                    time={time}
                    onChange={(newTime) => setTime(newTime.formatted24)}
                />
            </div>
        </div>
    )
}

export default TimePicker
