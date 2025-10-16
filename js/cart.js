let itemCount = 0;

// Function to initialize the cart count on page load
function initializeCartCount() {
    // Get the cart count from local storage or set it to 0 if it doesn't exist
    const storedCount = localStorage.getItem('itemCount');
    itemCount = storedCount ? parseInt(storedCount) : 0;
    document.getElementById('cart-count').innerText = itemCount;
}

// Function to add to cart
function addToCart() {
    itemCount++;
    document.getElementById('cart-count').innerText = itemCount;
    // Store the updated count in local storage
    localStorage.setItem('itemCount', itemCount);
}

// Function to clear the cart
function clearCart() {
    itemCount = 0;
    document.getElementById('cart-count').innerText = itemCount;
    localStorage.removeItem('itemCount');
}

// Call this function on page load
initializeCartCount();

// Attach the clearCart function to the clear button
document.querySelector('.clear').addEventListener('click', clearCart);
