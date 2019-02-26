import React from 'react'

const ListCard = (props) => {
    return(
        <div className='list-card'>
            <div className='list-image-wrapper'>
                {/* <p>P</p> */}
                <img src='http://www.geonames.org/flags/x/rs.gif' alt='image' />
            </div> 
            <div className='list-address-wrapper'>
                <p>Belgrade office</p>
                <p>Itekako Belgrade office address is Terazije 23</p>    
            </div> 
        </div>
    )
}

export default ListCard