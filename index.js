var customerName = "bob";
console.log(customerName);

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
  }

  function setBestCustomer() {
    bestCustomer = 'not bob';
  }

  function overwriteBestCustomer() {
    bestCustomer ='maybe bob';
  }

  const leastFavoriteCustomer = 'John';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Bob';
}
