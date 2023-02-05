import React from 'react'
import "./Widgets.css"
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />

            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>


        </div>
    )
    return (
        <div className='widgets' >
            <div className="widgets__header">
                <h2>LinkeIn News </h2>
                <InfoIcon />
            </div>

            {newsArticle("PAPA React is back", "Top News- 9099 readers ")}
            {newsArticle("Coronavirus :  India updates ", " 0 cases ")}
            {newsArticle("Bitcoin Breaks $22K", "Crypto - 8000 reader")}
            {newsArticle("JavaScript Mastery", "Code - 120000 reader")}
            {newsArticle("Tesla hits new highs", "Cars & auto - 300 reader")}
        </div>


    )
}

export default Widgets