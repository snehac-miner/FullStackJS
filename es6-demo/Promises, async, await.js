// Promise - really important for client side development interactivity
// Each promise is representing a future action
// Promise(pending, fulfilled or rejected)

// Producer and Consumer are two parties involved in a promise
//producer - code that will create the promise
// Javascript is also object oriented
//fullfilled or rejected is based on external condition


let condition = true;
//producer
function createPromise() {
    return new Promise((fulfilled, rejected) => {
        if (condition===true){
            fulfilled('promise is fullfilled')
        } else {
            rejected('promise is rejected')
        }
})
}

//consumer - code that will consume the promise
function consumePromise() {
    createPromise()
    .then((msg)=> console.log(msg)) 
    .catch(errMsg => console.log(errMsg))
}

async function consumePromise1() {
    let pr = createPromise();
    let res = await pr  ;
    console.log(res);
  
}
consumePromise();

