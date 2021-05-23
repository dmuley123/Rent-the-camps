var express = require("express");
var app = express();
var bodyParser = require("body-parser");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({exteded: true}));

var campgrounds = [
		{name:"Maharashtra", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg2jFkJzDyI8Nd-FgK-kauZqbPn-JDs5b1Rw&usqp=CAU"},
		{name:"mahabaleshwar", image:"https://r1imghtlak.mmtcdn.com/6f6c7538664d11e9a5580242ac110004.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg"},
		{name:"shirdi", image:"https://da8qcmjpujrcg.cloudfront.net/media/marketplace/images/56/DSC_6410-Pano_t.jpg"},
		{name:"Maharashtra", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg2jFkJzDyI8Nd-FgK-kauZqbPn-JDs5b1Rw&usqp=CAU"},
		{name:"mahabaleshwar", image:"https://r1imghtlak.mmtcdn.com/6f6c7538664d11e9a5580242ac110004.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg"},
		{name:"Maharashtra", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg2jFkJzDyI8Nd-FgK-kauZqbPn-JDs5b1Rw&usqp=CAU"},
		{name:"mahabaleshwar", image:"https://r1imghtlak.mmtcdn.com/6f6c7538664d11e9a5580242ac110004.jpg?&output-quality=75&downsize=520:350&crop=520:350;2,0&output-format=jpg"},
		{name:"shirdi", image:"https://da8qcmjpujrcg.cloudfront.net/media/marketplace/images/56/DSC_6410-Pano_t.jpg"},
		{name:"Maharashtra", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg2jFkJzDyI8Nd-FgK-kauZqbPn-JDs5b1Rw&usqp=CAU"}
	]

app.get("/", function(req, res){
	res.render("landing");
});

app.get("/campgrounds", function(req, res){
	res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
	//get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = {name:name, image:image}
	campgrounds.push(newCampground);
	//redirect back to campground page
	res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("The YelpCamp server has started");
});