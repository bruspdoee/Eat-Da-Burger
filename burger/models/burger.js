var orm = require("./config/orm.js");


orm.selectAll("party_name", "parties_db.parties");

orm.insertOne("client_name", "parties_db.clients"); 

orm.updateOne("parties_db.parties", "party_type", "grown-up"); 

module.exports = burger;