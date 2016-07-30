function displayInventory(inventory) {
    console.log(inventory)
}

CarLot.loadInventory(displayInventory)


function populatePage (inventory) {
  var carsContainer = document.getElementById('containerRow')
  var purchaseStatus;
  inventory.forEach(function (car) {
    if (car.purchased === true) {
        purchaseStatus = "Available! Poor you!"
    }
    else {
        purchaseStatus ="Sold out, you lucky thing!"
    }


    containerRow.innerHTML +=
    `<p><div class="col-md-3" style= "border: 5px solid ${car.color}; box-shadow: 10px 5px 7px black" id="allCars">
            <span style="font-size: 3rem" class="carColumn">${car.make}</span>
            <span class="carColumn" style="font-size: 3rem">${car.model}</span>
            <div class="carColumn">${car.year}
            <div class="carColumn">&#36;${car.price}
            <div class="carColumn">${car.color}
            <div class="carColumn" id="carDescription">${car.description}
            <div class="carColumn" style = "font-weight: bold">${purchaseStatus}</div>
            </div></div></div></div></div></p>`
  })
}
CarLot.loadInventory(populatePage);

function activateEvents () {
    document.querySelector("body").addEventListener("click", function(event) {
  console.log(event);
  console.log(event.target.parentElement)
  if (event.target.className === "carColumn") {
    // document.getElementById('allCars').style.color = "red"
    event.target.parentElement.innerHTML="<p>FuckThis</p>"





  }
})


}

function activateEvents(inventory) {
 document.querySelector("body").addEventListener('click', function(event){
 if (event.target.id === "button") {
 for (var i = 0; i < inventory.length; i++) {
document.getElementById('inputField').value = inventory[i].description
             // for ( var i = 0; i < inventory.length; i++) {
             //     inventory[i].description = inputField.value
             // }
 }
         }
    // for (var i = 0; i < inventory.length; i++) {
     //     console.log(inventory[i].description)
     // }
 }
 )}


CarLot.loadInventory(activateEvents)


//TRY DOING ACTIVATE EVENTS AS AN AUGMENTER ON POPULATEPAGE? ... you have to do another for each loop over inventory somewhere. try doing it within the populate page iife first

//ADD SOLDOUT, SUCKA! or AVAILABLE



