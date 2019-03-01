import React from 'react'

// same as it described in gridCard.js
const ListCard = (props) => {
    return(
        <div className='list-card'>
            <div className='list-image-wrapper'>
             {props.photo !== null ?  <img src={props.photo} alt='Not Found' /> : <p>{props.name.slice(0,1)}</p>}
            </div>
            <div className='list-address-wrapper'>
                <p>{props.name}</p>
                <p>{props.description.length > 70 ? props.description.slice(0, 40) + '...' : props.description}</p>
            </div>
        </div>
    )
}

export default ListCard
