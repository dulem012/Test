import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header className='container-fluid'>
            <div className='row'>
                <h5 className='col-xs-6 '>Offices</h5>
                <div>
                    <Link to={'/list'}>
                        <p>List</p>
                    </Link>
                    <Link to={'/grid'}>
                        <p>Grid</p>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header