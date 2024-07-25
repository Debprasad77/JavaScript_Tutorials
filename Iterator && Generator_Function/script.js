// Iterators 

//learn more
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators


// Creating Own Iterator Function

// we can create a iteraion function but cant acces it through for ... of loops as it is not inter-defied

function makeRangeIterator(start = 0, end = Infinity, step = 1) {
    let nextIndex = start;
    let iterationCount = 0;
  
    const rangeIterator = {
      next() {
        let result;
        if (nextIndex < end) {
          result = { value: nextIndex, done: false };
          nextIndex += step;
          iterationCount++;
          return result;
        }
        return { value: iterationCount, done: true };
      },
    };
    return rangeIterator;
  }
  
// Run process Own Iterator Function 

//   const iter = makeRangeIterator(1, 10, 2);

//   let result = iter.next();
//   while (!result.done) {
//     console.log(result.value); // 1 3 5 7 9
//     result = iter.next();
//   }
  
//   console.log("Iterated over sequence of size:", result.value); // [5 numbers returned, that took interval in between: 0 to 10]
  
// Yield Keyword 

// can create own values as iterable object and also use for...of loop
function* count() {
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;

  }
  
  const even = count();
  
  for (const val of even) {
    // console.log(val);
  }


  
//Generator Functions

// use (*) after function Keyword
// we can create a generator  function easily and also acces it using for ..of loops

function* makeMyIteratorNew(start, end, step = 1) {
    for (let i = start; i <= end; i += step) {
      yield i;
    }
  }
  const el=makeMyIteratorNew(1,20,2)

  for (const val of el){
    console.log(val)
  }
  