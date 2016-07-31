function displayInventory(inventory) {
    console.log(inventory)
}

CarLot.loadInventory(displayInventory)


function populatePage (inventory) {
  var carsContainer = document.getElementById('containerRow')
  var purchaseStatus
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

function activateEvents (inventory) {
    inventory.forEach(function (inventory){
        document.querySelector('body').addEventListener('click', function (event){
            if (event.target.className === "carColumn"){
                document.querySelector('#allCars').classList.add('selected')


            }





        })



    })



}










// function activateEvents () {
// document.querySelector("body").addEventListener("click", function(event) {
//   console.log(event);
//   console.log(event.target.parentElement)
//   if (event.target.className === "carColumn") {
//     // document.getElementById('allCars').style.color = "red"
//     event.target.parentElement.innerHTML="<p>FuckThis</p>"
//     }
// })


// }

// function activateEvents(inventory) {
//  document.querySelector("body").addEventListener('click', function(event){
//  if (event.target.id === "button") {
//  for (var i = 0; i < inventory.length; i++) {
// document.getElementById('inputField').value = inventory[i].description
//         }
//     }
// })}

// function activateEvents (inventory) {

//   for (var i = 0; i < inventory.length; i++)
//     document.querySelector("body").addEventListener("click", function(event) {
//     // console.log(event);
//     // console.log(event.target.parentElement)
//   if (event.target.className === "carColumn") {
//     var carSelected =
//     console.log(inventory[i].model)
//     console.log(inventory[i].make)

// }})


// }







CarLot.loadInventory(activateEvents)






