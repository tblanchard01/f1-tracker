export default function scheduleMapper({
  MRData: {
    RaceTable: { Races: races },
  },
}) {
  return races && races.map(({raceName, date, time}, key) => {
    const relativeTime = getRelativeTime(date)
   return {key,raceName, date, time, relativeTime }
  });
}
