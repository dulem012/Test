import React, { Component } from 'react'
import GridCard from './cards/gridCard'
import { dispatchOffices } from '../actions/index'
import { getOffices } from '../services/index'
import { connect } from 'react-redux'
import Header from '../partials/header'
import Loader from './loader/loader'
import Map from './mapViewPage'

class GridViewPage extends Component {
    componentDidMount() {
        if(this.props.listOfOffices.length === 0) {
            getOffices().then((response) => {
                this.props.dispatchOffices(response)
            })
        }
    }

    render() {
        return(
            <React.Fragment>
                <Header pathname={this.props.location.pathname}/>
            {this.props.listOfOffices.length === 0 ? <Loader /> : <div className='grid-page-container'>
                {this.props.listOfOffices.map((el,i) => {
                    return <GridCard name={el.name} description={el.description}  photo={el.photo} key={el.id} />
                })}
            </div>}
            <Map 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key="
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={{ lat: -24.9923319, lng: 135.2252427 }}
            zoom={2}
            places={this.props.listOfOffices}
            />
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => ({
    dispatchOffices: (listOffices) => { dispatch(dispatchOffices(listOffices))}
})

export default connect(mapStateToProps,mapDispatchToProps)(GridViewPage)