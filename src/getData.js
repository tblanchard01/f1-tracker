import axios from 'axios'
import scheduleMapper from './helpers/scheduleMapper'
const url = "http://ergast.com/api/f1/2021.json";

export default async function getData(setSchedule) {
    try {
      const {data}  = await axios.get(url);
      setSchedule((scheduleMapper(data)));
    } catch (e) {
      alert('something went wrong');
    }
  }