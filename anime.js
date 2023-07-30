const box = document.getElementById("box");
const button = document.getElementById("button");

button.addEventListener("click", () => {
    box.classList.toggle("active");
});