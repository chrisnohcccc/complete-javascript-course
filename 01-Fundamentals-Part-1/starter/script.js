/*let js = 'amazing';
console.log(40+8+23-10);

console.log("Jonas");
console.log(23);

let firstName = "Chris";
console.log(firstName);

firstName = "Donkey";

*/

/* const birthYear = 2000;
// birthYear = 1990;
var job = 'progranner';
job = 'teacher';

console.log(job);
lastName = 'Schmed';
console.log(lastName);
*/
/*const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 **3);
// 2 **3 means 2 to the power 3 = 2*2*

const firstName = 'Jonas';
const lastName = 'lol';
console.log(firstName +' ' +lastName);

let x = 10 + 5;
x+=100;
console.log(x + ageJonas);

console.log(ageJonas< ageSarah);

const isFullAge = ageSarah >=18;

console.log(isFullAge);

*/


/*const now =2040;
const ageJohn = now - 2020;
const ageBoo = now -2030;

console.log(now-2020 > now -2030);

console.log(typeof 'dick');

const averageAge = (ageJohn + ageBoo) /2;
console.log(ageJohn, ageBoo, averageAge);

let country;
let continent;
let population = 0;

country = 'Australia';
continent = 'Australia';
population = 500;

console.log(country, continent, population);


let isIsland = false;
const language = 'English';

console.log(isIsland, population, language);
*/

/*const firstName = 'David';
const job = 'leb';
const birthYear = 2000;
const year = 2024;

const why = "I'm " +  firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(why);

const gay = `I'm ${firstName}, a ${year-birthYear} year old ${job}! lmao im so cool haha xd skibidi toilet`;
console.log(gay);

console.log(`String
multiple
lines`);
 
console.log('String with \n\
multiple \n\
lines');
*/
/*
const age = 19; 
const isOldEnough = age >= 18;

if (isOldEnough){
  console.log('Sarah can start driving license 🚗');
} else{
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}
let century;
const birthYear = 2012;
if(birthYear <= 2000){
  century = 20;
}else{
  century = 21;
}
console.log(century);
console.log(`this person is born in the ${century} century`);
*/
/*
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 
if(BMIMark>BMIJohn){
    console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`)
}else{
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`)
}
*/
/*
const InputYear = '1991';
console.log(Number(InputYear), InputYear);
console.log(Number(InputYear) + 18);

console.log(Number('Jonas'));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log('I am ' + 23 + ' years old')

let n = '1' + 1;
n = n -1;
console.log(n);
*/

//5 falsy, underfined, null, nan, 0 , ''
/*
console.log(Boolean(0));
console.log(Boolean('gat'));
console.log(Boolean({}));

let height = 0;
if(height){
  console.log("Height is defined");
}else{
  console.log("Height is not defined");
} */
/*
const age = 18;
if(age === 18) console.log("adult");

const names = Number(prompt("What is ur name?"));
console.log(names);
console.log(typeof names);

if (names === 11) {
  console.log("Gayy");
} else if (names === 5){
  console.log("Minor!")
} else if (names === 2){
  console.log("u baby")
} else {
  console.log("NAH")
}
*/
/*
const hasDriversLicense = true;
const hasGoodVision = true;
const isTired = true;
console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || !hasGoodVision);

if (hasDriversLicense && hasGoodVision && !isTired){
  console.log('Sarah will drive');
}else{
  console.log('nah');
} */
 /*
const day = 'Wednesday';
switch(day) {
  case 'monday':
  console.log('Plan course structure');
  console.log('Go to coding meetup');
  break;
  case'tuesday':
  console.log('Prepare theory videos');
  break;
  case'Wednesday':
  case'Thursday':
  console.log('Write code examples');
  break;
  case 'friday':
    console.log('Record videos');
    break;
  case 'saturday':
  case 'sunday':
    console.log('Enjoy weekend');
    break;
    default:
      console.log('Not a valid day');
} */
/*
const age = 13;
age >= 18 ? console.log('I like to drink wine') :
console.log('I like to drink piss');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink);

let drink2;
if(age >=18){
  drink2 = 'wine';
} else{
  drink2 = 'water';
}
console.log(drink2);

console.log(` I like to drink ${age >= 18 ? 'wine' : 'water'}` );
*/

const bill = 275;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
bill * 0.2;
console.log(` The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}` );
