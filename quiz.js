function displayInventory(inventory) {
    console.log(inventory)
}

CarLot.loadInventory(displayInventory)

function populatePage (inventory) {
  var carsContainer = document.getElementById('containerRow')
  inventory.forEach(function (car) {
    containerRow.innerHTML += `<div class="col-md-4" id="carColumn"><span>${car.make}</span><span> ${car.model}</span><div>${car.year}<div>&#36;${car.price}<div>${car.color}<div>${car.description}</div></div></div></div></div>`
  })
}

CarLot.loadInventory(populatePage);

