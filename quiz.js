 // Loop over the inventory and populate the page

 function populatePage(inventory) {
    var carsContainer = document.getElementById('containerRow') //identify DOM element to hold car objects in inventory
    var purchaseStatus
    inventory.forEach(function(car) { //set purchase status based on boolean in car object
        if (car.purchased === true) {
            purchaseStatus = "Available!"
        } else {
            purchaseStatus = "Sold out!"
        }

        containerRow.innerHTML += // append each object to targeted DOM element
        `<div class="col-md-3 allCars" style= "border-color: ${car.color}; box-shadow: 10px 5px 7px black" id="carDiv">
        <h3 class="carColumn">${car.make} ${car.model}</h3>
        <p class="carColumn">${car.year}
        <p class="carColumn">&#36;${car.price}
        <p class="carColumn">${car.color}
        <p class="carColumn" class="carDescription">${car.description}
        <p class="carColumn" style = "font-weight: bold">${purchaseStatus}
        </p></p></p></p></p></div>`
    })
    CarLot.activateEvents()
}
CarLot.loadInventory(populatePage);

