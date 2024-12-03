document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-btn");
    const prices = document.querySelectorAll(".price");
  
    toggleButtons.forEach((button) => {
      button.addEventListener("click", () => {
        toggleButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
  
        const isAnnually = button.id === "annually";
  
        prices.forEach((price) => {
          const newPrice = isAnnually ? price.dataset.annually : price.dataset.monthly;
          price.textContent = `${newPrice}/${isAnnually ? "year" : "month"}`;
        });
      });
    });
  });
  