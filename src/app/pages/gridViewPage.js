import React, { Component } from 'react'
import GridCard from './cards/gridCard'
import { dispatchOffices } from '../actions/index'
import { connect } from 'react-redux'

class GridViewPage extends Component {
    render() {
        return(
            <div className='grid-page-container'>
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
                <GridCard />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => ({
    dispatchOffices: (listOffices) => { dispatch(dispatchOffices(listOffices))}
})

export default connect(mapStateToProps,mapDispatchToProps)(GridViewPage)