function toggleBio(bioId) {
    const bio = document.getElementById(bioId);
    if (bio.style.display === "none" || bio.style.display === "") {
        bio.style.display = "block"; // Show the bio
    } else {
        bio.style.display = "none"; // Hide the bio
    }
}


var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        });
    }

    function toggleGallery(galleryId) {
        const gallery = document.getElementById(galleryId);
        gallery.classList.toggle('hidden');
    }
    
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    
    document.querySelectorAll(".card img").forEach((img) => {
        img.onclick = function () {
            modal.style.display = "block";
            modalImg.src = this.src;
        };
    });
    
    function closeModal() {
        modal.style.display = "none";
    }
    
// Cart array to store added items
let cart = [];

// Function to add item to cart
function addToCart(packageName, packageType, price) {
    // Add item to the cart array
    cart.push({ packageName, packageType, price });
    updateCartCount();
    alert(`${packageName} - Package ${packageType} added to cart.`);
}

// Function to update cart item count display
function updateCartCount() {
    document.getElementById('cart-count').innerText = cart.length;
}

// Function to open cart modal and display cart items
function openCart() {
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.innerHTML = ''; // Clear existing items

    // Check if cart is empty
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        // Display each item in the cart
        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <p>${item.packageName} - Package ${item.packageType}: RM${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItem);
        });
    }
    document.getElementById('cartModal').style.display = 'block';
}

// Function to close cart modal
function closeCart() {
    document.getElementById('cartModal').style.display = 'none';
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    openCart(); // Refresh cart view
}

// Function to handle checkout (you can replace this with real checkout logic)
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty.');
        return;
    }
    alert('Proceeding to checkout.');
    cart = []; // Clear cart after checkout
    updateCartCount();
    closeCart();
}

// Update buttons to call addToCart function
function redirectToBooking(packageName, packageType, price) {
    addToCart(packageName, packageType, price);
}

