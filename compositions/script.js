
function add(a,b){
    return a+b
}


// function multiply(a,b){
//     return a*b;
// }

// change to array value return type

function multiply(args){
    return args[0] * args[1];
}

function square(val){
    return val*val
}


// function composeTwoFunction(fn1, fn2){
//     return function (a, b){
//         return fn2(fn1(a,b))
//     }
// }

// modern version es6

const c2f = (fn1, fn2) => (a,b) => fn2(fn1(a,b))


// unlimited Functions compositions

// function composeAll(...fns){
//     return function (...value){
//         return fns.reduce((a,b) => b(a), value);
//     }
// }

//modern es6 version

const composeAll = (...fns) => (...value) => fns.reduce((a,b) => b(a), value)

const result=composeAll(multiply, square, function(value) {
    return value+1
})

console.log(result(2,3))