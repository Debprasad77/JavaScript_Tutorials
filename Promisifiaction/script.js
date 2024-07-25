
//promisification

//more about it 
// https://javascript.info/promisify



//promisify any function by down function (1)

function promisify(fn) {
    return function (...args) { // return a wrapper-function (*)
      return new Promise((resolve, reject) => {
        fn(...args, (error, result) => { // our custom callback for f (**)
            if(error) {
                return reject(error);
            }else{
                return resolve(result);
            }
        });
    });
  };
}
  

// old school javascript function process to promisify (1)(2)

function loadScript(src, callback) {
    const script = document.createElement('script');
    script.src = src;
  
    script.onload = () => callback(null, script);
    script.onerror = (err) => callback(new Error('you got an Error'));
  
    document.head.appendChild(script);
  }


// normal to use promisfy any function (without async)
// const loadScriptNew = promisify(loadScript)
// loadScriptNew('test.js')
// .then(()=> console.log("Done"))
// .catch((err) => console.log("You Have faced an error"))

// using IIFE  to promisify (after(1))

const loadScriptNew = promisify(loadScript)
(async () => {
    try{
        const result= await loadScriptNew("test.js")
        console.log("Done");
    }catch(error){
        console.log("Error is coming");
    }  
})();



//promisify old school js function after(2)

//   loadScript('test.js', (err,script) => {
//     if(err){
//         console.log(err)
//     }else{
//         console.log("Script Loaded")
//     }

//   })