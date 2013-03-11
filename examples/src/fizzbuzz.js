var FizzBuzz = function() {
	function getResult(number) {
		var i = number,
			f = 'fizz',
			b = 'buzz',
			out = '';

		if(number === 0)
			return '0';

		out = !(i % 3) ?  !(i % 5)? f+b : f : !(i % 5)? b : i;

		return out.toString();
	}

	return {getResult : getResult};
};

