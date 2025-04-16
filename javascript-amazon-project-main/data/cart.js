// import { deliveryOptions } from "./deliveryoptions";
export let cart = JSON.parse(
  localStorage.getItem("cart")
); /* JSON.parse to convert to an array*/
if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      Quantity: 2,
      deliveryOptionId: '1'
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      Quantity: 1,
      deliveryOptionId: '2'
    }
  ];
}

const saveToStorage = () => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  ); /* JSON.stringify converts to string becos local storage can only save strings*/
};


export const addToCart = (productId) => {
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  if (matchingItem) {
    matchingItem.Quantity += 1;
  } else {
    cart.push({
      productId: productId,
      Quantity: 1,
      deliveryOptionId: '1'
    });
  }
  saveToStorage();
};

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });
  cart = newCart;

  saveToStorage();
}

 export const updateDeliveryOptions = (productId, deliveryOptionId) =>{
  let matchingItem;

  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });
  matchingItem.deliveryOptionId = deliveryOptionId
  saveToStorage()
}
