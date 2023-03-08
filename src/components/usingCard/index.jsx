import React from 'react'
import { details } from '../../data'
import List from '../../UI/List'


const UsingCard = () => {
  const openPDF = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className='usingCard_wrapper container'>
      <div className="lists">
        <h4> Doctor name </h4>
        <small className='special'> Appointment ID </small>
        <small className='date_heading'> Date &amp; Time </small>
        <small className='action_heading'> Action </small>
      </div>
      {
        details.map(({ id, name, specialization, date, view }) => {
          const pdfUrl = require(`../../assets/pdf/file_pdf.pdf`);

          return (
            <List className="usingCards_cards" key={id} >
              <h4> {name} </h4>
              <small className='special'> {specialization} </small>
              <small className='date'> {date} </small>
              <div className="action">
                <small className="view" onClick={() => openPDF(pdfUrl)}>
                  {view}
                </small>
              </div>
            </List>
          )

        })
      }
    </div>
  )
}

export default UsingCard
