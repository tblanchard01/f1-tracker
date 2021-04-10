import scheduleMapper from '../helpers/scheduleMapper'
export default function RaceCard ({raceName, date, time}){


    return <div>
        <h1>{raceName}</h1>
        <h2>{scheduleMapper({date, time})}</h2>
    </div>
}