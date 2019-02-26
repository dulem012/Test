import React from 'react'

const GridCard = (props) => {
    return(
        <div className='grid-card'>
            <div className='grid-image-wrapper'>
                {/* <img src='http://www.geonames.org/flags/x/rs.gif' alt='image' /> */}
                <p>P</p>
            </div>
            <div className='grid-address-wrapper'>
                <p>Belgrade office</p>
                <p>Itekako Belgrade office addresss is Terazije 23</p>
            </div>
        </div>
    )
}

export default GridCard