var express = require("express");
var app = express();
var port = process.env.PORT || 3001	;

var twilio = require('twilio');
var accountSid = 'AC502b135536696fa462556ed0d2b5d8c9'; // Your Account SID from www.twilio.com/console
var authToken = '5442a59e12ebade4ffe66301bcb90efb';   // Your Auth Token from www.twilio.com/console
var client = new twilio(accountSid, authToken);

app.get('/', function(req, res){

  client.messages.create({
    body: 'Hello from Shardul Virkar CS 643 Fall 2018',
    to: '+18155272470',  // Text this number
    from: '+18155668425' // From a valid Twilio number
})
.then((message) => {
  console.log(message.sid);
res.send(message.sid)
}).catch((error) => {
  console.log(error);
});

});

app.listen(port,function(){
	console.log("Running on port " +port);
});