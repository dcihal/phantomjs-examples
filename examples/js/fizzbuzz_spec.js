describe("FizzBuzz", function() {
	it("should return 'fizz' for multipler of 3", function() {
		var fizzbuzz = new FizzBuzz();
		var result = fizzbuzz.getResult(3);

		expect(result).toEqual("fizz");
	});

	it("should return 'buzz' for multipler of 5", function() {
		var fizzbuzz = new FizzBuzz();
		var result = fizzbuzz.getResult(5);

		expect(result).toEqual("buzz");
	});

	it("should return 'fizzbuzz' for multipler of 5 and 3", function() {
		var fizzbuzz = new FizzBuzz();
		var result = fizzbuzz.getResult(15);

		expect(result).toEqual("fizzbuzz");
	});

	it("should return '7' for not fizzbuzz", function() {
		var fizzbuzz = new FizzBuzz();
		var result = fizzbuzz.getResult(7);

		expect(result).toEqual("7");
	});

	it("should return '0' for not 0", function() {
		var fizzbuzz = new FizzBuzz();
		var result = fizzbuzz.getResult(0);

		expect(result).toEqual("0");
	});

});