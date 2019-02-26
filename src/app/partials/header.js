import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className='container-fluid'>
            <div className='row'>
                <h3 className='col-6 col-lg-4'>Offices</h3>
                <div className='col-6 col-lg-4'>
                    <Link to={'/list'} style={{color: 'white'}}>
                        <p>List</p>
                    </Link>
                    <Link to={'/grid'} style={{color: 'white'}}>
                        <p>Grid</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header