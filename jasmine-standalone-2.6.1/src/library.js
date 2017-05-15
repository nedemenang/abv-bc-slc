
function getPrime(num) 
{
	getPrime = (num)  => 
	{
		let primes = []; //O(1)

		if (typeof num === 'string' || num < 2 || typeof num === 'undefined')
		{
				
			return "Invalid input" ;
		}
		else
		{
		    for (let i = 2; i <= num; i++) // O(n)
		    {
		        if (isPrime(i)) // O(Sqrt(n))
		        {
		            primes.push(i); //O(1)
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
	    let squareRoot = Math.floor(Math.sqrt(n)); // O(1)

	    for (let j = 2; j <= squareRoot; j++) //O(sqrt(n))
	    {
	        if (n % j == 0)
	        {
	            return false;
	        }
	    }
	    return true;
    }
}