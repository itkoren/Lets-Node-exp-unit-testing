var factorial = require("../factorial");
var expect = require("chai").expect;

describe("Factorial test", function() {
    before(function () {
        // before() is the first thing we run before all your tests.
        // Do one-time setup here.
    });
    beforeEach(function () {
        // beforeEach() is run before each test.
    });
    describe("Test main method", function () {
        it("should return 6 for input 3", function () {
            // Now... Test!
            factorial(7, function(err, result){
                expect(result).to.equal(5040);
            });
        });
    });
    afterEach(function () {
        // afterEach() is run after each test.
    });
    after(function () {
        // after() is run after all your tests have completed.
        // Do teardown here.
    });
});