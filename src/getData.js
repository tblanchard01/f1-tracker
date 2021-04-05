import axios from 'axios'
 const url = "http://ergast.com/api/f1/2021.json";

export default async function getData(setSchedule) {
    try {
      const data = await axios.get(url);
      setSchedule(data);
    } catch (e) {
      // console.log(e);
    }
  }