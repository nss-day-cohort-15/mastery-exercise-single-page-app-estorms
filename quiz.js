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
            <p class="carColumn" style = "font-weight: bold">${purchaseStatus}
            </p></p></p></p></p></div>`
  })
}
CarLot.loadInventory(populatePage);

function activateEvents (inventory) {
    var carSelected
    var inputField = document.getElementById('inputField')



        document.querySelector('body').addEventListener('click', function (event){
            if (event.target.className === "carColumn"){
                carSelected = event.target.parentElement
                carSelected.style.backgroundColor = "beige"
                carSelected.style.borderWidth = "10px"
                inputField.value = ''
                inputField.focus()

            }


                })

        document.querySelector('body').addEventListener('keypress', function(event){

            if (event.target.id === 'inputField' && event.keyCode === 13){
                console.log('listener added to input field')
                activeElement = document.activeElement
                console.log(activeElement)
                carDescription = document.getElementById('carDescription')
                carDescription.innerText += inputField.value;

            }



        })






}

CarLot.loadInventory(activateEvents)






