function getUsers(){
    //make API call for other server
    // fetch function returns a promise. Future action dependent on external server
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(users=>console.log(users))
    .catch(err=>console.log("err is ", err))

    //axios is a library that makes it easier to make API calls
}
getUsers();
async function getUsers1(){
    //make API call for other server
    // fetch function returns a promise. Future action dependent on external server
    let res = await fetch('https://jsonplaceholder.typicode.com/users')
    let users = await res.json();
    console.log(users);

    //axios is a library that makes it easier to make API calls
}



getUsers1();

console.log("This is lunch time");