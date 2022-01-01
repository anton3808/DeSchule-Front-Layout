import React, { useEffect, useState } from 'react'
import Trash from '../../../assets/ComponentsSVG/Trash'
import axios from 'axios';

import './OneDay.scss'
import { BASE_URL } from '../../../constants';
import { useSelector } from 'react-redux';

const OneDay = ({ item, pos, getTasks }) => {

    const [token, setToken] = useState('')

    const { dataUser } = useSelector(state => state.auth)

    useEffect(() => {
        if (dataUser.access_token) {
            setToken(dataUser.access_token)
        }
    }, [dataUser])

    const deleteItem = (id) => {
        axios.delete(`${BASE_URL}/schedule/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }).then(res => {
            console.log(res)
            getTasks()
        })
    }

    return (
        <div className={pos % 2 === 0 ? 'lineScheuleTimeInDay' : 'lineScheuleTimeInDay lineScheuleTimeInDayPair'}>
            <div className="lineScheuleTimeInDay__leftBlock">
                <h4>{item.date.split(' ')[1].slice(0, 5)}</h4>
                <div className="lineScheuleTimeInDay__taskBlock">
                    <span>{item.title}</span>
                    <span>{item.description}</span>
                </div>
            </div>
            <div onClick={() => deleteItem(item.id)} className="lineScheuleTimeInDay__trash">
                <Trash />
            </div>
        </div>
    )
}

export default OneDay
