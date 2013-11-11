var path = require("path"),
    express = require("express"),
    _ = require("underscore");

var app = express()
            .use(express.static(__dirname, 
                                path.join(__dirname, "bower_components"),
                                path.join(__dirname, "js")))
            .use(express.bodyParser());

app.get("/hello", function(req, res) {
    res.send("Hello, World!");
});

app.get('/users', function(req, res) {
	res.json(db); //sets headers to proper json format
});

app.post("/users", function(req, res) {
	req.body.id = _.reduce(db, function(memo, num) {return memo + num.id;}, 1);
	db.push(req.body);

	console.log(req.body);
	res.end();
});


var port = process.env.PORT || 3000;
app.listen(port);
console.log("Started server on port " + port);

var db = [
	{id: 1, name: "Matthew", email: "mbahoshy@gmail.com"}
];