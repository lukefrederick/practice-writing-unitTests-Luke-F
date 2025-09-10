const cart = require('../cart.js');



// addItem() function
describe("addItem", function() {

test("Should return \"Item added successfully\" when successful",
function() {
   expect(cart.addItem("Test", 1)).toBe("Item added successfully");
});

test("Should return \"Quantity cannot be less than 0 and must be a number",
function() {
   expect(cart.addItem("Test", -1)).toBe("Quantity cannot be less than 0 and must be a number");
   expect(cart.addItem("Test", "Hello")).toBe("Quantity cannot be less than 0 and must be a number");
   expect(cart.addItem("Test")).toBe("Quantity cannot be less than 0 and must be a number");
});

test("Should return \"Item must have name and must be a string",
function() {
   expect(cart.addItem("", 1)).toBe("Item must have name and must be a string");
   expect(cart.addItem(1, 1)).toBe("Item must have name and must be a string");
});


});