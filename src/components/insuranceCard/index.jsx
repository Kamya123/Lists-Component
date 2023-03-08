import React from 'react'
import { details } from '../../data'
import List from '../../UI/List'


const InsuranceCard = () => {
    const openPDF = (url) => {
        window.open(url, '_blank');
    };
    
    return (
        <div className='InsuranceCard_wrapper container'>
            <div className="lists">
                <h4> Test name </h4>
                <h4> Amount </h4>
                <small className='date_heading'> Date &amp; Time </small>
                <small className='action_heading'> Action </small>
            </div>
            {
                details.map(({ id, name, amount, date, view }) => {
                    const pdfUrl = require(`../../assets/pdf/file_pdf.pdf`);

                    return (
                        <List className="InsuranceCards_cards lists" key={id} >
                            <h4> {name} </h4>
                            <h4> {amount} </h4>
                            <small className='date'> {date} </small>
                            <div className='action'>
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

export default InsuranceCard
