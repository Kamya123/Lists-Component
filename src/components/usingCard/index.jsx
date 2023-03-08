import React from 'react'
import { details } from '../../data'
import List from '../../UI/List'


const UsingCard = () => {
  return (
    <div className='usingCard_wrapper container'>
      <div className="lists">
        <h4> Doctor name </h4>
        <small className='special'> Specialization </small>
        <small className='date_heading'> Date </small>
        <small className='action_heading'> Action </small>
      </div>
      {
        details.map(({ id, name, specialization, date, action }) => {
          return (
            <List className="usingCards_cards" key={id} >
              <h4> {name} </h4>
              <small className='special'> {specialization} </small>
              <small className='date'> {date} </small>
              <small className='action'> {action} </small>
            </List>
          )
        })
      }
    </div>
  )
}

export default UsingCard
