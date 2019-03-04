import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'

const navigation = ['List', 'Grid', 'Map']
const navigationRoute = ['/list', '/grid', '/map']

const Header = (props) => {
    return(
        <header className='container-fluid'>
            <div className='row'>
                <h3 className='col-5 col-lg-3'>Offices</h3>
                <div className='col-7 col-lg-6'>
                    {navigation.map((el, index) => (<NavLink to={navigationRoute[index]} activeClassName='clicked' key={index}>{el}</NavLink>))}
                </div>
            </div>
        </header>
    )
}

export default withRouter(Header)