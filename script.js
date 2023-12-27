document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter_buttons button");
    const cards = document.querySelectorAll(".filterable_cards .card");
  
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Reset the active class for all buttons
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        // Set the active class for the clicked button
        this.classList.add("active");
  
        // Filter cards based on the data-name attribute
        const filterValue = this.getAttribute("data-name");
        cards.forEach((card) => {
          if (filterValue === "all" || card.getAttribute("data-name") === filterValue) {
            card.classList.remove("hide");
          } else {
            card.classList.add("hide");
          }
        });
      });
    });
  });
  