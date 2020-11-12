// import React from "react";
// import { Map, TileLayer, LayersControl, Marker, Popup } from "react-leaflet";
// import "./App.css";
// import "leaflet/dist/leaflet.css";

// function App() {

//   const position = [20.0, 79.20]
//   return (

    // <Map id="map" center={[20.0, 79.20]} zoom={10}>
    //   <LayersControl position="topleft">
    //     <LayersControl.BaseLayer checked name="PouchDBTileLayer">
    //       <PouchDBTileLayer
    //         useCache
    //         crossOrigin
    //         cacheNextZoomLevel
    //         cacheEdgeTile={0}
    //         attribution='&copy; <a href="https://saswatanandi.github.io">Saswata Nandi</a> contributors'
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //       />
    //     </LayersControl.BaseLayer>
    //     <LayersControl.BaseLayer checked name="TileLayer">
    //       <TileLayer
    //         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         attribution=''
    //       />
    //     <Marker position={position}></Marker>
    //     </LayersControl.BaseLayer>
    //   </LayersControl>
    // </Map>


    // <Map center={[20.0, 79.20]} zoom={10}>
    // <LayersControl position="topleft">
    // <LayersControl.BaseLayer>
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution=''
    //   />
    // </LayersControl.BaseLayer>
    // </LayersControl>
    // </Map>


    // <Map id="map" center={[20.0, 79.20]} zoom={10}>
    //   <TileLayer
    //     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //     attribution=''
    //   />
    // <Marker position={[20.0, 79.20]}>
    //   <Popup position={[20.0, 79.20]}>
    //     A pretty CSS3 popup
    //   </Popup>
    // </Marker>
    // </Map>
//   );
// }

// export default App;



import React, { useState, useEffect } from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import lMap from './lMap'

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const position = [20.0, 79.20]



const App = () => {
  const [hasLocation, setHasLocation] = useState(false)
  const [latlng, setlatlng] = useState({lat:20.0, lng:79.20})
  const mapRef = React.createRef()

  const marker = hasLocation ? (
    <Marker position={latlng}>
      <Popup>You are here</Popup>
    </Marker>
  ) : null

  const handleClick = () => {
    const map = mapRef.current
    if (map != null) {
      map.leafletElement.locate()
    }
  }

  const handleLocationFound = (e) => {
    setHasLocation(true)
    setlatlng(e.latlng)
  }

    return (
      <div>
      <Map
      center={latlng} 
      zoom={10}
      length={4}
      onClick={handleClick}
      onLocationfound={handleLocationFound}
      ref={mapRef}
      style={{height: '350px'}} 
      onclick = {handleClick} onLocationfound={handleLocationFound}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=''
      />
      <Marker position={[20.0, 79.20]}>
      <Popup position={[20.0, 79.20]}>
        A pretty CSS3 popup
      </Popup>
      </Marker>
      </Map>
      <div>
        <h1>This is it</h1>
      </div>
      </div>
      )
}

export default App;