import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import PhotosList from './Components/PhotosList'

function App() {
  useEffect(() => {

  }, []);

  const [photos, setPhotos] = useState(null);
  const [startDate, setStartDate] = useState("2022-02-16");
  const [endDate, setEndDate] = useState("2022-02-25");

  const showPhotos = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=kjkYsUEUw44ScfCllzKvvHqxXoNjCwbdneAZ1l61&start_date=${startDate}&end_date=${endDate}`)
    .then(resp => {
        setPhotos(resp.data);
        console.log(resp.data);
    }).catch(err => {
        console.log(err);
    });
  }

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <header>
        <h1><span role="img" aria-label='go!'>🚀</span>Nasa Photos of the Day<span role="img" aria-label='go!'>🚀</span></h1>
      </header>
      <section>
        <div>
          <input name="startDate" value={startDate} onChange={(e) => {setStartDate(e.target.value)}} placeholder="Start Date (YYYY-MM-DD)"></input>
          <input name="endDate" value={endDate} onChange={(e) => {setEndDate(e.target.value)}} placeholder="End Date (YYYY-MM-DD)"></input>
          <button onClick={() => {showPhotos();}}>See Photos</button>
        </div>
      </section>
      <section>
        <PhotosList />
      </section>
    </div>
  );
}

export default App;
