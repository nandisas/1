import React, { useState, useEffect } from 'react'
import { Map, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import Select from 'react-select';
import {
  ImageOverlay,
} from "react-leaflet";
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const Nandi = () => {

  delete L.Icon.Default.prototype._getIconUrl;

  L.Icon.Default.mergeOptions({
      iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
      iconUrl: require('leaflet/dist/images/marker-icon.png'),
      shadowUrl: require('leaflet/dist/images/marker-shadow.png')
  });

  // const options = [
  //   { value: 'https://raw.githubusercontent.com/nandisas/react_data/main/20_06_2020.png', label: '20_06_2020' },
  //   // { value: 'https://raw.githubusercontent.com/nandisass/react_data/master/test/data/red.png', label: 'Red' },
  // ];

  // const dataArray = [
  //   'https://raw.githubusercontent.com/nandisas/react_data/main/20_06_2020.png',
  //   'https://raw.githubusercontent.com/nandisas/react_data/main/10_11_2020.png'
  // ];

  const dateArray = [
    '20_06_2020', '10_11_2020'
  ];


  const apiUrl = 'https://api.github.com/repos/nandisas/react_data/contents';


  const [post, setPost] = useState([])
  useEffect(()=>{
    fetch(apiUrl)
    .then(res => res.json())
    .then(res =>res.map(item=>item.name))
    .then(res => {
      console.log(res)
      setPost(res)
    })
    .catch(err => {
      // console.log(err)
    })
  }, [])
  // console.log(post)

 

  // var obj
  // fetch(apiUrl)
  // .then((res) => res.json())
  // .then(data => obj = data)
  // .catch((error) => console.log(error))

  // console.log(obj)



  // async function getData(url){
  //   let res = await fetch(url);
  //   let data = await res.json();
  //   return data;
  // }
  // let files
  // getData(apiUrl)
  // .then(files => console.log(files))
  // .catch(err => console.log(err.message))

  // var files 
  // getData(apiUrl).then(data=>files=data)
  // console.log(files)

// Calling that async function 
  // console.log(files)


  // fetch(apiUrl)
  // .then((response) => response.json())
  // .then(data => files = data.map(item=>item.name))
  // .then(() => console.log('This is your data', files));

  function getDateArray(item) {
    let [dy, mn, yr] =  item.split("_")
    mn = mn-1;
    let data =new Date(yr, mn, dy);
    return data;
 }

 function getDateArrayy(item) {
  let [dy, mn, yr] = item.split(/[_.]+/);
  mn = mn-1;
  let data =new Date(yr, mn, dy);
  return data;
}
  let post1 = post.map(getDateArrayy)
  console.log(post1)
  // console.log(files)

  const incDate = dateArray.map(getDateArray);


    // const [selectedOption, setSelectedOption] = useState(null)
    const [lnk, setLnk] = useState('')
    const [showMap, setShowMap] = useState(false)
    const [startDate, setStartDate] = useState(null);
    
   let month, date, year
   if (startDate !== null) {
    [month, date, year]  = startDate.toLocaleDateString("en-US").split("/")
  } else {
    month = ''
    date = ''
    year = ''
  }

    // const handleChange = (e) => {
    //   setSelectedOption(e.value);
    //   setLnk(e.value);
    //   setShowMap(true);
    //   // console.log(`Option selected:`, e.value);
    // }


    

    const pad = (str, max) => {
      str = str.toString();
    return str.length < max ? pad("0" + str, max) : str;
    };

    let linkInit = 'https://raw.githubusercontent.com/nandisas/react_data/main/';
    let linkEnd = '.png'

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
      // alert(link)
      // console.log(`Option selected:`, e.value);
    }

    // let startYear = 2020;
    // const isActive = dt => {
    //   let m, d, y;
    //   d = dt.getDay();
    //   m = dt.getMonth();
    //   y = dt.getFullYear();

    //   [m, d, y]  = dt.toLocaleDateString("en-US").split("/")
    //   m = pad(m,2)
    //   d = pad(d,2)
    //   let linkMid = d.concat('_', m,'_',y) ;

    //   const day = dt.getDay();
    //   return day !== 0 && day !== 6;
    // };

    // const incDates=[new Date(), addDays(new Date(), 1)]

    // const groupStyles = {
    //   display: 'flex',
    //   alignItems: 'center',
    //   justifyContent: 'space-between',
    // };


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

      {/* <ImageOverlay
        bounds={[
          [5.99 , 67.40],
          [37.98, 97.67],
        ]}
        opacity= {1}
        url="https://i.ibb.co/fM78wJr/pngwing.png"
      /> */}

      </Map>
        <div>
          <h4>Select option</h4>
          <DatePicker
          selected={startDate}
          onChange={date => {setStartDate(date);mapChange(date)}}
          includeDates={incDate}
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
          {/* <Select
            // value={selectedOption}
            value = {options.filter(function(option) {
                    return option.value === selectedOption;
                    })}
            // onChange={(selectedOption)=>handleChange(selectedOption)}
            onChange={handleChange}
            options={options}
            autoFocus={true}
            placeholder="Select Map Color"
          />
          <h5>The selected option is {selectedOption} </h5> */}
        </div>

        {/* <DatePicker
          selected={startDate}
          onChange={date => {setStartDate(date);mapChange(date)}}
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
        /> */}
        {/* {month} */}
      </div>
      )
}

export default Nandi;