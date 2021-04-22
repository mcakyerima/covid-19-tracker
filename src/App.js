import {React , useState , useEffect} from 'react'
import {
  MenuItem,
  FormControl, Select, Card, CardContent,
} from "@material-ui/core";
import './App.css';
import Infobox from './Infobox';
import Map from './Map'
import Table from './Table'
import { sortData , formater} from './utilities';
import Linegraph from './Linegraph.js';
import "leaflet/dist/leaflet.css";
import './infoBox.css'

function App() {
  const [countries, setCountries] = useState([]);
  const [country , setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData , setTableData] = useState([]);
  //Map center State determined the center of the map by default which i gave the coordinate of the center of the pecific ocean by default.
  const [mapCenter, setMapCenter] = useState({lat:34.80746 , lng: 40.4796});
  //mapZoom state specifies how far the map should zoom by default..whick we give 3
  const [mapZoom, setMapZoom] =useState(3);
  // collect the countries data and save it on the mapCountries state
  const [mapCountries , setMapCountries] = useState([])
  const [result , setResult ] = useState('Worldwide')
  //write a state for keeping track of cases typeof
  const [casesType , setCasesType] = useState('cases')
  //set initial state for worldwide results when app loads!
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
    .then(response => response.json())
    .then(data => {
      setCountryInfo(data)
      countryInfo.country = "worldide"
    })

  },[])

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
        const sortedData = sortData(data);
         setTableData(sortedData)
         setMapCountries(data)
         setCountries(countries)}
        )
  
    }
    getCoutriesData()
  }, []);
  const countryChange = async (event) => {
    const countryCode = event.target.value;
    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    setResult(countryCode);
    console.log(url);
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode);
      setCountryInfo(data);
      setMapCenter([data.countryInfo.lat , data.countryInfo.long])
      setMapZoom(4)
      console.log( 'boom' , mapCenter)
      
    })
  }

  return (

    <div className="App">
      <div className="left__container">
      <div className="app__header">
        <h1>Covid-19 Live Tracker by Mc Ak Yerima</h1>
        
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
      <div className="display__header">
      <h4>Showing result for {result}</h4>
      </div>
      <div className="app__stats">
              
               <Infobox
               acrtive = {casesType ===[ "cases"]}
               onClick={(e) => setCasesType('cases')}  title="Coronavirus Cases" total= {formater(countryInfo.cases)} cases={formater(countryInfo.todayCases)}/>
               <Infobox
               acrtive = {casesType ===[ "recovered"]}
               onClick={(e) => setCasesType('recovered')} title= "Recovered" total={formater(countryInfo.recovered)} cases={formater(countryInfo.todayRecovered)}/>
               <Infobox 
               acrtive = {casesType ===[ "deaths"]}
               onClick={(e) => setCasesType('deaths')} title = "Deaths" cases={formater(countryInfo.todayDeaths)} total={formater(countryInfo.deaths)}/>
                {/* info box */}
                {/* info box */}
                {/* info box */}
      </div> 
      <Map
      //pass cases tupe hook
      casesType={casesType}
      //passing the center and zoom as props to the map component
       center={mapCenter}
       zoom = {mapZoom}
       //accepting the countries prop and getting retrieving data from countries data
       countries = {mapCountries}/>
       
    </div>
    <Card className="right__container">
      <CardContent>
              <h3>Live Cases by Country</h3>
              {/* table */}
              <Table countries= {tableData}/>
              <h3 className='world'><span>|</span> Worldwide New { casesType }</h3>

              <Linegraph casesType = {casesType}/>
              {/* graph */}
              
      </CardContent>
    </Card>

    </div>
    
      
  );
}

export default App;
