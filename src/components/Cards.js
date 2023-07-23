import React from 'react'
import location from '../images/location.png'

const Cards = (props) => {
  return (
    <div className='card'>
        <img className='card-img' src={props.datum.imageUrl} alt="Mountain Fuji" />
        <div className="info">
            <div className="card-location-container">
                <div className="location-name-flex">
                    <img className='card-location-img' src={location} alt="location icon" />
                    <p className='card-country'>{props.datum.location}</p>
                </div>
                <a className='card-link' href={props.datum.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className='card-title'>{props.datum.title}</h1>
            <span>{props.datum.startDate} -</span> <span> {props.datum.endDate}</span>
            <p className='card-description'>{props.datum.description}</p>
        </div>
    </div>
  )
}

export default Cards