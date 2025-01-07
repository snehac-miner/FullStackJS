//function declaration
//function expression
//arrow function

//function declaration
function add(a,b){
    return a+b;
}

// console.log(sum(20,30))

//function expression- when we store a functon in a variable
let sum1=function(a,b){
    return a+b;
};


console.log (sum1(10,20));

//arrow function (simplify func exp)

let sum2=(a,b)=> a+b;

console.log(sum2(100,200));


