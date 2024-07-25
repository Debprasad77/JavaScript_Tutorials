const button=document.getElementById("clickButton")
const uName=document.getElementById("userName")
const myName=document.getElementById("mName")

button.addEventListener("click", () => {
    const value=uName.value;
    localStorage.setItem("name",value)

    location.reload();

    // const val=localStorage.getItem("name")
    // myName.innerText=val;

})

window.addEventListener('load',() => {
    const val=localStorage.getItem("name")
    myName.innerText=val;

})