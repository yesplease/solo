var express = require('express');

var app = express();

app.use(express.static(__dirname));

app.listen(3000);



app.get('/change', function(req, res){
  console.log("heard the change, here is the request.data", req.query);
  // var url = 'https://api.instagram.com/v1/tags/love/media/recent?client_id=b814260d034a475085104fe3f223f7d7';
  //req.data url is in the request
  //pull it out, then we have our server side make that to the client
});


var instaURL = "";

console.log("instaURL: ", instaURL);

// var getImage = function(theme){
//   $.ajax({
//     // url: 'https://api.instagram.com/v1/tags/'+ theme + '/media/recent?client_id=b814260d034a475085104fe3f223f7d7&callback=?',
//     url: 'https://api.instagram.com/v1/media/popular?client_id=b814260d034a475085104fe3f223f7d7?callback=?',
//     type: 'GET',
//     contentType: 'JSONP',
//     crossDomain: true,
//     success: function(data) {
//       console.log("This my data!", data);
//     },
//     error: function(data){
//       console.log("This is your error: ", data);
//     }
//   });  
// };
