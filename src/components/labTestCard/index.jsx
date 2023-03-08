import React from 'react'
import { details } from '../../data'
import List from '../../UI/List'


const LabTestCard = () => {
    return (
        <div className='LabTestCard_wrapper container'>
            <div className="lists">
                <h4> Test name </h4>
                <small className='date_heading'> Date & Time </small>
                <small className='action_heading'> Action </small>
            </div>
            {
                details.map(({ id, name, date, view, print }) => {
                    return (
                        <List className="LabTestCards_cards lists" key={id} >
                            <h4> {name} </h4>
                            <small className='date'> {date} </small>
                            <div className='action'>
                                <small className='view'> {view} </small>
                                <small className='print'> {print} </small>
                            </div>
                        </List>
                    )
                })
            }
        </div>
    )
}

export default LabTestCard
