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
  LayerGroup,
  FeatureGroup,
} from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const center = [20.0, 79.20]
const rectangle = [
  [19.97, 79.19],
  [20.03, 79.16],
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

      <LayerGroup>
      <Circle center={center} fillColor="blue" radius={200} />
      <Circle center={center} fillColor="red" radius={100} stroke={false} />
        <LayerGroup>
        <Circle
                center={[20.03, 79.23]}
                color="green"
                fillColor="green"
                radius={100}
        />
        </LayerGroup>
      </LayerGroup>

      <FeatureGroup color="purple">
        <Popup>Popup in FeatureGroup</Popup>
        <Circle center={[19.94, 79.18]} radius={200} />
        <Rectangle bounds={rectangle} />
      </FeatureGroup>

      </Map>
      <div>
        <h1>This is it</h1>
      </div>
      </div>
      )
}

export default App;