$(document).ready(function() {
  $("#menu-items").hide();
  $("#m-sub-menu").hide();
  $("#history").hide();
  $("#pedido").hide();
  $("#encomendar").hide();
  
  $("#m").click(function() {
    $("#m-sub-menu").toggle();
  });
  
  $("#menu").click(function() {
    $("#menu-items").toggle();
    $("#pedido").toggle();
    $("#encomendar").toggle();
  });
  
  $("#history-btn").click(function() {
    $("#history").toggle();
  });
  
});