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
  LayersControl,
  Tooltip,
  Pane,
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

const outer = [
  [19.2, 79.0],
  [22.2, 81.0],
]
const inner = [
  [20.1, 79.5],
  [21.2, 80.5],
]


const App = () => {

  const [render, setRender] = useState(true)

    return (
      <div>
      <Map
      center={center}
      zoom={10}
      style={{height: '350px'}}
      zoomControl={true}
      bounds={outer}
      >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=''
      />
        {render ? (
          <Pane name="cyan-rectangle" style={{ zIndex: 500 }}>
            <Rectangle bounds={outer} color="cyan" />
          </Pane>
        ) : null}

        <Pane name="yellow-rectangle" style={{ zIndex: 499 }}>
          <Rectangle bounds={inner} color="yellow" />
          <Pane name="purple-rectangle" className="purplePane-purplePane">
            <Rectangle bounds={outer} color="purple" />
          </Pane>
        </Pane>

      </Map>
        <div>
          <h1>This is it</h1>
        </div>
      </div>
      )
}

export default App;