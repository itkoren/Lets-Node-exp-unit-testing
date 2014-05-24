var context = require("./context");
var app = require("../express");
var request = require("supertest");

describe("Read File Async test", function() {
    before(function () {
        // before() is the first thing we run before all your tests.
        // Do one-time setup here.
    });
    beforeEach(function () {
        // beforeEach() is run before each test.
    });
    describe("GET / responses", function() {
        it("respond with json", function(done) {
            request(app)
                .get("/")
                .set("Accept", "application/json")
                .expect("Content-Type", /json/)
                .expect(200, done);
        });

        it("respond with text", function(done) {
            request(app)
                .get("/")
                .set("Accept", "text/plain")
                .expect("Content-Type", /text/)
                .expect("welcome")
                .expect(200, done);
        });
    })
    afterEach(function () {
        // afterEach() is run after each test.
    });
    after(function () {
        // after() is run after all your tests have completed.
        // Do teardown here.
    });
});