'use strict';

module.exports = {

 /* Find the average of three integers */
 computeAverage: (num1, num2, num3) => {
   let average;
   // your logic goes here
   average = (num1 + num2 + num3) / 3;
   return average;
 },
 
 /* Find the factorial of an integer */
 computeFactorial: (num) => {
   let factorial = num;
   // your logic goes here
   for(let i = num-1; i > 1; i--)
   {
     factorial = factorial * i;
   }
   return factorial;
 },

 /* Convert a given Celcius temperature to Fahrenheit */
 convertTempCtoF: (cTemp) => {
   let fTemp;
   // your logic goes here
   fTemp = ((9/5) * cTemp) + 32 ;

   return fTemp;
 },

 /* Convert a given Fahrenheit temperature to Celcius */
 convertTempFtoC: (fTemp) => {
   let cTemp;
   // your logic goes here

   cTemp = (5/9) * (fTemp - 32);
   return cTemp;
 }

}
