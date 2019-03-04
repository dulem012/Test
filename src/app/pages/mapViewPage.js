import React, {Component} from 'react';
import Map from './map';
import {connect} from 'react-redux';

class MapViewPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
    clickedMarker: null, 
    }
  }

  openHandler = (obj) => {
      if ( this.state.clickedMarker !== null && obj.id === this.state.clickedMarker.id ){
        this.setState({
          clickedMarker: null
        })
      }else{
      this.setState({
        clickedMarker : {...obj}
      })
    }
  };

  closeHandler = () => {
    this.setState({
      clickedMarker: null
    })
  };

  render() {
    const { listOfOffices } = this.props
    const mapInfo = {
      loadingElement: `100%`,
      containerElement: `600px`,
      mapElement: `100%`,
      center: {
        lat: 0,
        lng: 0
      },
      zoom : 2
    };
    return(
      <React.Fragment>
       <div className='list-page-container'>
          <Map 
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDsHhS_Vdi_TzKiDyPlU0xZZONLKBEtbV0"
            loadingElement={<div style={{ height: mapInfo.loadingElement }} />}
            containerElement={<div style={{ height: mapInfo.containerElement }} />}
            mapElement={<div style={{ height: mapInfo.mapElement }} />}
            center={{ lat: mapInfo.center.lat, lng: mapInfo.center.lng }}
            zoom={mapInfo.zoom}
            places={listOfOffices}
            openHandler = {this.openHandler}
            closeHandler = {this.closeHandler}
            clickedMarker = {this.state.clickedMarker}
       />    
       </div>
       </React.Fragment>
      )
  }
}

const mapStateToProps = (state) => ({ ...state });

export default connect(mapStateToProps)(MapViewPage);
