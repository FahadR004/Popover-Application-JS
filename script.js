const openButton = document.getElementById("openButton");
const popoverContainer = document.querySelector(".popover-container");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", function() {
    popoverContainer.classList.add("active");
})


closeButton.addEventListener("click", function() {
    popoverContainer.classList.remove("active");
})