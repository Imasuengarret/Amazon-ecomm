function Cart(localStorageKey){
    const cart = {
         cartItems: undefined,
         loadFromStorage(){
           this.cartItems = JSON.parse(
             localStorage.getItem(localStorageKey)
           ); /* JSON.parse to convert to an array*/
           if (!this.cartItems) {
             this.cartItems = [
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
         },
         saveToStorage(){
            localStorage.setItem(
              localStorageKey,
              JSON.stringify(this.cartItems)
            ); /* JSON.stringify converts to string becos local storage can only save strings*/
          },
          addToCart(productId){
            let matchingItem;
          
            this.cartItems.forEach((cartItem) => {
              if (productId === cartItem.productId) {
                matchingItem = cartItem;
              }
            });
            if (matchingItem) {
              matchingItem.Quantity += 1;
            } else {
              this.cartItems.push({
                productId: productId,
                Quantity: 1,
                deliveryOptionId: '1'
              });
            }
            this.saveToStorage();
          },
          
    removeFromCart(productId) {
        const newCart = [];
      
        this.cartItems.forEach((cartItem) => {
          if (cartItem.productId !== productId) {
            newCart.push(cartItem);
          }
        });
        this.cartItems = newCart;
      
        this.saveToStorage();
      },
      updateDeliveryOptions (productId, deliveryOptionId){
        let matchingItem;
      
        this.cartItems.forEach((cartItem) => {
          if (productId === cartItem.productId) {
            matchingItem = cartItem;
          }
        });
        matchingItem.deliveryOptionId = deliveryOptionId
        this.saveToStorage();
      }
    };
    return cart;
}
const cart = Cart('cart-oop');
const businessCart = Cart('cart-business');

cart.loadFromStorage();
businessCart.loadFromStorage();



console.log(cart);
console.log(businessCart);











