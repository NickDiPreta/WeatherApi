import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Stats from "./components/Stats";

function App() {
  const [zipcode, getZipcode] = useState("");
  const [place, setPlace] = useState("");
  const [temperature, setTemperature] = useState("");
  const [description, setDescription] = useState([]);
  const [mintemp, setMinTemp] = useState("");
  const [maxtemp, setMaxTemp] = useState("");
  const [hotcold, setHotCold] = useState("");

  const handleSubmit = async (event) => {
    setHotCold("");
    event.preventDefault();
    handleSearch(zipcode);
  };

  const handleSearch = async (zipcode) => {
    let place = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&units=imperial&appid=0cc0c4e42aeec28e41c2d533ce7a5bf5`;
    const res = await fetch(place);
    console.log(res);
    const json = await res.json();
    if (zipcode != "" && json.cod != "404") {
      setPlace(json.name);
      setTemperature(json.main.temp);
      if (json.main.temp > 90) {
        setHotCold("hot");
      } else if (json.main.temp < 40) {
        setHotCold("cold");
      }
      let desc = json.weather;
      setDescription(desc[0].description);
      setMinTemp(json.main.temp_min);
      setMaxTemp(json.main.temp_max);
      return;
    } else {
      setPlace("ENTER A VALID ZIPCODE");
    }
  };
  const handleChange = (event) => {
    getZipcode(event.target.value);
  };
  return (
    <div className="App">
      <h1>Weather</h1>

      <Form
        handleSubmit={handleSubmit}
        onChange={handleChange}
        zipcode={zipcode}
      />
      
        <div>
          <h1>{place}</h1>{" "}
          <Stats
            hotcold={hotcold}
            maxtemp={maxtemp}
            mintemp={mintemp}
            description={description}
            temperature={temperature}
          />{" "}
        </div>
      
    </div>
  );
}

export default App;
