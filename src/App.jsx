import { useState, useEffect } from 'react';


function App() {

  const [apiData, setApiData] = useState({});
  const [getState, setGetState] = useState('28277');
  const [state, setState] = useState('28277');

  const apiKey = "e69f1c9ec550f27d563d6d98e63b84ec";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?zip=${state}&units=imperial&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setApiData(data));
  }, [apiUrl]);

  const inputHandler = (event) => {
    setGetState(event.target.value);
  };

  const submitHandler = () => {
    setState(getState);
  };

  return (

    <div className="App">
      <header>
        <h1>React Weather App</h1>
      </header>
      <div>
      <div className="card">
        <div className="search">
        <label className="zipLabel">
              Enter Zip
            </label>
          <div className="searchBar">
            <input
              type="text"
              className="searchInput"
              onChange={inputHandler}
              value={getState}
            />
            <button className="searchButton" onClick={submitHandler}>
            Search
          </button>
      </div>

    <div className="cardTwo">
      <img
        src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
        alt="weather status icon"
        className="weather-icon"
      />
      <p className="temp">{Math.trunc(apiData.main.temp)}&deg;F</p>
      </div>
      <h2><strong>{apiData.name}</strong></h2>
      <div className="page">
        <div className="colOne">
          <p>Low: {Math.trunc(apiData.main.temp_min)}&deg;F</p>
          <p>High: {Math.trunc(apiData.main.temp_max)}&deg;F</p>
          <p>Feels Like: {Math.trunc(apiData.main.feels_like)}&deg;F</p>
        </div>
        <div className="columnTwo">
          <p>Conditions: {apiData.weather[0].main}</p>
          <p>Humidity: {apiData.main.humidity}%</p>
          <p>Wind Speed: {apiData.wind.speed} mph</p>
        </div>
      </div>

      
    </div>
    </div>
    </div>
    </div>
      
  );
}

export default App;
