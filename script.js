$(document).ready(function() {
  $("#menu-items").hide();
  $("#m-sub-menu").hide();
  $("#m").click(function() {
    $("#m-sub-menu").toggle();
  });
  
  $("#menu").click(function() {
    $("#menu-items").toggle();
  });
  
});