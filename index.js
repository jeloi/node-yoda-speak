var https = require('https');

function YodaSpeak(key) {
	this._credentials ={
		host: "yoda.p.mashape.com",
		path: "/yoda?sentence=waaa",
		headers: { "X-Mashape-Key": key || "" },
		// Mashape's certificate doesn't seem to be authorized.
		// I'm gonna assume potential man-in-the-middle attacks for yoda-speak words is not too serious.
		rejectUnauthorized: false 
	}
}

YodaSpeak.prototype.convert = function(text, callback) {
	var req = https.get(this._credentials, function(res) {
		res.on('data', function (data) {
	      callback(null, data);
	    });
	})

	req.on('error', function(err) {
	  	callback(err);
	});
}


module.exports = YodaSpeak;
