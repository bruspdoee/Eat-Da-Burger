var connection = require("./connection.js");

var orm = {
    selectAll: function(colToSearch, tableInput) {
      var queryString = "SELECT DISTINCT ?? FROM ??";
      connection.query(queryString, [colToSearch, tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    }, 
      insertOne: function(colToSearch, tableInput) {
      var queryString = "SELECT DISTINCT ?? FROM ??";
      connection.query(queryString, [colToSearch, tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    updateOne: function(tableInput, colToSearch, valOfCol ) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    }
  };
  
  module.exports = orm;