let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    // Add the item to the cart
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    
    // Update the cart count badge
    document.getElementById('cartCount').textContent = cart.length;
    
    // Update the offcanvas content
    updateCartContent();
}

function updateCartContent() {
    const cartContent = document.getElementById('cartContent');
    const totalPrice = document.getElementById('totalPrice');

    // Clear the existing content
    cartContent.innerHTML = '';
    totalPrice.innerHTML = '';

    // Populate the cart items
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.textContent = `${item.name}: ${item.price.toFixed(2)} TL`;
        cartContent.appendChild(itemElement);
    });

    // Display the total price
    totalPrice.textContent = `Total: ${total.toFixed(2)} TL`;
}
