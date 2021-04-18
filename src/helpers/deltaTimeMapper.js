export default function getTimeDelta(
  { date: firstDate },
  secondDate = new Date().toUTCString()
) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const delta = Math.floor((new Date(firstDate) - new Date(secondDate)) / oneDay + 1);
  if(delta === 0){
    return 'Today' 
  } 
  if(delta < 0){
    return `${Math.abs(delta)} days ago`
  }
  return `${delta} days to go`
}
