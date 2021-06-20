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
      const {deltaTime, formattedDelta} = deltaTimeMapper({ date })

      return {
        key,
        raceName,
        deltaTime,
        formattedDelta,
        localTime: localTimeMapper({ date, time }),


      };
    })
  );
}
