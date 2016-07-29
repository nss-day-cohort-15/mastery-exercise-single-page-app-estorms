function displayInventory(inventory) {
    console.log(inventory)
}

CarLot.loadInventory(displayInventory)

function populatePage (inventory) {
  var carsContainer = document.getElementById('carsContainer')
  inventory.forEach(function (car) {
    carsContainer.innerHTML += `<div><span>${car.make}</span><span> ${car.model}</span></div><div>${car.year}</div><div>&#36;${car.price}</div><div>${car.color}</div><div>${car.description}</div>`
  })
}

CarLot.loadInventory(populatePage);

