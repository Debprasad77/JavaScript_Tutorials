const el=document.getElementById("your-loc")
const button=document.getElementById("src-btn")

async function getData(lat, long){
    const promise = await fetch(`
http://api.weatherapi.com/v1/current.json?key=6f882f30b809466bb3e140011241307&q=${lat},${long}&aqi=yes
`)
return await promise.json()
}

async function gotlocation(position)
{
    const result= await getData(
        position.coords.latitude,
        position.coords.longitude)

        console.log(result)
        el.innerText=
        `${result.location.name}, ${result.location.region}, ${result.location.country},
        Date & Time : ${result.location.localtime} 
        temparature : ${result.current.temp_c} feels like : ${result.current.feelslike_c}`
        



}

function failedLocation()
{
    console.log("there is Some issue")
}


button.addEventListener('click', async () => {
    navigator.geolocation.getCurrentPosition(gotlocation,failedLocation)
})