var theme = "";
$( document ).ready(function() {
  
  $( '.theme' ).click(function(){
    console.log("You clicked a theme! The topic is: " + event.target.id)
    theme = event.target.id;
    getQuotes(theme);
  });

  $( '#targetForm' ).submit(function(event){
    event.preventDefault();
    var newTheme = $( '#gogo' ).val();
    console.log("New theme: ", newTheme)
    $( '#gogo' ).val("");
    getQuotes(newTheme);
  });
});


var updateHeadline = function(headline, author){
  $( 'h1').text(headline);
  $( '#author').text(author);
  // $( '#intro' ).find('h1').replaceWith(function() {
  //   return '<h2>' + $(this).text() + '</h2>';
  

};

var getPhotos = function(){

};

var getImage = function(theme){
  $.ajax({
    // url: 'https://api.instagram.com/v1/tags/'+ theme + '/media/recent?client_id=b814260d034a475085104fe3f223f7d7&callback=?',
    url: 'https://api.instagram.com/v1/media/popular?client_id=b814260d034a475085104fe3f223f7d7',
    type: 'GET',
    contentType: 'JSONP',
    crossDomain: true,
    success: function(data) {
      console.log("This my data!", data);
    },
    error: function(data){
      console.log("This is your error: ", data);
    }
  });  
};

var great = function(data){
  console.log(data);
}


var getQuotes = function(theme){
  $.ajax({
    url: 'https://www.googleapis.com/freebase/v1/mqlread?query=[{ "/people/person/quotations": [{ "type": "/media_common/quotation", "id": null, "name": [], "subjects": "'+ theme + '", "author": [] }] }]',
    type: 'GET',
    contentType: 'JSONP',
    crossDomain: true,
    success: function(data) {
      console.log("This many results!", data)
      var randomAuthor = data.result[Math.floor(Math.random()*data.result.length)]['/people/person/quotations'];
      var singleQuote = randomAuthor[Math.floor(Math.random()*randomAuthor.length)];
      console.log("Single quote: ", singleQuote.name[0]);
      var quoteText = singleQuote.name[0];
      var author = singleQuote.author[0];
      console.log("This is the author!", author);
      updateHeadline(quoteText, author);
    },
    error: function(data){
      console.log("This is your error: ", data);
    }
  });
}
