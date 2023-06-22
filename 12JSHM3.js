
  const makePizza = (pizzaName, callback) => {
    console.log(`Pizza ${pizzaName} is being prepared, please wait...`);

    callback(pizzaName);
  }

  makePizza("Royal Grand",  deliverPizza = pizzaName => {

    console.log(`Delivering pizza ${pizzaName}.`);

  });

  

  // Change code below this line

makePizza("Ultracheese",  eatPizza = pizzaName => {
    console.log(`Eating pizza ${pizzaName}`)
  });