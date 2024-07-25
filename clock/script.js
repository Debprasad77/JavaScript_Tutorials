
const button=document.getElementById("stop-time")

function showTime(){
    const currenTime=new Date();
    const time=`${currenTime.getHours()}:${currenTime.getMinutes()}:${currenTime.getSeconds()}`
    document.getElementById("time").innerText=time
}

// setTimeout(() =>{
//     console.log("hi"), 10000
// })

let interval = setInterval(showTime,1000)

button.addEventListener('click', () => {
    clearInterval(interval)
})



