import React from 'react'
import { Link } from 'react-router-dom'

// className={props.pathname === '/list' ? 'clicked': 'not-clicked'}
// You don't need to set active manually it can be done using react router. Active link already has active class you just need to style it.
const Header = (props) => {
    return(
        <header className='container-fluid'>
            <div className='row'>
                <h3 className='col-5 col-lg-3'>Offices</h3>
                <div className='col-7 col-lg-6'>
                    <Link to={'/list'} >
                        <p className={props.pathname === '/list' ? 'clicked': 'not-clicked'}>List</p>
                    </Link>
                    <Link to={'/grid'}>
                        <p className={props.pathname === '/grid' ? 'clicked': 'not-clicked'}>Grid</p>
                    </Link>
                    <Link to='/map'>
                        <p className={props.pathname === '/map' ? 'clicked' : 'not-clicked'}>Map</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
