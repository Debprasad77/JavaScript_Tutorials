// IIFE = Immediately Invoked Function Expression

// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// Read Above article for More

// normal function to use IIFE

(function add(a,b){
    console.log (a+b)
})(2, 3);       //semicolon(;) must

(() => console.log("I am Exs6"))();

const val=(() => 100)();
console.log(val)

//async function using IIFE

 const data = (async () => await fetch())()


// creating private and public varibale using IIFE

const atm = function(initialBalance) {
    let balance = initialBalance

    function withdraw(amt){
        if (amt> balance){
            return "fuck off bro !!!"
        }
        else{
            balance-=amt
            return balance
        }
    }
    return {withdraw}
}

const Debprasad = atm(2000)
console.log("Available Balance is : ",Debprasad.withdraw(500))
console.log("Available Balance is : ",Debprasad.withdraw(1500))
console.log("Available Balance is : ",Debprasad.withdraw(500))