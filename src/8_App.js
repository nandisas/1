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
} from "react-leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

const center = [20.0, 79.20]

const App = () => {

  const [bluemarble, setBluemarble] = useState(false)
  const onClick = () => {
    setBluemarble(!bluemarble)
  }
    return (
      <div>
      <Map
      center={center}
      zoom={10}
      style={{height: '350px'}}
      zoomControl={true}
      onClick={onClick}
      >

      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution=''
      />

      {/* <WMSTileLayer
        layers={bluemarble ? 'nasa:bluemarble' : 'ne:ne'}
        url="https://demo.boundlessgeo.com/geoserver/ows"
      /> */}

      {/* <WMSTileLayer
      format="image/png"
      layers= 'TOPO-OSM-WMS'
      url="http://ows.mundialis.de/services/service?"
      /> */}

      </Map>
        <div>
          <h1>This is it</h1>
        </div>
      </div>
      )
}

export default App;