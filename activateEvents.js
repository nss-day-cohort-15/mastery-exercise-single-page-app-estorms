
var Carlot = (function (carlot) {

    carlot.activateEvents = function () {

        var carSelected
        var inputField = document.getElementById('inputField')
        document.querySelector('body').addEventListener('click', function(event) { //add click event listener to body

        if (event.target.className === "carColumn") { //locates clicks on car object
            carSelected = event.target.parentElement //target div containing each object
            carSelected.classList.toggle('carSelected')
            inputField.value = '' //clear input field
            inputField.focus() //bring cursor to input field
            inputField.addEventListener('keypress', function(event){
                if (event.keyCode === 13) {
                carSelected.children[4].innerHTML= inputField.
                value;

                }
            })


        }

        if(event.target.id === "carDiv"){
            carSelected = event.srcElement //target div containing each object
            carSelected.classList.toggle('carSelected')
            inputField.value = '' //clear input field
            inputField.focus() //bring cursor to input field
            inputField.addEventListener('keypress', function(event){
                if (event.keyCode === 13) {
                carSelected.children[4].innerHTML = inputField.
                value;
                }

        })

        }
    })

    document.querySelector('#button').addEventListener('click', function (event){
        alert("I'm just a button. That's all I know")
    })
}

return carlot

})(CarLot || {})

CarLot.activateEvents();
