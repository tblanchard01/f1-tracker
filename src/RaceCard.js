import relativeTimeMapper from "./helpers/relativeTimeMapper";
import deltaTimeMapper from "./helpers/deltaTimeMapper";

export default function RaceCard({ raceName, date, time }) {
  
  return (
    <div>
      <h1>{raceName}</h1>
      <h2>{relativeTimeMapper({ date, time })}</h2>
      <h3>{deltaTimeMapper({ date })}</h3> 
    </div>
  );
}
