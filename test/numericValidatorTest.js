var NumericValidator = require("../numericValidator");
var expect = require("chai").expect;
var context = {};

describe("Numeric Validator test", function() {
    before(function () {
        // before() is the first thing we run before all your tests.
        // Do one-time setup here.
        context.validator = new NumericValidator();
    });
    beforeEach(function () {
        // beforeEach() is run before each test.
    });
    describe("Test main method", function () {
        it("should emit \"numeric\" event with 10 for input 10", function () {
            // Now... Test!
            context.validator.on("numeric", function(data){
                expect(data).to.equal(10);
            });
            context.validator.validate(10);
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