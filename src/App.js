import {React , useState , useEffect} from 'react'
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';
import Infobox from './Infobox'

function App() {
  const [countries, setCountries] = useState([]);
  const [country , setCountry] = useState('worldwide');
  const value = "Albania"

  // api calls to get data - https://disease.sh/vs/covid-19/countries
  // then use a useEffect function to call that data once when app loads or country variable changes
  useEffect(() => {
    // use async -> send a request and wait for it, then do something with the result
    const getCoutriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
                  // "https://disease.sh/v3/covid-19/countries"
      .then((response) => response.json())
      .then((data) =>{
        const countries = data.map((country) => (
          { name : country.country,
          value: country.countryInfo.iso2}
        ));
         setCountries(countries)}
        )
  
    }
    getCoutriesData()
  }, []);
  const countryChange = async (event) => {
    const countryCode = event.target.value;
    console.log(countryCode);
    setCountry(countryCode)
  }

  return (

    <div className="App">
      <div className="app__header">
        <h1>this it awesome</h1>
        <FormControl className="app_dropdown">
          <Select variant= "outlined" value={country} onChange={countryChange}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {/* map through coutry list and display a drop down component */}
            {countries.map((country) => (
                  <MenuItem  value={country.name}>{country.name}</MenuItem>
            ))}
              {/* <MenuIte value="worldwide">WorldWide</MenuIte'm>
              <MenuItem value="worldwi">coool</MenuItem>
              <MenuItem value="worldwide">aawesome</MenuItem>
              <MenuItem value="worldwide">great</MenuItem>
              <MenuItem value="worldwide">rediculous</MenuItem>
              <MenuItem value="worldwide">fucused</MenuItem>
              <MenuItem value="worldwide">final</MenuItem> */}
          </Select>

        </FormControl>
        
      </div>
      <div className="app__stats">
               <Infobox/>
                {/* info box */}
                {/* info box */}
                {/* info box */}
      </div>


      {/* table */}
      {/* grap */}
      {/* map */}
    </div>
  );
            }

export default App;
