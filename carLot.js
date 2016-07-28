var CarLot = (function () {
  var inventory = [];

    return {

    getInventory: function () {
      return inventory;
    },

    loadInventory: function (functionToBeInvoked) {
      var xhr = new XMLHttpRequest()
      xhr.open('GET', 'inventory.json');
      xhr.addEventListener('load', function(event) {
      inventory = JSON.parse(event.target.responseText)
        functionToBeInvoked(inventory)
      })
      xhr.send()
    }
}
})()

