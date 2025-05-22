/*  Handles tab filtering and sends car-info (name, daily price, image)
    to the payment page via query-string parameters               */
document.addEventListener("DOMContentLoaded", () => {
  const tabs     = document.querySelectorAll(".tab");
  const carCards = document.querySelectorAll(".car-card");

  /* ----- “Book Now” buttons ----- */
  carCards.forEach(card => {
    const btn = card.querySelector(".book-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      const name   = card.querySelector("h2")?.textContent.trim() ?? "";
      const imgUrl = card.querySelector("img")?.src ?? "";

      /* extract “Rental:” value, keep digits only */
      const rentalP  = [...card.querySelectorAll(".car-details p")]
                       .find(p => p.textContent.includes("Rental:"));
      const pricePerDay = rentalP ? rentalP.textContent.replace(/[^0-9]/g, "") : "0";

      /* jump to payment screen */
      const url = `index1.html?car=${encodeURIComponent(name)}&price=${encodeURIComponent(pricePerDay)}&img=${encodeURIComponent(imgUrl)}`;
      location.href = url;
    });
  });
});
