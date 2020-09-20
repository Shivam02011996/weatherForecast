export default function MillisToTime(millis){
  const sunset = new Date(millis* 1000).toLocaleTimeString();
  return sunset;
}