function hideElements() {
  $("#menu-items").hide();
  $("#m-sub-menu").hide();
  $("#history").hide();
  $("#pedido").hide();
  $("#extras-refrigerantes").hide();
  $("#extras-prego").hide();
  $("#extras-cafe").hide();
  $("#extras-generic").hide();
  $("#encomendar").hide();
  $("#waiting").hide();
  $("#preparacao").hide();
  $("#acaminho").hide();
  $("#pedido-feito").hide();
  $("#pedido-preparacao").hide();
  $("#pedido-acaminho").hide();
  $("#pedido-cancelado").hide();
  $("#base").hide();
}

var total = 0;
var cancel = 0;
var table = null;
var price = null;
var name2 = null;
var price2 = null;

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

function addItemToPedido(name, priceStr) {
  name2 = name;
  price2 = priceStr;
  price = parseInt(priceStr[0], 10);
  table = document.getElementById("tabela-pedido");
  
  //is the item already in the table?
  var test = " "+name;
  if($('table tr').filter(":contains('"+test+"')").text()){
    console.log("repetido");
  }

  addExtras(name);

}

function addExtras(name) {
  if(name == "Coke") { 
    $("#extras-refrigerantes").hide();
    $("#extras-prego").hide();
    $("#extras-cafe").hide();
    $("#extras-generic").hide();
    $("#extras-refrigerantes").show();
  }
  else if(name == "Prego") {
    $("#extras-refrigerantes").hide();
    $("#extras-prego").hide();
    $("#extras-cafe").hide();
    $("#extras-generic").hide();   
    $("#extras-prego").show();
  }
  else if(name == "Café Expresso") {
    $("#extras-refrigerantes").hide();
    $("#extras-prego").hide();
    $("#extras-cafe").hide();
    $("#extras-generic").hide();
    $("#extras-cafe").show();
  }
  else {
    $("#extras-refrigerantes").hide();
    $("#extras-prego").hide();
    $("#extras-cafe").hide();
    $("#extras-generic").hide();
    $("#extras-generic").show();
  }
}

function hideExtras() {
    $("#extras-refrigerantes").hide();
    $("#extras-prego").hide();
    $("#extras-cafe").hide();
    $("#extras-generic").hide();
}

function continueToAdd() {

  var row = table.insertRow(table.rows.length - 1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);  
  cell1.innerHTML = " "+name2;
  cell2.innerHTML = price + "€";
  cell3.innerHTML = "<button class='btn-danger' onclick='deleteThisRow(this)'>X</button>";
  updatePedidoTotal(price);
  hideExtras();
}


function deleteThisRow(e) {
  var row = e.parentNode.parentNode;
  var priceStr = $(row).find('td:eq(1)').text();
  var price = parseInt(priceStr[0],10);
  row.parentNode.removeChild(row);
  //var price = 2;
  updatePedidoTotal(-price);
}

function itemAlreadyExists(itemName) {
  //TODO
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
  ["Vinho Médio", "6€", "Vinho do bom.", "alc. 16% vol"],
  ["Vinho Bom", "8€", "Vinho do bom.", "alc. 16% vol"],
  ["Vinho Excelente", "10€", "Vinho do bom.", "alc. 16% vol"],
  ["Vinho Muito Bom", "9€", "Vinho do bom.", "alc. 16% vol"],
    ["Vinho Médio", "6€", "Vinho do bom.", "alc. 16% vol"],
  ["Vinho Bom", "8€", "Vinho do bom.", "alc. 16% vol"],
  ["Vinho Excelente", "10€", "Vinho do bom.", "alc. 16% vol"],
  ["Vinho Muito Bom", "9€", "Vinho do bom.", "alc. 16% vol"]
];

var sodaArray = [
  ["Fanta", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Água com Gás", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Agua", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Sprite", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Coke", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Fanta", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Água com Gás", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Agua", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Sprite", "2€", "Refrigerante refrescante", "100 kcal"],
  ["Coke", "2€", "Refrigerante refrescante", "100 kcal"]
];

var cocktailArray = [
  ["Margarita", "5€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Daiquiri", "7€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Caipirinha", "4€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Mojito", "5€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Martini", "5€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Margarita", "5€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Daiquiri", "7€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Caipirinha", "4€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Mojito", "5€", "Um excelente cocktail ", "alc. 8% vol"],
  ["Martini", "5€", "Um excelente cocktail ", "alc. 8% vol"]
];

var snacksArray = [
  ["Onion Rings", "2€", "Snack bastante top!", "100 kcal"],
  ["Bifana", "6€", "Snack bastante top!", "100 kcal"],
  ["Prego", "7€", "Snack bastante top!", "100 kcal"],
  ["Onion Rings", "2€", "Snack bastante top!", "100 kcal"],
  ["Bifana", "6€", "Snack bastante top!", "100 kcal"],
  ["Prego", "7€", "Snack bastante top!", "100 kcal"],
  ["Onion Rings", "2€", "Snack bastante top!", "100 kcal"],
  ["Bifana", "6€", "Snack bastante top!", "100 kcal"],
  ["Prego", "7€", "Snack bastante top!", "100 kcal"]
];

var coffeeArray = [
  ["Mocha", "1€", "Expresso clássico", "25 kcal"],
  ["Cappuccino", "3€", "Expresso clássico", "25 kcal"],
  ["Abatanado", "2€", "Expresso clássico", "25 kcal"],
  ["Carioca", "1€", "Expresso clássico", "25 kcal"],
  ["Americano", "1€", "Expresso clássico", "25 kcal"],
  ["Café Expresso", "1€", "Expresso clássico", "25 kcal"]
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
    $("#m-sub-menu").hide();
    hideExtras();
  });
  $("#addto").click(function() {
    continueToAdd();
  });
  $("#addto2").click(function() {
    continueToAdd();
  });
  $("#addto3").click(function() {
    continueToAdd();
  });
  $("#addto4").click(function() {
    continueToAdd();
  });
  $("#cancel").click(function() {
    hideExtras();
  });
  $("#cancel2").click(function() {
    hideExtras();
  });
  $("#cancel3").click(function() {
    hideExtras();
  });
  $("#cancel4").click(function() {
    hideExtras();
  });

  $("#encomendar").click(function() {
    var confirmation = confirm("Tem a certeza?");
    if (confirmation) {
      cancel = 0;
      hideElements();
      $("#pedido-feito").show();
      $("#waiting").show();
      $("#m").hide();
      hideExtras();
      setTimeout(emPreparacao, 5000)
    }
  });

  function emPreparacao() {
    if (cancel == 0) {
      //$("#waiting").hide();
      $("#pedido-feito").hide();
      //$("#preparacao").show();
      $("#pedido-preparacao").show();
      setTimeout(aCaminho, 5000)
    }
  }

  function aCaminho() {
    $("#preparacao").hide();
    $("#pedido-preparacao").hide();
    $("#pedido-acaminho").show();
    setTimeout(resetState, 5000)
  }  

  function resetState() {
    hideElements();
    $("#tabela-pedido").find("td").remove();
    resetTotal();
    $("#m").show();
  }

  $("#ultimo-cancelar").click(function() {
    var confirmation = confirm("Tem a certeza?");
    if (confirmation) {
      cancel = 1;
      $("#pedido-cancelado").show()
      $("#waiting").hide();
      $("#pedido-feito").hide();
      setTimeout(resetState,5000)
    }
  });

  $("#history-btn").click(function() {
    $("#history").toggle();
  });

  $("#beer").click(function() {
    var ementa = $('#ementa').DataTable({
      data: beerArray,
      select: true,
      "bDestroy": true,
      "select": true
    });
    $("#base").show();
  });
  $("#wine").click(function() {
    var ementa = $('#ementa').DataTable({
      data: wineArray,
      select: true,
      "bDestroy": true
    });
    $("#base").show();
    hideExtras();
  });
  $("#cocktail").click(function() {
    var ementa = $('#ementa').DataTable({
      data: cocktailArray,
      select: true,
      "bDestroy": true
    });
    $("#base").show();
    hideExtras();
  });

  $("#snack").click(function() {
    var ementa = $('#ementa').DataTable({
      data: snacksArray,
      select: true,
      "bDestroy": true
    });
    $("#base").show();
    hideExtras();
  });

  $("#soda").click(function() {
    var ementa = $('#ementa').DataTable({
      data: sodaArray,
      select: true,
      "bDestroy": true
    });
    $("#base").show();
    hideExtras();
  });
  $("#coffee").click(function() {
    var ementa = $('#ementa').DataTable({
      data: coffeeArray,
      select: true,
      "bDestroy": true
    });
    $("#base").show();
    hideExtras();
  });

  $("#cancel-btn").click(function() {
    $("#tabela-pedido").find("td").remove();
    resetTotal();
    hideExtras();
  });



  $('#ementa tbody').on('click', 'tr', function() {
    $(this).toggleClass('selected');
    addItemToPedido($(this).find('td:eq(0)').text(), $(this).find('td:eq(1)').text());
  });
});


