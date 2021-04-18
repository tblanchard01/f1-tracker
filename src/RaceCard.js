import localTimeMapper from "./helpers/localTimeMapper";
import deltaTimeMapper from "./helpers/deltaTimeMapper";

export default function RaceCard({ raceName, date, time, deltaTime, localTime }) {
  console.log({deltaTime, localTime});
  return (
    <div>
      <h1>{raceName}</h1>
      <h2>{localTimeMapper({ date, time })}</h2>
      <h3>{deltaTimeMapper({ date })}</h3> 
    </div>
  );
}
