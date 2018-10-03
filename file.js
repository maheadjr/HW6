
$(document).ready(function() {
//BEGIN


var topics = ["anime", "wings", "soccer" ]

var queryURL1 = "https://api.giphy.com/v1/gifs/search?q=anime&api_key=TtptPxP4K9fNUOoF8DeOz2P2g750FKYD&limit=10";
var queryURL2 = "https://api.giphy.com/v1/gifs/search?q=chicken+wings&api_key=TtptPxP4K9fNUOoF8DeOz2P2g750FKYD&limit=10";
var queryURL3 = "https://api.giphy.com/v1/gifs/search?q=soccer&api_key=TtptPxP4K9fNUOoF8DeOz2P2g750FKYD&limit=10";

$.ajax({
  url: queryURL1,
  method: "GET"


}).then(function(response) {
var results = response.data;
console.log(results);
for (i=0; i < results.length; i++){


//var image1 = $("<img>").attr("src", response.data={0:url, 1:url, 2:url});
var image1 = $("<img>").attr("src", results[i].images.fixed_height_still.url);

var div =   $("<div>");
//div.addclass("gif");
div.append(image1);
$("#p1").prepend(div);
}

$("#a").click(function(){
  // div.append(image1)
   console.log("mybutton works")
    }); 
});

function secondajax (){
$.ajax({
  url: queryURL2,
  method: "GET"


}).then(function(response) {
var results2 = response.data;
console.log(results2);
for (i=0; i < results2.length; i++){


//var image1 = $("<img>").attr("src", response.data={0:url, 1:url, 2:url});
var image2 = $("<img>").attr("src", results2[i].images.fixed_height_still.url);

var div2 =   $("<div>");
//div.addclass("gif");
div2.append(image2);
$("#p1").prepend(div2);
}

$("#b").click(function(){
  // div.append(image1)
   console.log("my button also  works")
    }); 
});
}
secondajax();



function thirdajax (){
  $.ajax({
    url: queryURL3,
    method: "GET"
  
  
  }).then(function(response) {
  var results3 = response.data;
  console.log(results3);
  for (i=0; i < results3.length; i++){
  
  
  //var image1 = $("<img>").attr("src", response.data={0:url, 1:url, 2:url});
  var image3 = $("<img>").attr("src", results3[i].images.fixed_height_still.url);
  
  var div3 =   $("<div>");
  //div.addclass("gif");
  div3.append(image3);
  $("#p1").prepend(div3);
  }
  
  $("#c").click(function(){
    // div.append(image1)
     console.log("my button also  works as well")
      }); 
  });
  }
  thirdajax();
  
  

})