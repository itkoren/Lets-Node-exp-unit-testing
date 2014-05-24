// include the 'events' module
var events = require("events");

// include the 'util' module
var util = require("util");

// Get the EventEmitter Base obj
var EventEmitter = events.EventEmitter;

// Here is the NumericValidator constructor
var NumericValidator = module.exports = function() {};

util.inherits(NumericValidator, EventEmitter);

NumericValidator.prototype.validate = function(data) {
    this.data = data;

    if (!isNaN(data)) {
        this.emit("numeric", data);
    }
    else {
        this.emit("error", "Data is not numeric");
    }
};