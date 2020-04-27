
const fetch = require("node-fetch");

// strings have been second class literals
// TEMPLATE LITERALS
let word1 = "dylan";
let word2 = "israel";

// in the past we'd have to 

//const fullName = word1 + ' ' + word2;

const fullName = `${word1} ${word2}`
const multLine = `${word1}
${word2}`
console.log(fullName);
console.log(multLine);

// Called Object Destructuring

let human = { name: " Priyeshu ", age:"25", profession : "Writer/Engineer" };
let {name, profession} = human;

console.log(name,profession);   

// we can assign shortnames while destructuring arrays
let {name:nm,profession:pr} = human;
console.log(nm,pr);

nm="amit";
name = "amit"
human.name = "amit"

console.log(nm, name, human.name);
// nm, name, human.name are spearate. Their values can be changed if
// they are of variable type [ let ] only.
// it's not like we can change nm, and name/human.name will change

// Now array destructuring 

let [first,middle,last]= ['priyeshu','kumar','garg'];
console.log(first,last);
last='gupta';
console.log(first,last);


// Object literals allow us now to use the city and state
// coming from function without reassigning them on same names
// ES6 wants us to less write code.

function addressMaker(city, state) { 
    let oldAddress1 = {city:city,state:state};
    let newAddress1 = {city,state};
    console.log(oldAddress1);
    console.log(newAddress1);
}

addressMaker("Ghaziabd","UP");

let incomes = [100,200,500,600,7558,6654];

// Traditional For loop array is able to update the array values ?
for (let index = 0; index < incomes.length; index++) {
    incomes[index] = incomes[index]+9999;
    console.log(incomes[index]);
}

// Now the Modern loop is used for purely iterating over the values
// And these iterators do not support updating existing values

for (const iterator of incomes) {
    console.log(iterator);
}

incomes.forEach(element => {
    console.log(element);
});


// Noe see the Spread Operator
// It copies the entire array

let ages = [5,10,15];
let agesSpread = [...ages];
console.log(agesSpread);
agesSpread.push(true);
console.log(agesSpread);

// REST OPERATOR is very similar to the spread operator
// except that it allows you to fetch values
// it returns iterable form of numbers which can be used easily
// think of this as an easy and superior way of using the
// arguments 


function add(...nums) {
    console.log(nums);
}

// ARROW FUNCTIONS : EXTREMELY IMPORTANT

// It's amazing that even this function is calling the below mentioned javascript 
// function -- not the top one. 
// highlights the async behavior of JS
// form what I see it's evident the behaviour is not procedural.

add(4,3,33);



function add(...nums) {

    total = nums.reduce( (x,y)=>x+y); 
    console.log(total);
}

add(4,3,33);

numArrayz = [23,434,4,34,44];


// USing Default Arguments in the functions

function totaler(numArray1=[1,2,3]) {
    let total=0;
    numArray1.forEach((element) => {total = total+element});
    console.log(total); 
}
totaler([3,4,2]);
totaler();

// Includes - check if array has a value, earlier we used to use includes function
// This is still not supported by internet explorer
// returns a bool satatement
console.log(numArrayz.includes(23));

const apiURL = "https://reqres.in/api/users?page=2"

// Server calls with promise
function getcallAPI() {
    fetch(apiURL)
    .then( (response)=> console.log(response)  )
    .catch((error)=>console.log(error));
}

async function asyncAPICall() { 
    const response = await fetch(apiURL);
    console.log(response);
}

getcallAPI();
asyncAPICall();