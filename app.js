const burger = document.querySelector(".burger")
const items = document.querySelector(".nav-list")

burger.addEventListener("click", () => {
    items.classList.toggle("toggle")
})