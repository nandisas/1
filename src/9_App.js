import React, { useState, useEffect } from 'react'
import { Map, TileLayer, WMSTileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Circle,
  CircleMarker,
  Polygon,
  Polyline,
  Rectangle,
  LayerGroup,
  FeatureGroup,
  LayersControl,
  Tooltip,
  Pane,
  VideoOverlay
} from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const center = [20.0, 79.20]

const App = () => {

  const [play, setPlay] = useState(false)

  const onClick = () => {
    setPlay(!play)
  }
    return (
      <div>
      <Map
      center={[25, -100]}
      zoom={4}
      style={{height: '350px'}}
      zoomControl={true}
      onClick={onClick}
      >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=''
      />

      <VideoOverlay
        bounds={[
          [32, -130],
          [13, -100],
        ]}
        play={play}
        opacity= {0.4}
        url="https://www.mapbox.com/bites/00188/patricia_nasa.webm"
      />

      </Map>
        <div>
          <h1>This is it</h1>
        </div>
      </div>
      )
}

export default App;