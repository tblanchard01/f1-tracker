export default function scheduleMapper({
  MRData: {
    RaceTable: { Races: races },
  },
}) {
  return races && races.map(({raceName, date, time}) => {
   return {raceName, date, time}
  });
}
