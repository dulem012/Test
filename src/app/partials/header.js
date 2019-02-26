import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    return(
        <header className='container-fluid'>
            <div className='row'>
                <h3 className='col-6 col-lg-4'>Offices</h3>
                <div className='col-6 col-lg-4'>
                    <Link to={'/list'} >
                        <p className={props.pathname === '/list' ? 'clicked': 'not-clicked'}>List</p>
                    </Link>
                    <Link to={'/grid'}>
                        <p className={props.pathname === '/list' ? 'not-clicked': 'clicked'}>Grid</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header