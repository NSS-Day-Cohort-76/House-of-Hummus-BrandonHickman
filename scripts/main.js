import { FoodTruck } from "./FoodTruck.js"
import { placeOrder } from "./TransientState.js"
import { isOrderComplete } from "./TransientState.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()
}

renderAllHTML()
document.addEventListener("click", (event) => {
    if (event.target.id === "purchase") {
        placeOrder()
    }
})
document.addEventListener("orderPlaced", () => {
    renderAllHTML()
})
document.addEventListener("change", () => {
    const button = document.getElementById("purchase")
    if (button) {
        button.disabled = !isOrderComplete()
    }
})