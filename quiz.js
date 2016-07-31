function displayInventory(inventory) {
    console.log(inventory)
}

CarLot.loadInventory(displayInventory)


function populatePage (inventory) {
  var carsContainer = document.getElementById('containerRow')
  var purchaseStatus
  inventory.forEach(function (car) {
    if (car.purchased === true) {
        purchaseStatus = "Available!"
    }
    else {
        purchaseStatus ="Sold out!"
    }

    containerRow.innerHTML +=
    `<div class="col-md-3" style= "border: 5px solid ${car.color}; box-shadow: 10px 5px 7px black" id="allCars">
            <h3 class="carColumn">${car.make} ${car.model}</h3>

            <p class="carColumn">${car.year}
            <p class="carColumn">&#36;${car.price}
            <p class="carColumn">${car.color}
            <p class="carColumn" id="carDescription">${car.description}
            <p class="carColumn" style = "font-weight: bold">${purchaseStatus}</p>
            </p></p></p></p></div>`
  })
}
CarLot.loadInventory(populatePage);

function activateEvents (inventory) {
    var carSelected
    var inputField

    // inventory.forEach(function (car){

        document.querySelector('body').addEventListener('click', function (event){
            if (event.target.className === "carColumn"){
                carSelected = event.target.parentElement


                // document.querySelector('#allCars').classList.add('selected')
                carSelected.style.backgroundColor = "beige"
                carSelected.style.borderWidth = "10px"
                console.log(event.currentTarget)
                // event.currentTarget.style.backgroundColor = "green"
                inputField = document.getElementById('inputField')
                inputField.value = ''
                inputField.focus()


            }





        // })



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






