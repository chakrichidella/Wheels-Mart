// Retrieve from localStorage
const startDate = new Date(localStorage.getItem("startDate"));
const endDate = new Date(localStorage.getItem("endDate"));
const pricePerDay = parseFloat(localStorage.getItem("pricePerDay"));

// Calculate number of days (including both start and end date)
const timeDiff = Math.abs(endDate - startDate);
const days = Math.ceil(timeDiff / (1000 * 3600 * 24)); 

// Calculate total price
const totalPrice = days * pricePerDay;

// Display total price
document.getElementById("totalAmount").textContent = "₹" + totalPrice;
