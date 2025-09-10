const { default: expect } = require('expect');
const cart = require('../cart.js');



// addItem() function
describe("addItem", function() {

// Positive
test("Should return \"Item added successfully\" when successful",
function() {
   expect(cart.addItem("Test", 1)).toBe("Item added successfully");
});

// Negative/edge
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



describe("removeItem", function() {

// Positive
test("Should return \"Item removed successfully\" when successful",
   function() {
      expect(cart.removeItem("Test")).toBe("Item removed successfully");
   })

// Negative
test("Should return \"Item not in records.\"",
   function() {
      expect(cart.removeItem("")).toBe("Item name not passed or not a string.");
      expect(cart.removeItem(1)).toBe("Item name not passed or not a string.");
      expect(cart.removeItem("Ayyy")).toBe("Item not in records.");
   })

});