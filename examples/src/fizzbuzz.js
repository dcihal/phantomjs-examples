var FizzBuzz = function() {
	
};

FizzBuzz.prototype = {

	getResult : function(number) {
		var i = number,
			f = 'fizz',
			b = 'buzz',
			out = '';

		if(number === 0)
			return '0';

		out = !(i % 3) ?  !(i % 5)? f+b : f : !(i % 5)? b : i;

		return out.toString();

		// if(number % 3 == 0 && number % 5 == 0 && number != 0)
		// 	return "fizzbuzz";

		// if(number % 3 == 0 && number != 0)
		// 	return "fizz";

		// if(number % 5 == 0 && number != 0)
		// 	return 'buzz';

		// return number.toString();
	}

}