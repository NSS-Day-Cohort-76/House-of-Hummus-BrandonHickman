let transientState = {
    entreeId: null,
    vegetableId: null,
    sideId: null,
}

export const setEntree = (id) => {
    transientState.entreeId = id
}

export const setVegetable = (id) => {
    transientState.vegetableId = id
}

export const setSide = (id) => {
    transientState.sideId = id
}

export const getTransientState = () => {
    return {...TransientState}
}

export const resetTransientState = () => {
    transientState = {
        entreeId: null,
        vegetableId: null,
        sideId: null,
    }
}

export const placeOrder = async () => {
    const order = {
        entreeId: transientState.entreeId,
        vegetableId: transientState.vegetableId,
        sideId: transientState.sideId
    }

    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(order)
    }

    const response = await fetch(`http://localhost:8088/purchases`, postOptions)

    if (response.ok) {
        resetTransientState()

        window.alert("Thank you, come again!")

        const customEvent = new CustomEvent("orderPlaced")
        document.dispatchEvent(customEvent)
    }
}