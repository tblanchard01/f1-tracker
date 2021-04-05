import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";

const url = "http://ergast.com/api/f1/2021.json";

export default function App() {
  const [schedule, setSchedule] = useState({});
  async function getData() {
    try {
      const data = await axios.get(url);
      setSchedule(data);
    } catch (e) {
      // console.log(e);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return <div className="App">{JSON.stringify(schedule)}</div>;
}
