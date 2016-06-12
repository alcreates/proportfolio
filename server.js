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

var transporter = nodemailer.createTransport('smtps://user%40gmail.com:pass@smtp.gmail.com');



// Routes
// =============================================================

app.get('/', function(req,res){
	res.send(index.html);
});

// app.post('/sendEmail', function(req, res){

// 	console.log("this is req data :" + req.data);
// 	console.log("this is req :"req);

// // 	var mailOptions = {
// //     from: '"Fred Foo 👥" <foo@blurdybloop.com>', // sender address 
// //     to: 'bar@blurdybloop.com, baz@blurdybloop.com', // list of receivers 
// //     subject: 'Hello ✔', // Subject line 
// //     text: 'Hello world 🐴', // plaintext body 
// //     html: '<b>Hello world 🐴</b>' // html body 
// // };
 
// // // send mail with defined transport object 
// // transporter.sendMail(mailOptions, function(error, info){
// //     if(error){
// //         return console.log(error);
// //     }
// //     console.log('Message sent: ' + info.response);
// // });

// });


// Starts the server to begin listening 
// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})