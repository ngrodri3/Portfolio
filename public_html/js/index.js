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
  $("#second-intro" ).delay($vari).show(4000);
  $("#first-class").delay(15000).hide(1000);
});
//Use this to skip the introduction screen
$("#first-class").click(function(){
  $("#first-class").hide();
});
$("#seven").hover(function(){
    
    ("#seven").effect("bounce",{times:3},100);
});