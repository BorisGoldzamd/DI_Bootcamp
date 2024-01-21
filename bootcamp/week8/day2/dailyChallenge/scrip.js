let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

// Arrow function to display fruits using forEach
const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

// Arrow function to clone groceries
const cloneGroceries = () => {
  // Create a copy of the client variable
  let user = client;

  // Change the client variable to "Betty"
  client = "Betty";

  // Create a copy of the groceries object
  let shopping = { ...groceries };

  // Change the value of the totalPrice key to "35$"
  shopping.totalPrice = "35$";

  // Change the value of the paid key to false
  shopping.other.paid = false;

  // Log the modified variables
  console.log("User:", user); // "John" (user is a copy of the original client)
  console.log("Client:", client); // "Betty"
