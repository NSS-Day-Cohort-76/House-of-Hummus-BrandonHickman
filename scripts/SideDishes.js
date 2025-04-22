import { setSide } from "./TransientState.js"

export const SideOptions = async () => {
    const response = await fetch(`http://127.0.0.1:8088/sides`)
    const sides = await response.json()

    let sidesHTML = "<h2>Sides Selection</h2>"

    const sideArray = sides.map((side) => {
        return `
        <div>
            <input type="radio" name="side" value="${side.id}" />
            ${side.title} is $${side.price}
            </div>
            `
    })
    sidesHTML += sideArray.join("")
    return sidesHTML
}

const handleSideChoice = (event) => {
    if (event.target.name === "side")
        setSide(parseInt(event.target.value))
}
document.addEventListener("change", handleSideChoice)