import { Sales } from "./Sales.js";
import { EntreesOptions } from "./Entrees.js";
import { VegetableOptions } from "./Vegetables.js";
import { SideOptions } from "./SideDishes.js";
import { PlaceOrderButton } from "./PlaceOrderBtn.js";

export const FoodTruck = async () => {
  const salesHTML = await Sales();
  const entreesHTML = await EntreesOptions();
  const vegetablesHTML = await VegetableOptions();
  const sidesHTML = await SideOptions();
  const buttonHTML = PlaceOrderButton();

  return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
        <article class="choices">

    <section 
    class="choices__entree options">${entreesHTML}
    </section>

    <section
    class="choices__vegetable options">${vegetablesHTML}
    </section>

    <section
    class="choices__side options">${sidesHTML}
    </section>
        </article>

        <article>
            <article class="order">
            ${buttonHTML}
        </article>
        
        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `;
};
