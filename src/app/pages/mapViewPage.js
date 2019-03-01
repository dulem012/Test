import React, {Component} from 'react'
import Map from './map'
import Header from '../partials/header'
import {connect} from 'react-redux'
import { dispatchOffices } from '../actions/index'
import { getOffices } from '../services/index'
import Loader from './loader/loader'
/*

    this.setState({
      listOfficesToMap: this.state.listOfficesToMap.map((el, j)=>{
        if(i === j) {
          return {isOpen: true}
        }else {
          return {isOpen: false}
        }
      })
    })

    1. Don't use j as variable name
    2. Instead of:
            if(i === j) {
          return {isOpen: true}
        }else {
          return {isOpen: false}
        }
        you can do it like this:

       return {isOpen: i === j}

    3. map is not loaded correctly you are missing apiKey

    4. You can reuse listOfOffices from Redux with small addition

    5. no inline styles like this
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}

    6. Extract as config constant
                center={{ lat: 0, lng: 0 }}
            zoom={2}

 */
class MapViewPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    listOfficesToMap : this.props.listOfOffices.length > 0  ? this.props.listOfOffices.map((el) => ({isOpen: false})) : []
    }
  }

  componentDidMount() {
    if(this.props.listOfOffices.length === 0) {
        getOffices().then((response) => {
            this.props.dispatchOffices(response)
            this.setState({
              listOfficesToMap: response.map((el) => ({isOpen: false}))
            })
        })
    }
}

  openHandler = (i) => {
    this.setState({
      listOfficesToMap: this.state.listOfficesToMap.map((el, j)=>{
        if(i === j) {
          return {isOpen: true}
        }else {
          return {isOpen: false}
        }
      })
    })
  }

  closeHandler = (i) => {
    this.setState({
      listOfficesToMap: this.state.listOfficesToMap.map((el, j)=>({isOpen: false}))
    })
  }

  render() {
    return(
      <React.Fragment>
      <Header pathname={this.props.location.pathname}/>
      {this.props.listOfOffices.length === 0 ? <Loader /> : <div className='list-page-container'>
          <Map
            googleMapURL="https://maps.googleapis.com/maps/api/js?key="
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            center={{ lat: 0, lng: 0 }}
            zoom={2}
            places={this.props.listOfOffices}
            listOfficesToMap={this.state.listOfficesToMap}
            openHandler = {this.openHandler}
            closeHandler = {this.closeHandler}
       />
       </div>}
       </React.Fragment>
      )
  }
}

const mapStateToProps = (state) => ({ ...state })
const mapDispatchToProps = (dispatch) => ({
    dispatchOffices: (listOffices) => { dispatch(dispatchOffices(listOffices))}
});

export default connect(mapStateToProps, mapDispatchToProps)(MapViewPage)
