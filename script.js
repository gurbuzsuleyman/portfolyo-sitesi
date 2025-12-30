document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".filter-btn");
  const cards = document.querySelectorAll(".project-card");
  const noMsg = document.getElementById("no-project-message");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filterValue = button.getAttribute("data-filter");
      let visibleCount = 0;

      cards.forEach((card) => {
        const cardCategory = card.getAttribute("data-category");

        if (filterValue === "all" || filterValue === cardCategory) {
          card.style.display = "flex";
          visibleCount++;
        } else {
          card.style.display = "none";
        }
      });

      if (visibleCount === 0) {
        noMsg.style.display = "block";
      } else {
        noMsg.style.display = "none";
      }
    });
  });
});
