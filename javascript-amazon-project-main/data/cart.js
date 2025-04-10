export const cart = [];

 export const addToCart = (productId) =>{
    let matchingItem;

    cart.forEach((cartItem) =>{
        if(productId === cartItem.productId){
            matchingItem = cartItem;
        }
    })
    if(matchingItem){
        matchingItem.Quantity += 1;
    } else{
        cart.push({
            productId: productId,
            Quantity: 1
        })
    }
}

