function displayInventory(inventory) {
    console.log(inventory)
}

CarLot.loadInventory(displayInventory)

function populatePage (inventory) {
  var carsContainer = document.getElementById('containerRow')
  inventory.forEach(function (car) {
    containerRow.innerHTML += `<div class="col-md-3" style= "border: 5px solid ${car.color}; box-shadow: 10px 5px 7px black" id="carColumn"><span style="font-size: 1.5em">${car.make}</span><span style="font-size: 1.5em">${car.model}</span><div>${car.year}<div>&#36;${car.price}<div>${car.color}<div>${car.description}</div></div></div></div></div>`
  })
}

CarLot.loadInventory(populatePage);

