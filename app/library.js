
module.exports = {
//computeAverage: (num1, num2, num3) => {

	getPrime: (max) => 
	{
		if (typeof max === 'string' || max < 2 || typeof max === 'undefined')
		{
				
			return "Invalid input" ;
		}
		else
		{
		
			let sieve = [], i, j, primes = [];
			for (let i = 2; i <= max; ++i) 
			{if (!sieve[i]) 
			  
			      {
			        primes.push(i);
			        for (let j = i << 1; j <= max; j += i) 
			        {
			          sieve[j] = true;
			          
			        }
			        
			      }
			  }
		  	return primes;
		}
	}
}

