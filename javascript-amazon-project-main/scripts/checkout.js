import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import '../data/cart-oop.js';
// import '../data/cart-class.js'
// import '../data/backend-practice.js';
// 
/* async makes a function return a promise, async uis the shorter form of promise this demonstrated below
function loadPage() {
  new Promise((resolve) =>{
    console.log('load page');
    resolve()
  }) 
} */
async function loadPage(){
  try{
    // throw 'error1'
    await loadProductsFetch();
 const value = await new Promise((resolve, reject) => {
    loadCart(() => {
      // reject('error3')
      resolve('value3');
    });
  })
  }catch(error) {
    console.log('unexpected errror. please try again later')  
  }
  renderOrderSummary();
  renderPaymentSummary();
}
loadPage();
// await let us wait for a promise to finish before going to the next line

/* Promise.all([
loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then((values) =>{
    renderOrderSummary();
    renderPaymentSummary();
}); */

//  promises are a better way to wait for asynchronous code to finish vs call-back because it avoid nesting

/* new Promise((resolve) => {
  loadProducts(() => {
    resolve("value1");
  });
})
  .then((value) => {
    console.log(value);

    return new Promise((resolve) => {
      loadCart(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });

// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
// }); */
