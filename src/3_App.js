import React, { useState, useEffect } from 'react'
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  Circle,
  CircleMarker,
  Polygon,
  Polyline,
  Rectangle,
} from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const center = [20.0, 79.20]

const polyline = [
  [20.505, 79.29],
  [20.01, 79.24],
  [20.01, 79.20],
]

const multiPolyline = [
  [
    [51.5, -0.1],
    [51.5, -0.12],
    [51.52, -0.12],
  ],
  [
    [51.5, -0.05],
    [51.5, -0.06],
    [51.52, -0.06],
  ],
]

const polygon = [
  [51.515, -0.09],
  [51.52, -0.1],
  [51.52, -0.12],
]

const multiPolygon = [
  [
    [51.51, -0.12],
    [51.51, -0.13],
    [51.53, -0.13],
  ],
  [
    [51.51, -0.05],
    [51.51, -0.07],
    [51.53, -0.07],
  ],
]

const rectangle = [
  [51.49, -0.08],
  [51.5, -0.06],
]

const App = () => {
    return (
      <div>
      <Map
      center={center}
      zoom={10}
      style={{height: '350px'}}
      >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=''
      />
      <Polyline color="lime" positions={polyline} />
      <Circle center={center} fillColor="blue" radius={200} />
      <CircleMarker center={center} color="red" radius={20}>
        <Popup>Popup in CircleMarker</Popup>
      </CircleMarker>
      </Map>
      <div>
        <h1>This is it</h1>
      </div>
      </div>
      )
}

export default App;