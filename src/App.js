import React, {useState, useEffect} from 'react'
import SliderComponent from './components/Slider';



export const AppContext = React.createContext();

function App() {
  const base_url = 'https://voyages3-api.crc.rice.edu/voyage/'
  const headers = {'Authorization': 'Token 1bd7b6a695d87fb17a752fdcf58cc98c28486dd1'}

  //slider
  const [sliderOut, setSliderOut] = React.useState([0,0]);


    // options
  const [dropDownOption, setDropDownOption] = React.useState("voyage_slaves_numbers__imp_total_num_slaves_disembarked");













    return (
        <div>
            <AppContext.Provider
    const value = {{
        headers,
        base_url,

        //dropdown
        dropDownOption,



        //slider

        sliderOut,
        setSliderOut,
    }}
  >

      <SliderComponent/>
    
    </AppContext.Provider>
        </div>
            
    );

}

export default App;