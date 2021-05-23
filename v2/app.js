var express = require("express"),
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose")

//connecting mongoose
mongoose.connect("mongodb://localhost/Yelp_Camp", {useNewUrlParser: true, useUnifiedTopology: true});
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

//Schema setup
var campgroundSchema = new mongoose.Schema({
	name:String,
	image:String,
	description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create({
// 	name:"Maharashtra",
// 	image:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSg2jFkJzDyI8Nd-FgK-kauZqbPn-JDs5b1Rw&usqp=CAU",
// 	description: "this id a huge place but somethingnis wrong eithdata in here bcuz i dont know"
// }, function(err, campground){
// 	if(err){
// 		console.log(err);
// 	} else{
// 		console.log("new campground...");
// 		console.log(campground);
// 	}
// });

app.get("/", function(req, res){
	res.render("landing");
});

//INDEX-show all campgrounds
app.get("/campgrounds", function(req, res){
	//get all campgrounds from db
	Campground.find({}, function(err, allCampgrounds){
		if(err){
			console.log(err);
		}else{
			res.render("index", {campgrounds:allCampgrounds});
		}
	});
});

//CREATE- add new campground to db
app.post("/campgrounds", function(req, res){
	//get data from form and add to campground array
	var name = req.body.name;
	var image = req.body.image;
	var desc = req.body.description
	var newCampground = {name:name, image:image, description:desc}
	//create a new campground and save to db
	Campground.create(newCampground, function(err, newlyCreated){
		if(err){
			console.log(err);
		}else{
			//redirect back to campground page
			res.redirect("/campgrounds");
		}
	});
});

//NEW - show form to create new campground
app.get("/campgrounds/new", function(req, res){
	res.render("new");
});

//show- shows more info about one campground
app.get("/campgrounds/:id", function(req, res){
	//find the campground with provided provided id
	Campground.findById(req.params.id, function(err, foundCampground){
		if(err){
			console.log(err);
		}else{
			//render shoe template with that campground
			res.render("show",{campground: foundCampground});
		}
	});
});

app.listen(process.env.PORT || 3000, process.env.IP, function(){
	console.log("The YelpCamp server has started");
});