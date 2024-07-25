
const button=document.getElementById("timer")

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
    const val= prompt('Enter The Time in Seconds')


    // if(count==val)
    //     {
    //         count++
    //         console.log(count)
    //         clearInterval(interval)
            
    //     } 
    
})

// setInterval(clearInterval(interval),5000)





