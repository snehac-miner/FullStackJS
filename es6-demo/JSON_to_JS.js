//JS object
let student = {

    sno: 100,
    name: 'ravi',
    city:"Hyderabad",
    age:20
}

//convert js to JSON
let stdJson = JSON.stringify(student);// take JS object and retursn JSON
console.log(stdJson);


//convert JSON to js object

let stdobj=JSON.parse('{"sno":100, "name":"ravi"}')
console.log(stdobj)

//JSON format
let studentJSON = {

    "sno": 100,
    "name": "ravi",
    "city":"Hyderabad",
    "age":20
}

// JSON object understood by any technology. it is Javascript specific


