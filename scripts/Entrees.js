import { setEntree } from "./TransientState.js"

export const EntreesOptions = async () => {
    const response = await fetch(`http://127.0.0.1:8088/entrees`)
    const entrees = await response.json()

    let entreesHTML = "<h2>Entree Selection</h2>"

    const entreeArray = entrees.map((entree) => {
        return `
        <div>
            <input type="radio" name="entree" value="${entree.id}" />
            ${entree.name} is $${entree.price}
            </div>
            `
    })
    entreesHTML += entreeArray.join("")
    return entreesHTML
}

const handleEntreeChoice = (event) => {
    if (event.target.name === "entree")
        setEntree(parseInt(event.target.value))
}
document.addEventListener("change", handleEntreeChoice)