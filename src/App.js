import "./App.css";
import getData from './getData'
import React, { useState, useEffect } from "react";


export default function App() {
  const [schedule, setSchedule] = useState({});
   const getSchedule = () => getData(setSchedule)
  useEffect(() => {
    getSchedule()
  }, []);
  return <div className="App">{JSON.stringify(schedule)}</div>;
}
