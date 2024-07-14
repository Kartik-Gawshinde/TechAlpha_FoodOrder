// Function to add items to the cart
function addToCart(itemName, price) {
    let cartItems = document.getElementById('cart-items');
    let cartTotal = document.getElementById('cart-total');
  
    // Create a new list item for the cart
    let listItem = document.createElement('li');
    listItem.textContent = `${itemName} - ₹${price.toFixed(2)}`;
    cartItems.appendChild(listItem);
  
    // Update the total price
    let total = parseFloat(cartTotal.textContent);
    total += price;
    cartTotal.textContent = total.toFixed(2);
  }
  
  // Function to handle checkout (in this example, just alerts the total)
  function checkout() {
    let cartTotal = document.getElementById('cart-total').textContent;
    alert(`Your Total bill is: ₹${cartTotal}`);
  }
  