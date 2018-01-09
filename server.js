var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var events = require('events');
var request = require('request');
var cheerio= require('cheerio');

var Jimp = require("jimp");



/* var AWS = require('aws-sdk'); */
app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json({ type: 'application/x-www-form-urlencoded' }));
var engines = require('consolidate');
app.use(express.static(__dirname + '/views'));

app.set('public',__dirname + '/views');

app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

var cors = require('cors');
app.set('trust proxy',true);
app.disable('etag');
// Database dependecies 
var promise= require("bluebird");


app.get('/', function(req,res){
res.render('index.html')
});

var db=require("./db/db");


app.get('/images/:id', function(req,res){
	res.render('showImages.html');
});


app.post('/imagefind', function(req, res){
console.log(req.body);
var imagename=req.body.title;

var url = 'https://www.google.co.in/search?q=' +imagename + '+image+hd+images&tbm=isch&source=iu&ictx=1&fir=4wkiwD5FAnP8_M%253A%252CuCge_JJ6mKqtBM%252C_&usg=__d6VI6QGLM6P8tFquHeSveV5n9SY%3D&sa=X&ved=0ahUKEwjCobyXz4bYAhVLo48KHW1mDhQQ9QEINDAF#imgrc=4wkiwD5FAnP8_M:';
request(url, function(err, resp, body){

  $ = cheerio.load(body);
  imglist = $('img');
var image={};

  for (var i = 1; i < 15; i++){

//    console.log(imglist[i].attribs.src);

      image={
        name:req.body.title,
        img1:imglist[1].attribs.src ,
        img2:imglist[2].attribs.src,
        img3:imglist[3].attribs.src,
        img4:imglist[4].attribs.src,
        img5:imglist[5].attribs.src,
        img6:imglist[6].attribs.src,
        img7:imglist[7].attribs.src,
        img8:imglist[8].attribs.src,
        img9:imglist[9].attribs.src,
        img10:imglist[10].attribs.src,
        img11:imglist[11].attribs.src,
        img12:imglist[12].attribs.src,
        img13:imglist[13].attribs.src,
        img14:imglist[14].attribs.src,
        img15:imglist[15].attribs.src,
      };


}


Jimp.read(image.img1).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"1.jpg"); // save
}).catch(function () {
    console.error(err);
});


Jimp.read(image.img2).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"2.jpg"); // save
}).catch(function () {
    console.error(err);
});


Jimp.read(image.img3).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"3.jpg"); // save
}).catch(function () {
    console.error(err);
});

Jimp.read(image.img4).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"4.jpg"); // save
}).catch(function () {
    console.error(err);
});

Jimp.read(image.img5).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"5.jpg"); // save
}).catch(function () {
    console.error(err);
});


Jimp.read(image.img6).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"6.jpg"); // save
}).catch(function () {
    console.error(err);
});
Jimp.read(image.img7).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"7.jpg"); // save
}).catch(function () {
    console.error(err);
});
Jimp.read(image.img8).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"8.jpg"); // save
}).catch(function () {
    console.error(err);
});

Jimp.read(image.img9).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"9.jpg"); // save
}).catch(function () {
    console.error(err);
});
Jimp.read(image.img10).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"10.jpg"); // save
}).catch(function () {
    console.error(err);
});
Jimp.read(image.img11).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"11.jpg"); // save
}).catch(function () {
    console.error(err);
});
Jimp.read(image.img12).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"12.jpg"); // save
}).catch(function () {
    console.error(err);
});
Jimp.read(image.img13).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"13.jpg"); // save
}).catch(function () {
    console.error(err);
});
Jimp.read(image.img14).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"14.jpg"); // save
}).catch(function () {
    console.error(err);
});
Jimp.read(image.img15).then(function (lenna) {
    lenna.resize(100,100)            // resize
         .quality(100)                 // set JPEG quality
         .greyscale()                 // set greyscale
         .write("F:\\interview\\views\\images\\"+imagename+"15.jpg"); // save
}).catch(function () {
    console.error(err);
});

      image={
        name:req.body.title,
        img1:imagename+"1.jpg",
        img2:imagename+"2.jpg",
        img3:imagename+"3.jpg",
        img4:imagename+"4.jpg",
        img5:imagename+"5.jpg",
        img6:imagename+"6.jpg",
        img7:imagename+"7.jpg",
        img8:imagename+"8.jpg",
        img9:imagename+"9.jpg",
        img10:imagename+"10.jpg",
        img11:imagename+"11.jpg",
        img12:imagename+"12.jpg",
        img13:imagename+"13.jpg",
        img14:imagename+"14.jpg",
        img15:imagename+"15.jpg",
      };





 db.create(image, function (err, data) {
    if (err) {
    res.send(err);
}
	else{
    res.json(data);
	}
  });


});
})


app.get('/findImageName', function(req, res) {
  db.find(function (err, data) {
    if (err) {
    	res.send(err);
    	console.log(err);
    }
    	else{
    	res.json(data);
}
});
});




app.post('/image/:id', function(req, res) {
	console.log(req.params);
  console.log("ID"+ req.params.id);
  db.findById(req.params.id, function(err,data){
    if(err){
      throw err;

    }
    console.log("done");
    res.json(data);
  })
});


app.listen(8000, function(){
	console.log("server is running on 8000 port");
});

