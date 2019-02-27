import React, {Component} from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
  InfoWindow
} from "react-google-maps";
import {connect} from 'react-redux'

class Map extends Component {
  constructor(props){
    super(props)
    this.state = {
      listOfficesToMap : this.props.listOfOffices.length > 0  ? this.props.listOfOffices.map((el) => ({isOpen: true})) : []
    }
  }

  openHandler(i){
    this.setState({
      listOfficesToMap: this.state.listOfficesToMap.map((el, j)=>{
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
      listOfficesToMap: this.state.listOfficesToMap.map((el, j)=>{
          if(i === j || !el.isOpen) {
            return {isOpen: false}
          }else {
            return {isOpen: true}
          }
      })
    })
  }
  
  render() {
    return (
    <GoogleMap defaultZoom={this.props.zoom} defaultCenter={this.props.center}  options={{ scrollwheel: true}}> 
      {this.props.places.map((place, i) => {
        return (
          <Marker
            key={place.id}
            position={{ lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) }}
            draggable={false}
            onClick={() => {this.openHandler(i)}}
          >
            {this.state.listOfficesToMap.length > 0 ? this.state.listOfficesToMap[i].isOpen === true ? <InfoWindow onCloseClick={() => {this.closeHandler(i)}}>
			        {place.photo !== null ? <img src={place.photo} className='grid-image-wrapper' alt='Not Found' /> : <p>Don't have image</p>}
		        </InfoWindow> : null : null}
          </Marker>
        );
      })}
    </GoogleMap>
  );
    }
};

const mapStateToProps = (state) => ({...state})


export default connect(mapStateToProps)(withScriptjs(withGoogleMap(Map)));
