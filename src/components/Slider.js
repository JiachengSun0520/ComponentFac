// import logo from '../logo.svg';
import '../App.css';
import axios, { Axios } from 'axios';

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {AppContext} from "../App";

function SliderComponent() {
    const  {
        headers,
        base_url,
        // isLoading,
        // setLoading,
        // range,  
        // setRange,
        sliderOut,
        setSliderOut,
        dropDownOption,
     } = React.useContext(AppContext)
    

     console.log(dropDownOption.value)
     const [isLoading, setLoading] = React.useState(true);
     const [range, setRange] = React.useState([0,0]);

    var d = new FormData();
    d.append('aggregate_fields', [dropDownOption]);

    const config =  {
    method: 'post',
    baseURL: base_url + 'aggregations',
    headers: headers,
    data:d
}
    console.log(config)


     React.useEffect(() => {
        axios(config).then(res => {
          console.log("begin", [Object.values(res.data)[0]["min"], Object.values(res.data)[0]["max"]])
          var s = Object.values(res.data)[0]["min"]
          var e = Object.values(res.data)[0]["max"]
    
          setRange([s,e])
          console.log("range", [s,e])
          setSliderOut([s,e])
          setLoading(false);
        });
        console.log("useEffect")
      }, []);



     const handleCommittedChange = () => {
        // console.log(`${value}°C`);
        console.log("onchange", sliderOut);
        // setDataSend(value);
        // var out = value
        // setDataSend(out);
        // console.log("dataSend", dataSend);
        // console.log('range', range);
        // axios(config).then(res => setRange([range.min, range.max]))
        // console.log(range)
        
        
      }
    
      // const [value, setValue] = React.useState([20,37])
      
      const handleChange = (event, newValue) => {
          setSliderOut(newValue)
          // setValue(range[0], range[1]);
          // console.log("onchange", value);
        //   setDataSend(newValue);
      };


      if (isLoading) {
        return "loading";
      }
    return (
        <div className="App">
          <header className="App-header">   
              <Box sx={{ width: 300 }}>
              <Slider
                min = {range[0]}
                max = {range[1]}
                getAriaLabel={() => 'Temperature range'}
                value={sliderOut}
                step={1}
                onChange={handleChange}
                onChangeCommitted={handleCommittedChange}
                valueLabelDisplay="auto"
              />
            </Box>
           </header>
           
         </div>
     );
}
export default SliderComponent;