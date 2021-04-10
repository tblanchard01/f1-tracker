export default function getTimeDelta({date: firstDate},  secondDate = new Date().toString()) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
return Math.floor(((new Date(firstDate) - new Date(secondDate)) / oneDay));

}