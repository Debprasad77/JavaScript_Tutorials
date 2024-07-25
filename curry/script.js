// function add(a){
//     return function(b){
//         return function(c){
//            return a+b+c
//         }
//     }
// }
// console.log(add(2)(3)(5))

//modern version of upper curry

const add = (a) => (b) => (c) =>{
    return a+b+c
}
console.log(add(2)(3)(5))


// function sendEmail(to){
//         return function(subject){
//             return function(body){
//                console.log(`Sending email to ${to} about ${subject} : ${body}`)
//             }
//         }
//     }

// let step1= sendEmail("debprasad7047@gmail.com")
// let step2= step1('order confirmation')
// step2('its very urgent call me')

//Modern version of js of upper js curry

const sendEmail= to => subject => body =>{
    return `Sending email to ${to} about ${subject} : ${body}`
}
let step1= sendEmail("debprasad7047@gmail.com")
let step2= step1('order confirmation')
console.log(step2('its very urgent call me'))

