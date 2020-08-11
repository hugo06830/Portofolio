$(function(){

$(".middle-c").hide();

  $("#arrow").click(function(){
    $(".description, .top-description").slideToggle("slow");
    $(".middle-c").fadeToggle("slow");
  });
});
