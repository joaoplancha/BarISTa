function hideElements() {
  $("#menu-items").hide();
  $("#m-sub-menu").hide();
  $("#history").hide();
  $("#pedido").hide();
  $("#encomendar").hide();
  $("#waiting").hide();
  $("#pedido-feito").hide();
  $("#base").hide();
}

var total = 0;

function updatePedidoTotal(price) {
  total += price;
  $("#pedidoTotal").text(total + "€");
}

function getTotal() {
  return total;
}

function resetTotal() {
  total = 0;
  $("#pedidoTotal").text(total + "€");
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

function itemAlreadyExists(itemName) {

}

function convertPedidoTableToArray() {
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

function removeItemFromPedido() {
  //TODO
}

function deleteTableItems(tableid) {
  var table = document.getElementById(tableid);
}

var beerArray = [
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Maluco", "2€", "Quem bebe esta cerveja até fica maluco!", "alc. 8.3% vol"],
  ["Cerveja Soft", "2€", "Cerveja com baixo teor alcoólico", "alc. 0.01% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"],
  ["Cerveja Fixe", "1€", "A cerveja mais fixe.", "alc. 5,1% vol"]
];

var wineArray = [
  ["Vinho Bom", "40€", "Vinho do bom.", "alc. 16% vol"]
];

var sodaArray = [
  ["Coke", "2€", "Refrigerante bastante refrescante", "10 kcal"]
];

var cocktailArray = [
  ["Cocktail Lisboa", "4€", "Um excelente cocktail para qualquer ocasião", "alc. 8% vol"]
];

var snacksArray = [
  ["Onion Rings", "2€", "Snack bastante top!", "100 kcal"]
];

var coffeeArray = [
  ["Café Expresso", "1€", "Expresso com bastantes opções", "25 kcal"]
  ];
$(document).ready(function() {
  hideElements();
  $("#m").click(function() {
    if (!$("#m-sub-menu").is(":visible"))
      $("#m-sub-menu").toggle();
    else {
      hideElements();
    }
  });
  $("#menu").click(function() {
    $("#pedido-feito").hide();
    $("#waiting").hide();
    $("#menu-items").toggle();
    $("#pedido").toggle();
    $("#encomendar").toggle();
  });

  $("#encomendar").click(function() {
    var confirmation = confirm("Tem a certeza?");
    if (confirmation) {
      hideElements();
      $("#pedido-feito").show();
      $("#waiting").show();
    }
  });
  $("#ultimo-cancelar").click(function() {
    var confirmation = confirm("Tem a certeza?");
    if (confirmation) {
      hideElements();
    }
  });

  $("#history-btn").click(function() {
    $("#history").toggle();
  });

  $("#beer").click(function() {
    addItemToPedido('Cerveja', 2);
    var ementa = $('#ementa').DataTable({
      data: beerArray,
      select: true,
      "bDestroy": true,
      "select":true
    });
    $("#base").toggle();
  });
  $("#wine").click(function() {
    addItemToPedido('Vinho', 6.5);
    var ementa = $('#ementa').DataTable({
      data: wineArray,
      select: true,
      "bDestroy": true
    });
    $("#base").toggle();
  });
  $("#cocktail").click(function() {
    addItemToPedido('Cocktail', 6.5);
    var ementa = $('#ementa').DataTable({
      data: cocktailArray,
      select: true,
      "bDestroy": true
    });
    $("#base").toggle();
  });

$("#snack").click(function() {
  addItemToPedido('Snack', 1);
  var ementa = $('#ementa').DataTable({
    data: snacksArray,
    select: true,
    "bDestroy": true
});
  $("#base").toggle();
});

$("#soda").click(function() {
addItemToPedido('Refrigerante', 2);
var ementa = $('#ementa').DataTable({
  data: sodaArray,
  select: true,
  "bDestroy": true
});
$("#base").toggle();
});
$("#coffee").click(function() {
addItemToPedido('Café', 1);
var ementa = $('#ementa').DataTable({
  data: coffeeArray,
  select: true,
  "bDestroy": true
});
$("#base").toggle();
});

$("#cancel-btn").click(function() {
$("#tabela-pedido").find("td").remove();
resetTotal();
});
$("#ementa").DataTable();
});