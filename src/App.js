import "./App.css";
import getData from './getData'
import React, { useState, useEffect } from "react";
import RaceCard from './RaceCard'


export default function App() {
  const [schedule, setSchedule] = useState({});
   const getSchedule = () => getData(setSchedule)
  useEffect(() => {
    getSchedule()
  }, [schedule]);
  return <div className="App">{schedule.map(race => <RaceCard {...race}/> )}</div>
}
