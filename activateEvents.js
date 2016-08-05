var Carlot = (function (carlot) {

    carlot.activateEvents = function () {

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
                 // if (event.keyCode === 13) {  //when user clicks enter, input field content appended to each car object
                    console.log('listener added successfully')
                    carSelected.innerHTML += inputField.value;
                    inputField.value = '' //clear input field once value appended to car

                    carSelected.style.backgroundColor = "white" //change background back to original
                    carSelected.style.borderWidth = "5px" //change background back to original
                // }

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

 return carlot

})(CarLot || {})

CarLot.activateEvents();
