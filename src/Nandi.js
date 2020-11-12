import React, { useState, useEffect } from 'react'
import { Map, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {
  ImageOverlay,
} from "react-leaflet";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const Nandi = () => {

  // Declare url, address initial, and file format
  const urlData = 'https://api.github.com/repos/nandisas/react_data/contents';
  let linkInit = 'https://raw.githubusercontent.com/nandisas/react_data/main/';
  let linkEnd = '.png'

  // Declare States
  const [lnk, setLnk] = useState('')
  const [showMap, setShowMap] = useState(false)
  const [startDate, setStartDate] = useState(null);
  const [files, setFiles] = useState([])
  const [filesLoaded, setFilesLoaded] = useState(false)

  // Declare functions
  const getDateArrayy = (item) => {
    let [dy, mn, yr] = item.split(/[_.]+/);
    mn = mn-1;
    let data = new Date(yr, mn, dy);
    return data;
  }

  const pad = (str, max) => {
    str = str.toString();
  return str.length < max ? pad("0" + str, max) : str;
  };

  const mapChange = (dt) => {
    // setSelectedOption(e.value);
    let m, d, y;
    [m, d, y]  = dt.toLocaleDateString("en-US").split("/")
    m = pad(m,2)
    d = pad(d,2)
    let linkMid = d.concat('_', m,'_',y) ;
    let link = linkInit.concat(linkMid, linkEnd);
    setLnk(link);
    setShowMap(true);
  }

  // Declare Component lifecycle method
  useEffect(()=>{
    fetch(urlData)
    .then(res => res.json())
    .then(res =>res.map(item=>item.name))
    .then(res => {
      // console.log(res)
      setFiles(res)
      setFilesLoaded(true)
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  // Load dates to be included [days where we have flood inundation map, nake them active(calendar)
  var incDates = [new Date()];
  if (filesLoaded) {
    // console.log(files)
    incDates = files.map(getDateArrayy)
    // console.log(incDates)
  }
  // Leafleet design set
  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });


  return (
    <div>

        <Map
        center={[16.7140350, 74.2236370]}
        zoom={12}
        style={{height: '480px'}}
        zoomControl={true}
        >

            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution=''
            />


            {showMap ? (
              <ImageOverlay
                bounds={[
                  [16.6725950 , 74.1854170],
                  [16.7554750, 74.2618570],
                ]}
                opacity= {1}
                url={lnk}
              />
            ) : null}
        </Map>

        <div>
            <div style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
            <h5>Select Date</h5>
            </div>
            {/* <div style={{display: 'flex', justifyContent: 'center'}}> */}
            <div>
            <DatePicker
                selected={startDate}
                onChange={date => {setStartDate(date);mapChange(date)}}
                includeDates={incDates}
                placeholderText="Select dates!"
                // isClearable
                // className="red-border"
                // openToDate={new Date("1993/09/28")}
                withPortal
                popperPlacement="bottom"
                popperModifiers={{
                    flip: {
                        behavior: ["bottom"] // don't allow it to flip to be above
                    },
                    preventOverflow: {
                        enabled: false // tell it not to try to stay within the view (this prevents the popper from covering the element you clicked)
                    },
                    hide: {
                        enabled: false // turn off since needs preventOverflow to be enabled
                    }
                }}
            />
            </div>
        </div>
    </div>
    )
}

export default Nandi;