 import React, {Component} from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
  InfoWindow
} from "react-google-maps";
import {connect} from 'react-redux'

const Map = (props) => {
    return (
    <GoogleMap defaultZoom={props.zoom} defaultCenter={props.center}  options={{ scrollwheel: true}}> 
      {props.places.map((place, i) => {
        return (
          <Marker
            key={place.id}
            position={{ lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) }}
            draggable={false}
            onClick={() => {props.openHandler(i)}}
          >
            {props.listOfficesToMap.length > 0 ? props.listOfficesToMap[i].isOpen === true ? <InfoWindow onCloseClick={() => {props.closeHandler(i)}}>
			        {place.photo !== null ? <img src={place.photo} className='grid-image-wrapper' alt='Not Found' /> : <p>Don't have image</p>}
		        </InfoWindow> : null : null}
          </Marker>
        );
      })}
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(Map));
