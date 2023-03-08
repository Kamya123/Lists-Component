import React from 'react'
import { details } from '../../data'
import List from '../../UI/List'


const UsingCard = () => {
  return (
    <div className='usingCard_wrapper container'>
      <div className="lists">
        <h4> Doctor name </h4>
        <small className='special'> Appointment ID </small>
        <small className='date_heading'> Date & Time </small>
        <small className='action_heading'> Action </small>
      </div>
      {
        details.map(({ id, name, specialization, date, view, print }) => {
          return (
            <List className="usingCards_cards" key={id} >
              <h4> {name} </h4>
              <small className='special'> {specialization} </small>
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

export default UsingCard
