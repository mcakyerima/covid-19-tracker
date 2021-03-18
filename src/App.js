import {React , useState} from 'react'
import {
  MenuItem,
  FormControl,
  Select
} from "@material-ui/core";
import './App.css';

function App() {
  const [countries, setCountry] = useState([
    "Borno", "kano" , "yobe" , "damaturu"
  ]);
  console.log("this is" , countries)
  return (

    <div className="App">
      <div className="app__header">
        <h1>this it awesome</h1>
        <FormControl className="app_dropdown">
          <Select
            variant= "outlined"
            value="abc">
              {/* map through coutry list and display a drop down component */}
            {countries.map((country) => (
                  <MenuItem value={country}>{country}</MenuItem>
            ))}
              {/* <MenuItem value="worldwide">WorldWide</MenuItem>
              <MenuItem value="worldwi">coool</MenuItem>
              <MenuItem value="worldwide">aawesome</MenuItem>
              <MenuItem value="worldwide">great</MenuItem>
              <MenuItem value="worldwide">rediculous</MenuItem>
              <MenuItem value="worldwide">fucused</MenuItem>
              <MenuItem value="worldwide">final</MenuItem> */}
          </Select>

        </FormControl>
        
      </div>
      {/* header */}
      {/* title  _ select dropdown*/}
      {/* info box */}
      {/* info box */}
      {/* info box */}
      {/* info box */}


      {/* table */}
      {/* grap */}
      {/* map */}
    </div>
  );
            }

export default App;
