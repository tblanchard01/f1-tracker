export default function relativeTimeMapper({date, time}){
    const d = new Date(`${date} ${time} UTC`).toString().split(' ').slice(1,5)
    d[d.length-1] = d[d.length-1].split("").slice(0,5).join("")
    return d.join(' '); 
}