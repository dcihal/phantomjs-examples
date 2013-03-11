describe("FizzBuzz class", function() {
	it("Print fizz", function() {
		var fizzbuzz = new FizzBuzz();
		var result = fizzbuzz.getResult(3);
		expect(result).toEqual('fizz');
	});
}