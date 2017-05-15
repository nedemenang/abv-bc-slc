
function getPrime(num) 
{
	getPrime = (num)  => 
	{
		let primes = [];

		if (typeof num === 'string' || num < 2 || typeof num === 'undefined')
		{
				
			return "Invalid input" ;
		}
		else
		{
		    for (let i = 2; i <= num; i++)
		    {
		        if (isPrime(i))
		        {
		            primes.push(i);
		        }
		    }   
		}
		return primes	;
    }
}

function isPrime (n)
{
	isPrime = (n) =>
	{
	    let squareRoot = Math.floor(Math.sqrt(n));

	    for (let j = 2; j <= squareRoot; j++)
	    {
	        if (n % j == 0)
	        {
	            return false;
	        }
	    }
	    return true;
    }
}