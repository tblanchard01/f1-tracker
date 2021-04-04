import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';

function App() {

  const [schedule, setSchedule] = useState({})

  useEffect(() => {
    async function getSchedule(){
      const data = await axios.get('http://ergast.com/api/f1/2021.json')
      setSchedule(data)

    }
    getSchedule()

  }, [])
  return (
    <div className="App">
      <div>{JSON.stringify(schedule)} </div>
    </div>
  );
}

export default App;
