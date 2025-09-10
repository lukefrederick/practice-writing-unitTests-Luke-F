const cart = require('../cart.js');

describe("addItem", function() {

// Expected test
test("Should return \"Item added successfully\" when successful",
function() {
   expect(addItem("Test", 1)).toBe("Item added successfully");
});


});