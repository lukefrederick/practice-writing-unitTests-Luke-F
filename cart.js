let items = [];
let quantities = [];

function addItem(itemName, itemQuantity) {
    if(itemQuantity < 1) {
        console.log("Quantity cannot be less than 0");
        return;
    }
    if (itemName === undefined) {
        console.log("Item must have name");
        return;
    }

    items.push(itemName);
    quantities.push(itemQuantity);
    return "Item added successfully";
}

function removeItem(itemName) {

    if(itemName === undefined);

    // Get index of item to be removed
    let itemIndex = items.indexOf(itemName);

    // indexOf reuturns -1 if item not in array so return nothing
    if(itemIndex === -1) {
        console.log("Items not in records.");
    }

    // Remove items at index of itemName
    items.splice(itemIndex, 1);
    quantities.splice(itemIndex, 1);
    return;
}

function getTotalItems() {
    
}


addItem("Test", 1);
console.log(items);
console.log(quantities);
console.log();
removeItem("Test");
console.log(items);
console.log(quantities);


module.exports = {addItem, removeItem, getTotalItems};