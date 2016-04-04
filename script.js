function hideElements() {
  $("#menu-items").hide();
  $("#m-sub-menu").hide();
  $("#history").hide();
  $("#pedido").hide();
  $("#encomendar").hide();
}

var total = 0;
function updatePedidoTotal(price) {
  total += price;
  $("#pedidoTotal").text(total + "€");
}

function getTotal() {
  return total;
}

function addItemToPedido(name, price) {
  var table = document.getElementById("tabela-pedido");
  var row = table.insertRow(table.rows.length - 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = name;
  cell2.innerHTML = price + "€";
  updatePedidoTotal(price);
}

function convertPedidoTableToArray(){
  var array = [];
  $("#tabela-pedido tr").has("td").each(function() {
    var arrayItem = {};
    $('td', $(this)).each(function(index, item) {
      arrayItem[headers[index]] = $(item).html();
  });
  array.push(arrayItem);
  });
}

function addPedidoToHistory(price) {
  var pedidoArray = convertPedidoTableToArray();
  var table = document.getElementById("tabela-history");
  var row = table.insertRow(table.rows.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var randomDate = Math.floor((Math.random() * 28) + 1) + "/" + Math.floor((Math.random() * 12) + 1) + "/" + Math.floor((Math.random() * 16 + 2000) + 1);
  cell1.innerHTML = randomDate;
  cell2.innerHTML = array;
  cell3.innerHTML = price;
}

function populateBarWithArray(array) {
  //TODO
}

function removeItemFromPedido() {
  //TODO
}

function deletePedido() {
  //TODO
}

var beerArray = [];
var wineArray = [];
var snacksArray = [];

$(document).ready(function() {
  hideElements();

  $("#m").click(function() {
    $("#m-sub-menu").toggle();
  });

  $("#menu").click(function() {
    $("#menu-items").toggle();
    $("#pedido").toggle();
    $("#encomendar").toggle();
  });

  $("#encomendar").click();

  $("#history-btn").click(function() {
    $("#history").toggle();
  });

  $("#beer").click(function() {
    addItemToPedido('Cerveja',2);
  });
  $("#wine").click(function() {
    addItemToPedido('Vinho',6.5);
  });
  $("#cocktail").click(function() {
    addItemToPedido('Cocktail',6.5);
  });
  $("#snack").click(function() {
    addItemToPedido('Snack',1);
  });
  $("#soda").click(function() {
    addItemToPedido('Refrigerante',2);
  });
  $("#coffee").click(function() {
    addItemToPedido('Café',1);
  });
});