document.addEventListener("DOMContentLoaded", () => {
  const initialSelected = document.querySelector(
    'input[name="bundle"]:checked'
  );

  if (initialSelected) {
    setTimeout(() => {
      const sizeColorId = `sizeColor1`;
      const selectedDropdown = document.getElementById(sizeColorId);

      if (selectedDropdown) {
        selectedDropdown.style.display = "flex";
      } else {
        console.error("Dropdown not found for:", sizeColorId);
      }
    }, 100);
  }

  document.querySelectorAll('input[name="bundle"]').forEach((radio) => {
    radio.addEventListener("change", function () {
      const selectedOption = document.querySelector(
        'input[name="bundle"]:checked'
      );

      const price = parseFloat(selectedOption.value).toFixed(2);
      document.getElementById("totalPrice").textContent = `DKK ${price}`;

      document.querySelectorAll(".bundle-box").forEach((box) => {
        box.classList.remove("active");
      });

      this.closest(".bundle-box").classList.add("active");

      document.querySelectorAll(".size-color").forEach((dropdown) => {
        dropdown.style.display = "none";
      });

      const id = this.id;
      let sizeColorId;
      if (id === "onePair") {
        sizeColorId = "sizeColor1";
      } else if (id === "twoPair") {
        sizeColorId = "sizeColor2";
      } else if (id === "threePair") {
        sizeColorId = "sizeColor3";
      }

      setTimeout(() => {
        const selectedDropdown = document.getElementById(sizeColorId);
        if (selectedDropdown) {
          selectedDropdown.style.display = "flex";
        } else {
          console.error("Dropdown not found for:", sizeColorId);
        }
      }, 100);
    });
  });
});
