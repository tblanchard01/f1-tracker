export default function getTimeDelta(
  { date: firstDate },
  secondDate = new Date().toUTCString()
) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const delta = Math.floor(
    (new Date(firstDate) - new Date(secondDate)) / oneDay + 1
  );
  let formattedDelta = delta;
  if (delta === 0) {
    formattedDelta = "Today";
  }
  if (delta < 0) {
    formattedDelta = `${Math.abs(delta)} days ago`;
  } else {
    formattedDelta = `${delta} days to go`;
  }
  return {deltaTime: delta, formattedDelta};
}
