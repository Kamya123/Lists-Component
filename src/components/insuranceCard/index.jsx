import React from 'react'
import { useState } from 'react';
import { details } from '../../data'
import List from '../../UI/List'


// TO VIEW THE PDF ON CLICKING VIEW BUTTON

// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// import '@react-pdf-viewer/core/lib/index.css'
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';






const pdf_url = 'http://localhost:3000/file_pdf.pdf';


const InsuranceCard = () => {

    // const [viewPdf, setViewPdf] = useState(null)

    const downLoadFile = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };

    // const handleChange = (e) => {
    //     e.preventDefault()
    //     if (pdfFile !== null) {
    //         setViewPdf(pdfFile)
    //     }
    //     else {
    //         setViewPdf(null)
    //     }
    // }

    return (
        <div className='InsuranceCard_wrapper container'>
            <div className="lists">
                <h4> Test name </h4>
                <h4> Amount </h4>
                <small className='date_heading'> Date & Time </small>
                <small className='action_heading'> Action </small>
            </div>
            {
                details.map(({ id, name, amount, date, view, print }) => {
                    return (
                        <List className="InsuranceCards_cards lists" key={id} >
                            <h4> {name} </h4>
                            <h4> {amount} </h4>
                            <small className='date'> {date} </small>
                            <div className='action'>
                                <small className='view'> {view} </small>
                                <small onClick={() => downLoadFile(pdf_url)} className='print'> {print} </small>
                            </div>
                        </List>
                    )
                })
            }
        </div>
    )
}

export default InsuranceCard
