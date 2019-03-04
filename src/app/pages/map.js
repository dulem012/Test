import React from "react";
import {
  withGoogleMap,
  GoogleMap,
  Marker,
  withScriptjs,
  InfoWindow
} from "react-google-maps";

const Map = (props) => {
  const { zoom, center, openHandler, closeHandler, clickedMarker} = props
    return (
    <GoogleMap defaultZoom={zoom} defaultCenter={center}  options={{ scrollwheel: true}}> 
      {props.places.map((el, index) => {
        return (
          <Marker
            key={el.id}
            position={{ lat: parseFloat(el.latitude), lng: parseFloat(el.longitude) }}
            draggable={false}
            onClick={() => {openHandler(el)}}
          >
            { clickedMarker !== null &&  (clickedMarker.id - 1) === index ? <InfoWindow onCloseClick={() => {closeHandler()}}>
			        {el.photo !== null ? <img src={el.photo} className='grid-image-wrapper' alt='Not Found' /> : <p>Don't have image</p>}
		        </InfoWindow> : null }
          </Marker>
        );
      })}
    </GoogleMap>
  )
}

export default withScriptjs(withGoogleMap(Map));
