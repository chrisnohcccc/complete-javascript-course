// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const x = 23;

const calcAge = birthYear => 2037 - birthYear;
console.log(calcAge(1991));
/*
const temperatures = [3, -2 ,6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
// temp amplitude is the difference between highest and lowest temp
// what is a sensor error
const calcTempAmplitude = function (temps) {
let max = temps[0];
for(let i=0; i<temps.length; i++){
  if(temps[i]> max) max = temps[i];
  }
  console.log(max);
}
  calcTempAmplitude([3,4,9]);
*/
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //value: Number (prompt('Degrees celsius:')),
    value: 10,
  };
 // console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

const printForecast = function(arr){
let str = '';
for (let i=0; i<arr.length; i++){
  str = str + ` ${arr[i]}
}
};