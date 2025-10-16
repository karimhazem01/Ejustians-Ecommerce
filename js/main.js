


window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    headerElement.classList.add("scroll-down")
  } else {
    headerElement.classList.remove("scroll-down")
  }
})

// 1 product page

const products = [
  {
      id: 1,
      title: 'Shorts',
      description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.',
      price: 100,
      image: '/HTML-CSS-Ecommerce-website-main/images/1.png'
  },
  {
      id: 2,
      title: 'HandBag',
      description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.',
      price: 200.,
      image: '/HTML-CSS-Ecommerce-website-main/images/2.webp'
  },
  {
      id: 3,
      title: 'Bagpack',
      description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.',
      price: 300,
      image: '/HTML-CSS-Ecommerce-website-main/images/3.webp'
  },
  {
      id: 4,
      title: 'Shoes',
      description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.',
      price: 400,
      image: '/HTML-CSS-Ecommerce-website-main/images/4.webp'
  },
  {
      id: 5,
      title: 'Cap',
      description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.',
      price: 500,
      image: '/HTML-CSS-Ecommerce-website-main/images/5.webp'
  },
  {
    id: 6,
    title: 'Smart Watch',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.',
    price: 600,
    image: '/HTML-CSS-Ecommerce-website-main/images/6.webp'
},
{
    id: 7,
    title: 'Sun Glasses',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.',
    price: 700,
    image: '/HTML-CSS-Ecommerce-website-main/images/7.webp'
},
{
    id: 8,
    title: 'Stretch',
    description: 'Lorem ipsum dolor sit amet consectetur elit adipisicing . Extempore dolor in, accusantium laudantium accusamus.',
    price: 800,
    image: '/HTML-CSS-Ecommerce-website-main/images/8.png'
}

];

// Add event listeners to the details buttons
document.querySelectorAll('.details-button').forEach(button => {
  button.addEventListener('click', (event) => {
      const productId = event.target.closest('.product-card').getAttribute('data-id');
      viewProduct(productId);
  });
});

// Add event listeners to the product images
document.querySelectorAll('.product-image').forEach(image => {
  image.addEventListener('click', (event) => {
      const productId = event.target.closest('.product-card').getAttribute('data-id');
      viewProduct(productId);
  });
});

// Function to view product details
function viewProduct(productId) {
  const selectedProduct = products.find(p => p.id == productId);
  localStorage.setItem('selectedProduct', JSON.stringify(selectedProduct));
  window.location.href = './pages/product-details.html';
}






    document.addEventListener("DOMContentLoaded", () => {
      const wrapper = document.querySelector('.wrapper');
      const loginLink = document.querySelector('.login-link');
      const registerLink = document.querySelector('.register-link');
      const btnPopup = document.querySelector('.btnLogin-popup');
      const iconClose = document.querySelector('.icon-close');
  
      console.log("Script loaded. Elements found:", { wrapper, loginLink, registerLink, btnPopup, iconClose });
  
      if (!wrapper || !iconClose || !btnPopup || !loginLink || !registerLink) {
          console.error("One or more elements not found. Check HTML structure.");
          return;
      }
  
      // Show popup when "Login" button is clicked
      btnPopup.addEventListener('click', () => {
          console.log("Login popup button clicked");
          wrapper.classList.add('active-popup');
      });
  
      // Switch to Register form
      registerLink.addEventListener('click', () => {
          console.log("Register clicked");
          wrapper.classList.add('active');
      });
  
      // Switch back to Login form
      loginLink.addEventListener('click', () => {
          console.log("Login clicked");
          wrapper.classList.remove('active');
      });
  
      // Close popup when close button is clicked
      iconClose.addEventListener('click', () => {
          console.log("Close button clicked");
          wrapper.classList.remove('active-popup');
          wrapper.classList.remove('active');
      });
  });













