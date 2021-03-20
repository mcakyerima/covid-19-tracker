import {React , useState , useEffect} from 'react'
import {
  MenuItem,
  FormControl, Select, Card, CardContent,
} from "@material-ui/core";
import './App.css';
import Infobox from './Infobox';
import Map from './Map'
import Table from './Table'

function App() {
  const [countries, setCountries] = useState([]);
  const [country , setCountry] = useState('worldwide');
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData , setTableData] = useState([]);
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
         setTableData(data)
         setCountries(countries)}
        )
  
    }
    getCoutriesData()
  }, []);
  const countryChange = async (event) => {
    const countryCode = event.target.value;
    const url = countryCode === "worldwide" ? "https://disease.sh/v3/covid-19/all" : 
    `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    console.log(url);
    await fetch(url)
    .then(response => response.json())
    .then(data => {
      setCountry(countryCode)
      setCountryInfo(data);
    })
  }
  console.log('This is the New Country Info' , countryInfo)

  return (

    <div className="App">
      <div className="left__container">
      <div className="app__header">
        <h1>Covid-19 Live Tracker</h1>
        
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
      <h4>Showing result for {countryInfo.country}</h4>
      </div>
      <div className="app__stats">
              
               <Infobox title="Coronavirus Cases" total= {countryInfo.cases} cases={countryInfo.todayCases}/>
               <Infobox title= "Recovered" total={countryInfo.recovered} cases={countryInfo.todayRecovered}/>
               <Infobox title = "Deaths" cases={countryInfo.todayDeaths} total={countryInfo.deaths}/>
                {/* info box */}
                {/* info box */}
                {/* info box */}
      </div>
      


      
      <Map/>
    </div>
    <Card className="right__container">
      <CardContent>
              <h3>Live Cases by Country</h3>
              {/* table */}
              <Table countries= {tableData}/>
              <h3>Worldwide New Cases</h3>
              {/* graph */}
              
      </CardContent>
    </Card>

    </div>
    
      
  );
            }

export default App;
