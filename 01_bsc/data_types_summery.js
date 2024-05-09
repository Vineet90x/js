//primitive data types

//7 types : string , number , boolean , null , undefined ,symbol , bigint 

const score = 100 
const scoreValue = 100.5 
const isloggedin = true
const outsidetemp = null
let userEmail;

const id = Symbol("123")
const anotherid = Symbol("123")

console.log(id === anotherid);

const bigNumber =  234324342432343324n




//refernce type / non primitive types

//Array, objects, functions

const heros = ["shaktiman","naagraj","doga"]

let myobj = {
    name:"vineet",
    age: 22,
}

const myfunction = function (){
    console.log("hello world");
}

myfunction();

console.log(typeof userEmail)




// memory 

// stack(primitive) and heap(non-primitive)

let myyoutubename = "alpha"
let anothernaem = myyoutubename
anothernaem = "lmao"

console.log(anothernaem);
console.log(myyoutubename);

let user1 = {
    email:"user@google.com",
    upi:"user@ybl"
}

let user2 = user1

user2.email = "alpha@google.com"

console.log(user1.email);
console.log(user2.email);
console.log(user1);