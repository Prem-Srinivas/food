let cart = [];
let totalPrice = 0;

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    totalPrice += itemPrice;
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = ""; 
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
    });
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
}

function proceedToPayment() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert(`Proceeding to payment for a total of $${totalPrice.toFixed(2)}`);
   
}