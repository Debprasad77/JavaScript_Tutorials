// function main(){
//     const name="Debprasad Manna"

//     function sayMyName(){
//         console.log(name)
//     }

//     sayMyName()

// }

// main();



//change Size of a font in DOM

const text=document.getElementById("name")
const btn=document.getElementById("btn")

function font(size){

    function changeSize(){
        text.style.fontSize = `${size}px`
    }

    return changeSize;

}

const el= font(100)

btn.addEventListener('click',el)