import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({updateInfo}) {
  let [city, setcity] = useState("");
  const API_URL = "http://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "aa2f2ce5d2cbe2e6130febf9f76d65ec";

  let getweatherInfo = async () => {
    let response = await fetch(
      `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );
    
    let jsonresponse = await response.json();
    console.log(jsonresponse);
    let result = {
      city:city,
      temp: jsonresponse.main.temp,
      tempMAx: jsonresponse.main.temp_max,
      tempMin: jsonresponse.main.temp_min,
      humidity: jsonresponse.main.humidity,
    };
    console.log(result);
    return result;

  };

  let handleChange = (evt) => {
    setcity(evt.target.value);
  };

  let handleSubmit = async(evt) => {
    evt.preventDefault();
    console.log(city);
    setcity("");
    let NewInfo = await getweatherInfo();
    updateInfo(NewInfo);npnpm
  };

  return (
    <div className="searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
