import relativeTimeMapper from './helpers/relativeTimeMapper'
export default function RaceCard ({raceName, date, time}){
    return <div>
        <h1>{raceName}</h1>
        <h2>{relativeTimeMapper({date, time})}</h2>
       
    </div>
}