import React from 'react'

// {props.description.length > 70 ? props.description.slice(0, 40) + '...' : props.description}
// deserves to be reusable helper function in order to avoid code repetition in listCard.js
// {props.photo !== null ?  <img src={props.photo} alt='Not Found' /> : <p>{props.name.slice(0,1)}</p>}
// code above should be Avatar component which handles displaying image or letters
// No magic numbers please like 70, 40, these numbers should be constants
const GridCard = (props) => {
    return(
        <div className='grid-card'>
            <div className='grid-image-wrapper'>
               {props.photo !== null ?  <img src={props.photo} alt='Not Found' /> : <p>{props.name.slice(0, 1)}</p>}
            </div>
            <div className='grid-address-wrapper'>
                <p>{props.name}</p>
                <p>{props.description.length > 70 ? props.description.slice(0, 40) + '...' : props.description}</p>
            </div>
        </div>
    )
}

export default GridCard
