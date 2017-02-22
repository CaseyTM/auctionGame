var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var config = require ('../config/config');
var connection = mysql.createConnection({
	host:'127.0.0.1',
	user:'x',
	password:'x',
	database:'auctionGame'
});
connection.connect();

/* GET home page. */
router.get('/getHomeAuctions', function(req, res, next) {
	var auctionsQuery = "SELECT * FROM auctions" + 
	"INNER JOIN images ON images.auction_id = acutions.id" + "limit 10";
	connection.query(auctionsQuery, (error, results, fields)=>{
		if (error) throw error;
		res.json(results);
	});
  // res.render('index', { title: 'Express' });
});

module.exports = router;
