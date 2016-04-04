 function hideElements() {
    $("#menu-items").hide();
    $("#m-sub-menu").hide();
    $("#history").hide();
    $("#pedido").hide();
    $("#encomendar").hide();
  }

  function populateBarWithArray(array) {
    //TODO
  }
  
  var total = 0;
  function updatePedidoTotal(price) {
    total += price;
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

  function removeItemFromPedido() {
    //TODO
  }

  var beerArray = [];
  var wineArray = [];
  var snacksArray =   [];

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

    $("#history-btn").click(function() {
      $("#history").toggle();
    });
  });