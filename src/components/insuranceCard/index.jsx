import React from 'react'
import { details } from '../../data'
import List from '../../UI/List'


const InsuranceCard = () => {
    return (
        <div className='InsuranceCard_wrapper container'>
            <div className="lists">
                <h4> Test name </h4>
                <h4> Amount </h4>
                <small className='date_heading'> Date </small>
                <small className='action_heading'> Action </small>
            </div>
            {
                details.map(({ id, name, amount, date, action }) => {
                    return (
                        <List className="InsuranceCards_cards lists" key={id} >
                            <h4> {name} </h4>
                            <h4> {amount} </h4>
                            <small className='date'> {date} </small>
                            <small className='action'> {action} </small>
                        </List>
                    )
                })
            }
        </div>
    )
}

export default InsuranceCard
