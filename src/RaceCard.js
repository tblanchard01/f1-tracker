export default function RaceCard({ raceName, localTime, formattedDelta }) {
  return (
    <div>
      <h1>{raceName}</h1>
      <h2>{localTime}</h2>
      <h3>{formattedDelta}</h3> 
    </div>
  );
}
