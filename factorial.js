// include the 'async' module
var async = require("async");

var factorial = module.exports = function(n, callback) {
    var fact = 1;
    var index = 1;

    setTimeout(function(){
        console.log("TIMEOUT 0");
    }, 0);

    async.whilst(
        function() {
            return index <= n;
        },
        function(next) {
            setTimeout(function(){
                console.log("TIMEOUT 0");
            }, 0);

            setImmediate(function() {
                console.log("step" + index);
                fact = fact * index;
                ++index;
                next();
            });
        },
        function(err) {
            setImmediate(function() {
                callback(null, fact);
            });
        }
    );
};