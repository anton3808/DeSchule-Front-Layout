import React from 'react'

import './OneDay.scss'

const OneDay = ({ item, pos }) => {
    return (
        <div className={pos % 2 === 0 ? 'lineScheuleTimeInDay' : 'lineScheuleTimeInDay lineScheuleTimeInDayPair'}>
            <h4>{item.date.split(' ')[1].slice(0, 5)}</h4>
            <div className="lineScheuleTimeInDay__taskBlock">
                <span>{item.title}</span>
                <span>{item.description}</span>
            </div>

        </div>
    )
}

export default OneDay
