var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest", 
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "Lorem ipsum dolor sit amet, consectetuprehenderit  non proident, sunt in culpa qui officia deserunt mollit anim id est laborumm ipsum dolor sit amet, consectetuprehenderit  non proident, sunt in culpa qui o"
    },
    {
        name: "Desert Mesa", 
        image: "https://farm6.staticflickr.com/5487/11519019346_f66401b6c1.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur s nostrud exerepr cillu, sunt in culpa qui officia deserunt mollit anim id est laborumorem ipsum dolor sit amet, consectetur s nostrud exerepr cillu, sunt in culpa qui officia de"
    },
    {
        name: "Canyon Floor", 
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur apidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborusum dolor sit amet, consectetur apidatat non proident, sunt in culpa qui officiam"
    }
]

function seedDB(){
	//remove all campgrounds
	Campground.remove({}, function(err){
	if(err){
		console.log(err)
	}
	console.log("removed campground");
	//add few campgrounds
	data.forEach(function(seed){
		Campground.create(seed, function(err, campground){
			if(err){
				console.log(err);
			}else{
				console.log("added a campground")
				//create a comment
				Comment.create(
					{
						text:"great",
						author:"prashant"
				}, function(err, comment){
					if(err){
						console.log(err);
					}else{
						campground.comments.push(comment);
						campground.save();
						console.log("created new comment");
					}
				});
			}
		});
	});
});
}

module.exports = seedDB;
