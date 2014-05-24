var context = require("./context");
var NumericValidator = require("../numericValidator");

describe("Numeric Validator test", function() {
    before(function () {
        // before() is the first thing we run before all your tests.
        // Do one-time setup here.
        context.validator = new NumericValidator();
    });
    beforeEach(function () {
        // beforeEach() is run before each test.
        context.numeric = context.sandbox.spy();
        context.nonumeric = context.sandbox.spy();
    });
    describe("Test main method", function () {
        it("should emit \"numeric\" event with 10 for input 10", function () {
            // Now... Test!
            context.validator.on("numeric", function(data){
                context.expect(data).to.equal(10);
            });
            context.validator.validate(10);
        });
        it("should emit \"numeric\" event for input 10", function() {
            context.validator.on("numeric", context.numeric);
            context.validator.validate(10);
            context.expect(context.numeric.calledOnce).to.be.true;
            context.expect(context.numeric.calledWith(10)).to.be.true;
        })
        it("should emit \"error\" event for input \"number\"", function () {
            context.validator.on("error", context.nonumeric);
            context.validator.validate("number");
            context.expect(context.nonumeric.calledOnce).to.be.true;
            context.expect(context.nonumeric.calledWith("Data is not numeric")).to.be.false;
        });
    });
    afterEach(function () {
        // afterEach() is run after each test.
        context.sandbox.restore();
    });
    after(function () {
        // after() is run after all your tests have completed.
        // Do teardown here.
    });
});