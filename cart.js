// // // Cart functionality
// // let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // // Function to add item to cart
// // function addToCart(productName, price, imageSrc) {
// //     const item = {
// //         name: productName,
// //         price: parseFloat(price.replace('$', '')),
// //         image: imageSrc,
// //         quantity: 1
// //     };

// //     // Check if item already exists
// //     const existingItem = cart.find(cartItem => cartItem.name === productName);
// //     if (existingItem) {
// //         existingItem.quantity += 1;
// //     } else {
// //         cart.push(item);
// //     }

// //     localStorage.setItem('cart', JSON.stringify(cart));
// //     updateCartCount();
// //     alert(`${productName} added to cart!`);
// // }

// // // Function to remove item from cart
// // function removeFromCart(index) {
// //     cart.splice(index, 1);
// //     localStorage.setItem('cart', JSON.stringify(cart));
// //     displayCart();
// //     updateCartCount();
// // }

// // // Function to update cart count in navigation
// // function updateCartCount() {
// //     const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
// //     const cartLink = document.querySelector('a[href="Cart.html"]');
// //     if (cartLink) {
// //         let badge = cartLink.querySelector('.cart-badge');
// //         if (!badge) {
// //             badge = document.createElement('span');
// //             badge.className = 'cart-badge';
// //             cartLink.appendChild(badge);
// //         }
// //         badge.textContent = cartCount;
// //         badge.style.display = cartCount > 0 ? 'inline' : 'none';
// //     }
// // }

// // // Function to display cart items
// // function displayCart() {
// //     const cartContainer = document.getElementById('cart-items');
// //     const summarySidebar = document.getElementById('cart-summary-sidebar');
// //     const emptyMessage = document.getElementById('empty-cart');
// //     const subtotalEl = document.getElementById('subtotal-amount');
// //     const totalEl = document.getElementById('final-total');

// //     if (!cartContainer) return;

// //     cartContainer.innerHTML = '';
// //     let total = 0;

// //     if (cart.length === 0) {
// //         emptyMessage.style.display = 'block';
// //         summarySidebar.style.display = 'none';
// //         return;
// //     }

// //     emptyMessage.style.display = 'none';
// //     summarySidebar.style.display = 'block';

// //     cart.forEach((item, index) => {
// //         const itemTotal = item.price * item.quantity;
// //         total += itemTotal;

// //         const itemElement = document.createElement('div');
// //         itemElement.className = 'cart-item';
// //         itemElement.innerHTML = `
// //             <img src="${item.image}" alt="${item.name}" class="cart-item-image">
// //             <div class="cart-item-details">
// //                 <h4>${item.name}</h4>
// //                 <p class="item-price">$${item.price.toFixed(2)}</p>
// //                 <p>Qty: ${item.quantity}</p>
// //                 <button onclick="removeFromCart(${index})" class="btn-remove">
// //                     <i class="fas fa-trash-alt"></i> Remove Item
// //                 </button>
// //             </div>
// //             <div class="item-total-price">
// //                 <strong>$${itemTotal.toFixed(2)}</strong>
// //             </div>
// //         `;
// //         cartContainer.appendChild(itemElement);
// //     });

// //     subtotalEl.textContent = `$${total.toFixed(2)}`;
// //     totalEl.textContent = `$${total.toFixed(2)}`;
// // }
// // // Initialize cart count on page load
// // document.addEventListener('DOMContentLoaded', function() {
// //     updateCartCount();
// //     if (document.getElementById('cart-items')) {
// //         displayCart();
// //     }
// // });
// // // Ensure your cart array is initialized
// // let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // function addToCart(productName, price, imageSrc) {
// //     // Convert price to a clean number regardless of '$' symbols
// //     const cleanPrice = typeof price === 'string' 
// //         ? parseFloat(price.replace(/[$,]/g, '')) 
// //         : price;

// //     const item = {
// //         name: productName,
// //         price: cleanPrice,
// //         image: imageSrc,
// //         quantity: 1
// //     };

// //     // Check if item already exists in cart
// //     const existingItemIndex = cart.findIndex(cartItem => cartItem.name === productName);
    
// //     if (existingItemIndex > -1) {
// //         cart[existingItemIndex].quantity += 1;
// //     } else {
// //         cart.push(item);
// //     }

// //     // Save to Local Storage
// //     localStorage.setItem('cart', JSON.stringify(cart));
    
// //     // Update the UI
// //     updateCartCount();
    
// //     // Optional: Visual Feedback (Instead of a boring alert)
// //     showToast(`${productName} added to adventure bag!`);
// // }

// // // Simple Toast Notification function for better UX
// // function showToast(message) {
// //     const toast = document.createElement('div');
// //     toast.className = 'cart-toast';
// //     toast.innerText = message;
// //     document.body.appendChild(toast);
    
// //     setTimeout(() => {
// //         toast.classList.add('show');
// //         setTimeout(() => {
// //             toast.classList.remove('show');
// //             setTimeout(() => toast.remove(), 300);
// //         }, 2000);
// //     }, 100);
// // }
// // 1. Initialize the cart from LocalStorage (or create an empty array if first time)
// let cart = JSON.parse(localStorage.getItem('camping_cart')) || [];

// // Run the count update immediately so the navbar is correct on page load
// updateCartCount();

// /**
//  * Adds a product to the cart
//  * @param {string} name - Name of the product
//  * @param {string} price - Price as a string (e.g., "249.00")
//  * @param {string} image - Path to the product image
//  */
// function addToCart(name, price, image) {
//     // Convert price string to a actual number
//     const productPrice = parseFloat(price);

//     // Create a product object
//     const product = {
//         name: name,
//         price: productPrice,
//         image: image,
//         quantity: 1
//     };

//     // Check if product already exists in the cart
//     const existingItemIndex = cart.findIndex(item => item.name === name);

//     if (existingItemIndex > -1) {
//         // If it exists, just increase the quantity
//         cart[existingItemIndex].quantity += 1;
//     } else {
//         // If it's new, push the object to our cart array
//         cart.push(product);
//     }

//     // Save the updated cart back to LocalStorage
//     localStorage.setItem('camping_cart', JSON.stringify(cart));

//     // Update the UI (the little number on the cart icon)
//     updateCartCount();

//     // Visual feedback (Toast notification)
//     showToast(`${name} added to bag!`);
// }

// /**
//  * Updates the cart number badge in the navigation bar
//  */
// function updateCartCount() {
//     const cartCountElement = document.getElementById('cart-count');
//     if (cartCountElement) {
//         // Calculate total items (sum of all quantities)
//         const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//         cartCountElement.innerText = totalItems;
        
//         // Hide badge if cart is empty, show if it has items
//         cartCountElement.style.display = totalItems > 0 ? 'flex' : 'none';
//     }
// }

// /**
//  * Creates a beautiful popup notification
//  */
// function showToast(message) {
//     // Create the toast element
//     const toast = document.createElement('div');
//     toast.style.cssText = `
//         position: fixed;
//         bottom: 30px;
//         right: 30px;
//         background: #1a1c1d;
//         color: white;
//         padding: 12px 24px;
//         border-radius: 8px;
//         box-shadow: 0 10px 25px rgba(0,0,0,0.2);
//         z-index: 9999;
//         font-family: sans-serif;
//         animation: slideIn 0.3s ease-out;
//     `;
//     toast.innerText = message;
//     document.body.appendChild(toast);

//     // Remove it after 2.5 seconds
//     setTimeout(() => {
//         toast.style.opacity = '0';
//         toast.style.transition = 'opacity 0.5s ease';
//         setTimeout(() => toast.remove(), 500);
//     }, 2500);
// }

// // Add the slideIn animation to the document
// const style = document.createElement('style');
// style.innerHTML = `
//     @keyframes slideIn {
//         from { transform: translateX(100%); opacity: 0; }
//         to { transform: translateX(0); opacity: 1; }
//     }
// `;
// document.head.appendChild(style);







// 1. Initialize the cart from LocalStorage
// Note: Changed key to 'camping_cart' to match your latest logic
let cart = JSON.parse(localStorage.getItem('camping_cart')) || [];

// Run these on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    // Only try to display the cart if we are on the Cart.html page
    if (document.getElementById('cart-items')) {
        displayCart();
    }
});

/**
 * Adds a product to the cart
 */
function addToCart(name, price, image) {
    const productPrice = parseFloat(price);
    const existingItemIndex = cart.findIndex(item => item.name === name);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += 1;
    } else {
        cart.push({
            name: name,
            price: productPrice,
            image: image,
            quantity: 1
        });
    }

    saveCart();
    updateCartCount();
    showToast(`${name} added to bag!`);
}

/**
 * Renders the items onto the Cart.html page
 */
function displayCart() {
    const cartContainer = document.getElementById('cart-items');
    const summarySidebar = document.getElementById('cart-summary-sidebar');
    const emptyMessage = document.getElementById('empty-cart');
    
    const subtotalEl = document.getElementById('subtotal-amount');
    const totalEl = document.getElementById('final-total');

    if (!cartContainer) return;

    cartContainer.innerHTML = '';
    let runningTotal = 0;

    if (!cart || cart.length === 0) {
        if (emptyMessage) emptyMessage.style.display = 'block';
        if (summarySidebar) summarySidebar.style.display = 'none';
        return;
    }

    if (emptyMessage) emptyMessage.style.display = 'none';
    if (summarySidebar) summarySidebar.style.display = 'block';

    cart.forEach((item, index) => {
        // Ensure price and quantity are treated as numbers to avoid NaN
        const price = Number(item.price) || 0;
        const qty = Number(item.quantity) || 0;
        const itemTotal = price * qty;
        
        runningTotal += itemTotal;

        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item'; 
        
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <p class="item-price">$${price.toFixed(2)}</p>
                <p>Qty: ${qty}</p>
                <button onclick="removeFromCart(${index})" class="btn-remove">
                    <i class="fas fa-trash-alt"></i> Remove Item
                </button>
            </div>
            <div class="item-total-price" style="margin-left: auto; font-weight: 800; font-size: 1.1rem;">
                $${itemTotal.toFixed(2)}
            </div>
        `;
        cartContainer.appendChild(itemElement);
    });

    // CRITICAL FIX: Ensure elements exist before setting textContent
    const formattedTotal = `$${runningTotal.toFixed(2)}`;
    
    if (subtotalEl) subtotalEl.textContent = formattedTotal;
    if (totalEl) totalEl.textContent = formattedTotal;
}

/**
 * Removes an item and refreshes the page
 */
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    displayCart();
    updateCartCount();
}

function saveCart() {
    localStorage.setItem('camping_cart', JSON.stringify(cart));
}

function updateCartCount() {
    // Look for the "Cart" link in your navbar
    const cartLink = document.querySelector('a[href="Cart.html"]');
    if (cartLink) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
        // Find or create a badge
        let badge = cartLink.querySelector('.cart-badge');
        if (!badge) {
            badge = document.createElement('span');
            badge.className = 'cart-badge';
            // Simple styling to make it look like a notification bubble
            badge.style.cssText = `
                background: #e67e22;
                color: white;
                border-radius: 50%;
                padding: 2px 6px;
                font-size: 11px;
                margin-left: 5px;
                vertical-align: middle;
            `;
            cartLink.appendChild(badge);
        }
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline-block' : 'none';
    }
}

function showToast(message) {
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed; bottom: 30px; right: 30px;
        background: #1a1c1d; color: white;
        padding: 12px 24px; border-radius: 8px;
        z-index: 9999; animation: slideIn 0.3s ease-out;
    `;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transition = 'opacity 0.5s ease';
        setTimeout(() => toast.remove(), 500);
    }, 2500);
}

// Global Animation
const style = document.createElement('style');
style.innerHTML = `@keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }`;
document.head.appendChild(style);