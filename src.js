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
  function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('dropdown');
  }
  function toggleMenu() {
    const nav = document.querySelector('nav');
    const menuToggle = document.querySelector('.menu-toggle');
  
    // Toggle the dropdown class on the nav
    nav.classList.toggle('dropdown');
  
    // Change the button text based on the menu state
    if (nav.classList.contains('dropdown')) {
      menuToggle.textContent = '✖';
    } else {
      menuToggle.textContent = '☰';
    }
  }
      