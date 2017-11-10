var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb){
        connection.query("SELECT * FROM " + tableInput + ";", function(error,result){
            if(error) throw error;
            cb(result);
        })
    },

    insertOne: function(tableInput, val, cb){
        connection.query("INSERT INTO " +  tableInput + "(burger_name) VALUES('"+ val+"');", function(error, result){
            if(error) throw error;
            cb(result);
        })
    },

    updateOne: function(tableInput, condition, cb){
        connection.query("UPDATE " + tableInput + " SET devoured = true WHERE id = " + condition + ";", function(error,result){
           if(error) throw error;
           cb(result);
        })
    }
}

module.exports = orm;

