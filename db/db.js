var mongoose=require("mongoose");
mongoose.connect('mongodb://localhost:27017/Images');


var db= mongoose.connection;
var schema=mongoose.Schema;

var Admin = new schema({


name:{
	type: String,
	unique: true
},

img1:{
	type: String,
},
img2:{
	type: String,
},
img3:{
	type: String,
},
img4:{
	type: String,
},
img5:{
	type: String,
},
img6:{
	type: String,
},
img7:{
	type: String,
},
img8:{
	type: String,
},
img9:{
	type: String,
},
img10:{
	type: String,
},
img11:{
	type: String,
},
img12:{
	type: String,
},
img13:{
	type: String,
},
img14:{
	type: String,
},
img15:{
	type: String,
}}
);

module.exports= mongoose.model('Admin', Admin);
