var context = require("./context");
var fileAsync;

var fsMock = {
    exists: function(filename, callback) {
        callback(true);
    },
    stat: function(filename, callback) {
        callback(null, {
            isFile: function() {
                return true;
            }
        });
    },
    readFile: function (filename, encoding, callback) {
        if (filename === "error") {
            callback(
                new Error("error reading file: " + filename)
            );
        }
        else {
            callback(null, "My Mock File Content");
        }
    }
};

describe("Read File Async test", function() {
    before(function () {
        // before() is the first thing we run before all your tests.
        // Do one-time setup here.
        context.mockery.enable({ useCleanCache: true });
    });
    beforeEach(function () {
        // beforeEach() is run before each test.
        // Replace 'fs' with our mock
        context.mockery.registerMock("fs", fsMock);

        // Explicitly telling mockery using the actual fileAsync is OK
        // without registerAllowable, you will see WARNING in test output
        context.mockery.registerAllowable("../fileAsync");

        fileAsync = require("../fileAsync");
    });
    describe("Test main method", function () {
        it("should return \"My Mock File Content\"", function (done) {
            // Now... Test!
            fileAsync(function(err, data){
                context.expect(data).to.equal("My Mock File Content");
                done();
            });
        });
    });
    afterEach(function () {
        // afterEach() is run after each test.
        context.mockery.deregisterAll();
    });
    after(function () {
        // after() is run after all your tests have completed.
        // Do teardown here.
        context.mockery.disable();
    });
});