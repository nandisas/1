import React, { useState, useEffect } from 'react'
import { Map, TileLayer, Marker, Popup, type Viewport } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const position = [20.0, 79.20]
const DEFAULT_VIEWPORT = {
  center: [20.0, 79.20],
  zoom: 13,
}


const App = () => {
  const [viewport, setViewport] = useState(DEFAULT_VIEWPORT)

  const onClickReset = () => {
    setViewport(DEFAULT_VIEWPORT)
  }

  const onViewportChanged = (viewport: Viewport) => {
    setViewport(viewport)
  }

    return (
      <div>
      <Map
      onClick={onClickReset}
      onViewportChanged={onViewportChanged}
      style={{height: '350px'}} 
      viewport={viewport}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=''
      />
      </Map>
      <div>
        <h1>This is it</h1>
      </div>
      </div>
      )
}

export default App;