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
  Tooltip,
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
const multiPolygon = [
  [
    [20.02, 79.17],
    [20.02, 79.16],
    [20.04, 79.16],
  ],
  [
    [20.02, 79.24],
    [20.02, 79.22],
    [20.04, 79.22],
  ],
]

const App = () => {
    const [clicked, setClicked] = useState(0)

    const onClickCircle = () => {
      setClicked((clicked)=>clicked+1)
    }

    const clickedText =
    clicked === 0
      ? 'Click this Circle to change the Tooltip text'
      : `Circle click: ${clicked}`

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

      <Circle
        center={center}
        fillColor="blue"
        onClick={onClickCircle}
        radius={200}>
        <Tooltip>{clickedText}</Tooltip>
      </Circle>

      <Rectangle bounds={rectangle} color="black">
          <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
            permanent Tooltip for Rectangle
          </Tooltip>
      </Rectangle>

      <CircleMarker center={center} color="red" radius={20}>
          <Tooltip>Tooltip for CircleMarker</Tooltip>
      </CircleMarker>

      </Map>
      <div>
        <h1>This is it</h1>
      </div>
      </div>
      )
}

export default App;