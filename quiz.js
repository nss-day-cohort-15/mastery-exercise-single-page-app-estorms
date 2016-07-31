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
    `<section class="col-md-3" style= "border: 5px solid ${car.color}; box-shadow: 10px 5px 7px black" id="allCars">
            <div class="carColumn">${car.make}
            <div class="carColumn">${car.model}
            <div class="carColumn">${car.year}
            <div class="carColumn">&#36;${car.price}
            <div class="carColumn">${car.color}
            <div class="carColumn" id="carDescription">${car.description}
            <div class="carColumn" style = "font-weight: bold">${purchaseStatus}</div>
            </div></div></div></div></div></div></section>`
  })
}
CarLot.loadInventory(populatePage);

function activateEvents (inventory) {
    var carSelected
    var inputField

    inventory.forEach(function (inventory){
        document.querySelector('body').addEventListener('click', function (event){
            if (event.target.className === "carColumn"){
                carSelected = event.target.parentElement;
                console.log(carSelected);
                // document.querySelector('#allCars').classList.add('selected')
                carSelected.style.backgroundColor = "green"
                carSelected.style.borderWidth = "10px"
                console.log(event.currentTarget)
                // event.currentTarget.style.backgroundColor = "green"
                inputField = document.getElementById('inputField')
                inputField.value = ''
                inputField.focus()


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






