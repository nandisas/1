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
const { BaseLayer, Overlay } = LayersControl

const App = () => {

    return (
      <div>
      <Map
      center={center}
      zoom={10}
      style={{height: '350px'}}
      zoomControl={false}
      >
      <LayersControl position="topright">
          <BaseLayer checked name="OpenStreetMap.Mapnik">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution=''
            />
          </BaseLayer>

          <BaseLayer checked name="OpenStreetMap.BlackAndWhite">
            <TileLayer
              url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png"
              attribution=''
            />
          </BaseLayer>

          <Overlay name="Marker with popup">
              <Marker position={center}>
                  <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>              
              </Marker>
          </Overlay>

          <Overlay name="Layer group with circles">
              <LayerGroup>
                  <Circle center={center} fillColor="blue" radius={200} />
                      <Circle
                        center={center}
                        fillColor="red"
                        radius={100}
                        stroke={false}
                      />
                  <LayerGroup>
                      <Circle
                        center={[19.95, 79.84]}
                        color="green"
                        fillColor="green"
                        radius={100}
                      />                  
                  </LayerGroup>
              </LayerGroup>
          </Overlay>

          <Overlay name="Feature group">
              <FeatureGroup color="purple">
                  <Popup>Popup in FeatureGroup</Popup>
                  <Circle center={center} fillColor="blue" radius={200}></Circle>
                  <Rectangle bounds={rectangle} />
              </FeatureGroup>
          </Overlay>                            

      </LayersControl>
      </Map>
      <div>
        <h1>This is it</h1>
      </div>
      </div>
      )
}

export default App;