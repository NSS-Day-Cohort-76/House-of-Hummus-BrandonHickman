export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=vegetable&_expand=side&_expand=entree")
    const combos = await sales.json()
    const combosArray = combos.map((combo) => {

        const comboPrice = combo.entree.price + combo.vegetable.price + combo.side.price
        const totalPrice = comboPrice.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
        })

        return `<li>Order #${combo.id} cost ${totalPrice}</li>`

    })

    const combosHTML = `
    <ul>
    ${combosArray.join("")}
    </ul>
    `
    return combosHTML
}