let arr = [10, 200, 3 - 0, 400, 5];

// Find elements smaller than 30
let newAr = [];

for (let element of arr) {
    if (element < 30) {
        newAr.push(element);
    }
}

console.log(newAr);

//method-2
// filter function will call the call back function. callback functions returns to filter. Filter will return to a variable
let newAr1 = arr.filter(function (element) {
    return element < 30;
})

console.log(newAr1);

//method-3
// we are passing this function element => element < 3 as arugument to another function. we call it as a callback
let newAr3 =  arr.filter(element => element < 30);

console.log(newAr3);    
