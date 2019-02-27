import React, {Component} from 'react'
import Map from './map'
import Header from '../partials/header'
import {connect} from 'react-redux'
import {dispatchOffices} from '../actions/index'
import {getOffices} from '../services/index'
import Loader from './loader/loader'

class MapViewPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    listOfficesToMap : this.props.listOfOffices.length > 0  ? this.props.listOfOffices.map((el) => ({isOpen: true})) : []
    }
  }

  componentDidMount() {
    if (this.props.listOfOffices.length === 0) {
      getOffices().then((response)=>{
        this.props.dispatchOffices(response)
      })
    }
  }

  openHandler(i){
    this.setState({
      listOfficesToMap: this.props.listOfficesToMap.map((el, j)=>{
        if(i === j || el.isOpen) {
          return {isOpen: true}
        }else {
          return {isOpen: false}
        }
      })
    })
  }

  closeHandler(i) {
    this.setState({
      listOfficesToMap: this.props.listOfficesToMap.map((el, j)=>{
          if(i === j || !el.isOpen) {
            return {isOpen: false}
          }else {
            return {isOpen: true}
          }
      })
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
            center={{ lat: -24.9923319, lng: 135.2252427 }}
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
  dispatchOffices: (offices) => {dispatch(dispatchOffices(offices))}
})

export default connect(mapStateToProps, mapDispatchToProps)(MapViewPage)
