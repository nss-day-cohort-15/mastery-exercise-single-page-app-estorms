function displayInventory(inventory) {
    console.log(inventory)
}

CarLot.loadInventory(displayInventory)


function populatePage (inventory) {
  var carsContainer = document.getElementById('containerRow')
  inventory.forEach(function (car) {
    containerRow.innerHTML +=
    `<div class="col-md-3" style= "border: 5px solid ${car.color}; box-shadow: 10px 5px 7px black" id="allCars">
            <span style="font-size: 1.5em" class="carColumn">${car.make}</span>
            <span class="carColumn" style="font-size: 1.5em">${car.model}</span>
            <div class="carColumn">${car.year}
            <div class="carColumn">&#36;${car.price}
            <div class="carColumn">${car.color}
            <div class="carColumn" id="carDescription">${car.description}
            </div></div></div></div></div>`
  })
}
CarLot.loadInventory(populatePage);


function activateEvents(inventory) {
document.querySelector("body").addEventListener("click",
function(event) {
if (event.target.className === "carColumn") {



    console.log(event.target)
    console.log(event.target.parentElement)

    console.log('fuck you')





        document.getElementById('allCars').style.border = "10px solid black"

        }


    })





}

CarLot.loadInventory(activateEvents);

