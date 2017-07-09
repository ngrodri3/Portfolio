$(document).ready(function(){
  $("#introduction").hide();
  $("#credentials").css("visibility","hidden");
  $("#area2").hide();
  $("#second-intro").hide();
  $("#different-word").hover(function(){
   $("#credentials").css("visibility","visible");
});
$("#seven").hover(function(){
  $("#area2").show(2000);
});
  
  $vari = 4000;
  $("#introduction").css("visibility","visible");
  $("#second-intro").css("visibility","visible");
  $("#introduction").delay($vari).show(2000);
  $("#second-intro" ).delay($vari+5000).show(3000);
  $("#first-class").delay(15000).hide(1000);
});
$("#first-class").click(function(){
  $("#first-class").hide();
});