document.addEventListener('DOMContentLoaded', () => {
    const productDetailsContainer = document.getElementById('product-details-container');
    const selectedProduct = JSON.parse(localStorage.getItem('selectedProduct'));

    if (selectedProduct) {
        productDetailsContainer.innerHTML = `
            <img src="${selectedProduct.image}" alt="${selectedProduct.title}">
            <h2>${selectedProduct.title}</h2>
            <p>Price: $${selectedProduct.price.toFixed(2)}</p>
            <p>${selectedProduct.description}</p>
            <button id="add-to-cart">Add to Cart</button>
        `;

        document.getElementById('add-to-cart').addEventListener('click', () => {
            addToCart(selectedProduct);
        });
    } else {
        productDetailsContainer.innerHTML = '<p>Product not found.</p>';
    }
});



