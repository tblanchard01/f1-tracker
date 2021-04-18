import localTimeMapper from "./localTimeMapper";
import deltaTimeMapper from "./deltaTimeMapper";
export default function scheduleMapper({
  MRData: {
    RaceTable: { Races: races },
  },
}) {
  return (
    races &&
    races.map(({ raceName, date, time }, key) => {
      return {
        key,
        raceName,
        date,
        time,
        localTime: localTimeMapper({ date, time }),
        deltaTime: deltaTimeMapper({ date }),
      };
    })
  );
}
