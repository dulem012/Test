import React from 'react';

const Card = (props) => {
    const {view, photo, name, description } = props;
    return(
        <div className={view === 'list' ? 'list-card' : 'grid-card'}>
            <div className={view === 'list' ? 'list-image-wrapper' : 'grid-image-wrapper'}>
               {photo !== null ?  <img src={photo} alt='Not Found' /> : <p>{name.slice(0, 1)}</p>}   
            </div>
            <div className={view === 'list' ? 'list-address-wrapper' : 'grid-address-wrapper'}>
                <p>{name}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Card;