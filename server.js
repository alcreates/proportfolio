var express 	= require('express');
var bodyParser 	= require('body-parser');
var nodemailer = require('nodemailer');




// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static('public'));

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));



// Routes
// =============================================================

app.get('/', function(req,res){
	res.send(index.html);
});

app.post('/email', function(req, res){
 console.log(req);
var mailOpts, smtpTrans;

	smtpTrans = nodemailer.createTransport('SMTP',{
		service:'Gmail',
		auth: {
			user: "alcreates@gmail.com",
			pass: "gatracho"
		}
	});

	mailOpts = {
		from: req.body.name + '$lt;' + req.body.email + '&gt;',
		to: 'alcreates@gmail.com',
		subject: 'Website contact form',
		text: req.body.message
	};

	smtpTrans.sendMail(mailOpts, function (error, response) {
      //Email not sent
      if (error) {
          res.json("error");
      }
      //Yay!! Email sent
      else {
          res.json("email sent!");
      }
  });

});


// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})