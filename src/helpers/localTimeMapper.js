export default function localTimeMapper({date, time}){
    let d = new Date(`${date} ${time} UTC`).toString().split(' ').slice(1,5)
    d[d.length-1] = d[d.length-1].split("").slice(0,5).join("")
    d.splice(3, 0, " at")
    return d.join(" "); 
}