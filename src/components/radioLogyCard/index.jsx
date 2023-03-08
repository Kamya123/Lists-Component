import React from 'react';
import { details } from '../../data';
import List from '../../UI/List';



const RadiologyCard = () => {
  const openPDF = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="RadiologyCard_wrapper container">
      <div className="lists">
        <h4> Test name </h4>
        <small className="date_heading"> Date &amp; Time </small>
        <small className="action_heading"> Action </small>
      </div>

      {details.map(({ id, name, date, view }) => {
        const pdfUrl = require(`../../assets/pdf/file_pdf.pdf`);
        return (
          <List className="RadiologyCards_cards lists" key={id}>
            <h4> {name} </h4>
            <small className="date"> {date} </small>
            <div className="action">
              <small className="view" onClick={() => openPDF(pdfUrl)}>
                { view }
              </small>
            </div>
          </List>
        );
      })}

    </div>
  );
};

export default RadiologyCard;
