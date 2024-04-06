'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive');

// const private = '321';
// const interface = 'Audio';
*/
/*
function logger() {
  console.log('My name is Jonas');
}

//calling / running / invoking function
logger();
logger();


function fruitProcessor(apples, oranges) {
  const juice = ` Juice with ${apples} apples and ${oranges} oranges.` ;
  return juice; 
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
console.log(num);
*/

//Function declaration
/*
function calcAge1(birthYeah){
  return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

//Function expression
const calcAge2 = function(birthYeah){
  return 2037- birthYeah;
}
const age2 = calcAge2(1991);

console.log(age1, age2);

//

*/



//Arrow Function 
/*
const calcAge3 = birthYeah => 2037 - birthYeah;

const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
  const age = 2037 - birthYeah;
  const retirement = 65 - age;
  return ` ${firstName} retires in7  ${retirement} years` ;
}

console.log(yearsUntilRetirement(1991, 'Jonas')); 
console.log(yearsUntilRetirement(1991, 'Bob')); 
*/

/*
function cutFruitPieces(fruit){
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
 const applePieces = cutFruitPieces(apples);
 const orangePieces = cutFruitPieces(oranges);

 const juice = ` Juice with ${applePieces} apples and ${orangePieces} oranges.` ;
 return juice;
}
console.log(fruitProcessor(2, 3)); 
*/
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);

console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2] ='Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037-1991, 'teacher', friends];
console.log(jonas);
 */
/*
const friends = ['David', 'Bob', 'James'];
friends.push('Heep');
console.log(friends);

friends.pop();
const poop = friends.pop();
console.log(friends);
console.log(poop);

console.log(friends.indexOf('David'));

console.log(friends.includes('Jake'));

if(friends.includes('David')) {
  console.log('You have a friend called Peter');
}
*/
/*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2034-1991
}
console.log(jonas);
console.log(jonas.lastName);

const interestedIn = prompt('Do u love jonas?')
console.log(interestedIn); 
*/

 /*
const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmed',
  birthYeah: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false,

  //calcAge: function(birthYeah){
  //  return 2037 - birthYeah;
  //}
  calcAge: function(){
      return 2037 - this.birthYeah;
},
getSummary: function(){
  return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license.`
}
};



// Challenge
//"Jonas is a 46-year old teacher, and he has a/no driver's license"
console.log(jonas.getSummary());
*/



/*
for(let rep = 1; rep<=10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}
*/
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];
const types = [];
for(let i=0; i<jonas.length; i++){
  console.log(jonas[i], typeof jonas[i]);

 // types[i] = typeof jonas[i];
 types.push(typeof jonas[i]);
}

console.log(types);

const years = [1991, 2007, 1969, 2020];

const ages =[];

for(let i=0; i<years.length; i++){
  ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
for (let i=0; i<jonas.length; i++){
if(typeof jonas[i] === 'number') break;
console.log(jonas[i], typeof jonas[i]);
}
*/
/*
const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Peter', 'Steven']
];

for(let i=jonas.length-1; i>0; i--){
  console.log(i, jonas[i]);
}

for (let excercise =1; excercise< 4; excercise++){
  console.log(` Starting excercice ${excercise}` );
  for(let rep =1; rep<6; rep++){
    console.log(`Excercise ${excercise}: Lifting weight repetition ${rep}` )
  }
}
*/
for(let rep = 1; rep<=10; rep++) {
  //console.log(`Lifting weights repetition ${rep}`);
}

let rep =1;
while(rep <=10){
  //console.log(` i need to eat some ${rep}` );
  rep++;
}


let dice = Math.trunc(Math.random() * 6) + 1 ;

while(dice !== 6){
  console.log(` You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6 + 1) ;
  if(dice ===6) console.log('loop will end');
}