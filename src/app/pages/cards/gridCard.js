import React from 'react'

const GridCard = (props) => {
    return(
        <div className='grid-card'>
            <div className='grid-image-wrapper'>
               {props.photo !== null ?  <img src={props.photo} alt='image' /> : <p>{props.name.slice(0, 1)}</p>}   
            </div>
            <div className='grid-address-wrapper'>
                <p>{props.name}</p>
                <p>{props.description.length > 70 ? props.description.slice(0, 40) + '...' : props.description}</p>
            </div>
        </div>
    )
}

export default GridCard