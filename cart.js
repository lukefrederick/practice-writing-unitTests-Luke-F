const { string } = require("yargs");
const { number } = require("yargs");

let items = ["Test"];
let quantities = [2];

function addItem(itemName, itemQuantity) {
    if(itemQuantity < 1 || typeof itemQuantity !== "number") {
        console.log("Quantity cannot be less than 0 and must be a number");
        return "Quantity cannot be less than 0 and must be a number";
    }
    if (itemName === undefined || itemName === "" || typeof itemName !== "string") {
        console.log("Item must have name and must be a string");
        return "Item must have name and must be a string";
    }

    items.push(itemName);
    quantities.push(itemQuantity);
    return "Item added successfully";
}

function removeItem(itemName) {

    if(itemName === undefined || itemName === "" || typeof itemName !== "string") {
        return "Item name not passed or not a string.";
    }

    // Get index of item to be removed
    let itemIndex = items.indexOf(itemName);

    // indexOf reuturns -1 if item not in array so return nothing
    if(itemIndex === -1) {
        return "Item not in records.";
    }
    console.log(itemIndex);

    // Remove items at index of itemName
    items.splice(itemIndex, 1);
    quantities.splice(itemIndex, 1);
    return "Item removed successfully";
}

function getTotalItems() {
    
}


addItem(1, 1);
console.log(items);
console.log(quantities);
console.log();
removeItem("Test");
console.log(items);
console.log(quantities);


module.exports = { addItem, removeItem, getTotalItems };