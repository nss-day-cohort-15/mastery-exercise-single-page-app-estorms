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


  // Now that the DOM is loaded, establish all the event listeners needed

function activateEvents(inventory) {
    var carSelected
    var inputField = document.getElementById('inputField')



    document.querySelector('body').addEventListener('click', function(event) { //add click event listener to body

        if (event.target.className === "carColumn") { //located clicks on car object
            carSelected = event.target.parentElement //target div containing each object
            carSelected.style.backgroundColor = "beige" //change background of target div
            carSelected.style.borderWidth = "10px" //change border width of target div
            inputField.value = '' //clear input field
            inputField.focus() //bring cursor to input field






                inputField.addEventListener('keypress', function(event) { //add keypress event listener to input field
                if (event.keyCode === 13) {  //when user clicks enter, input field content appended to each car object
                    console.log('listener added successfully')
                    carSelected.innerHTML += inputField.value;
                    inputField.value = '' //clear input field once value appended to car


                }

            })




    }
})
    document.querySelector('#button').addEventListener('click', function (event){
        alert("I'm just a button. That's all I know")


    })
    document.querySelector('body').addEventListener('click', function(event){
        if (event.target.id === 'allCars'){
        console.log('allCars selected')
        carSelected = event.srcElement
        console.log(carSelected)
        carSelected.style.backgroundColor = "beige" //change background of target div
            carSelected.style.borderWidth = "10px" //change border width of target div
            inputField.value = '' //clear input field
            inputField.focus() //bring cursor to input field
    }

    })
}
CarLot.loadInventory(activateEvents)


//return border sizes/background color to normal once another element is selected
//style, esp. crappy navbar

