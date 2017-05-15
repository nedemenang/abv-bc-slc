'use strict';

module.exports = {

 /* Find the average of three integers */
 
 /* Find the factorial of an integer */
    getPrime: (num) => {
      let factorial = num;
      // your logic goes here
      for(let i = num-1; i > 1; i--)
      {
        factorial = factorial * i;
      }
      return factorial;
    },

}
