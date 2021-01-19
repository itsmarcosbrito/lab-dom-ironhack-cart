// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;

  let updateSubtotal = price * quantity;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = updateSubtotal
    return updateSubtotal;
}

function calculateAll() {
  let products = document.getElementsByClassName('product');
      let productsArray = [...products];
      let total = 0;
      productsArray.forEach(element => {
        // updateSubtotal(element);
        total += updateSubtotal(element)
      });

      let totalvalue = document.querySelector('h2 span');
      totalvalue.innerText = total;

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
 

  // ITERATION 3
    }

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
