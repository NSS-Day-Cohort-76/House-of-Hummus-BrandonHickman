import { setVegetable } from "./TransientState.js"

export const VegetableOptions = async () => {
    const response = await fetch(`http://127.0.0.1:8088/vegetables`)
    const vegetables = await response.json()

    let vegetablesHTML = "<h2>Vegetables Selection</h2>"

    const vegetableArray = vegetables.map((vegetable) => {
        return `
        <div>
            <input type="radio" name="vegetable" value="${vegetable.id}" />
            ${vegetable.type} is $${vegetable.price}
            </div>
            `
    })
    vegetablesHTML += vegetableArray.join("")
    return vegetablesHTML
}

const handleVegetableChoice = (event) => {
    if (event.target.name === "vegetable")
        setVegetable(parseInt(event.target.value))
}
document.addEventListener("change", handleVegetableChoice)