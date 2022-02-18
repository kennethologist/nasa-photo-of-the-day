import axios from "axios";
import React, {useState, useEffect} from "react";
import "./App.css";
import PhotosList from './Components/PhotosList'

function App() {
  

  const [photos, setPhotos] = useState(null);
  const [startDate, setStartDate] = useState("2022-02-10");
  const [endDate, setEndDate] = useState("2022-02-15");

  useEffect(() => {
     
  }, [photos]);

  const showPhotos = () => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=kjkYsUEUw44ScfCllzKvvHqxXoNjCwbdneAZ1l61&start_date=${startDate}&end_date=${endDate}`)
    .then(resp => {
        setPhotos(resp.data);
        console.log(resp.data);
    }).catch(err => {
        console.log(err);
    });
  }

  const handleShowPhotosClick = () => {
    showPhotos();
  }

  return (
    <div className="App">
      <header>
        <h1><span role="img" aria-label='go!'>🚀</span>Nasa Photos of the Day<span role="img" aria-label='go!'>🚀</span></h1>
      </header>
      <section>
        <div>
          <input name="startDate" type="date" value={startDate} onChange={(e) => {setStartDate(e.target.value)}} placeholder="Start Date (YYYY-MM-DD)"></input>
          <input name="endDate" type="date" value={endDate} onChange={(e) => {setEndDate(e.target.value)}} placeholder="End Date (YYYY-MM-DD)"></input>
          <button onClick={() => {handleShowPhotosClick();}}>See Photos</button>
        </div>
      </section>
      <section>
        <PhotosList photos = {photos}/>
      </section>
    </div>
  );
}

export default App;
