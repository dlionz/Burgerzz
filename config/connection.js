var mysql = require("mysql");

var env = process.env.NODE_ENV || 'development';
var config = require(__dirname + "/config.json")[env];

if(config.use_env_variable){
    var connection = mysql.createConnection(process.env[config.use_env_variable]);
} 
else {
    var connection = mysql.createConnection(config);
}

connection.connect(function(error) {
    if(error){
        console.error("there was a problem with the connection: " + error.stack);
        return;
    }
    console.log("connected user id: " + connection.theradId);
});

module.exports = connection;
