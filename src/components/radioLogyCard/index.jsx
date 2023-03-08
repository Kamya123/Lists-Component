import React from 'react'
import { details } from '../../data'
import List from '../../UI/List'


const RadiologyCard = () => {
    return (
        <div className='RadiologyCard_wrapper container'>
            <div className="lists">
                <h4> Test name </h4>
                <small className='date_heading'> Date </small>
                <small className='action_heading'> Action </small>
            </div>
            {
                details.map(({ id, name, date, action }) => {
                    return (
                        <List className="RadiologyCards_cards lists" key={id} >
                            <h4> {name} </h4>
                            <small className='date'> {date} </small>
                            <small className='action'> {action} </small>
                        </List>
                    )
                })
            }
        </div>
    )
}

export default RadiologyCard