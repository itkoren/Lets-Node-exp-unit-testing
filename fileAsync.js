var fs = require("fs");
var fileName = __dirname + "/ipsum.txt";

var fileAsync = module.exports = function(callback) {
    fs.exists(fileName, function (exists) {
        if (exists) {
            fs.stat(fileName, function (error, stats) {
                if (error) {
                    throw error;
                }
                if (stats.isFile()) {
                    fs.readFile(fileName, "utf8", function (error, data) {
                        callback(error, data);
                    });
                }
            });
        }
    });
};
