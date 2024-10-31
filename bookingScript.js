// Redirects to booking page with selected package details
function redirectToBooking(category, package, price) {
    localStorage.setItem("selectedPackage", JSON.stringify({ category, package, price }));
    window.location.href = "bookingPage.html";  // Update to your desired cart or booking page if different
}

// Loads selected package details on the booking page
document.addEventListener("DOMContentLoaded", function () {
    const selectedPackage = JSON.parse(localStorage.getItem("selectedPackage"));
    if (selectedPackage && document.getElementById("package")) {
        document.getElementById("package").value = `${selectedPackage.category} ${selectedPackage.package}`;
        document.getElementById("totalPrice").textContent = selectedPackage.price;
    }
});

// Add to cart functionality
function addToCart() {
    const bookingDetails = getFormData();
    if (validateForm(bookingDetails)) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(bookingDetails);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert("Package added to cart!");

        // Optionally, redirect to a cart page after adding
        window.location.href = "cart.html";  // Redirect to cart page if desired
    }
}

// Validation for form fields
function validateForm(details) {
    for (const key in details) {
        if (details[key] === "") {
            alert(`Please fill in your ${key}`);
            return false;
        }
    }
    return true;
}

// Collect form data
function getFormData() {
    return {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        package: document.getElementById("package").value,
        date: document.getElementById("date").value,
        address: document.getElementById("address").value,
        price: document.getElementById("totalPrice").textContent
    };
}

// Placeholder for payment
function payNow() {
    const bookingDetails = getFormData();
    if (validateForm(bookingDetails)) {
        alert("Proceeding to payment...");
        // Add any other steps for payment handling here if needed
    }
}
