//exc1
function compareToTen(num) {
    return new Promise((resolve, reject) => {
      if (num <= 10) {
        resolve(`${num} is less than or equal to 10.`);
      } else {
        reject(`${num} is greater than 10.`);
      }
    });
  }
  
  // Test 1
  compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  // Test 2
  compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error));

    
//exc2
const myPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Success");
    }, 4000);
  });
  
  myPromise
    .then(result => console.log(result))
    .catch(error => console.log(error));

    
    //exc3
    const promiseResolve = Promise.resolve(3);

const promiseReject = Promise.reject("Boo!");

promiseResolve
  .then(result => console.log(result))
  .catch(error => console.log(error));

promiseReject
  .then(result => console.log(result))
  .catch(error => console.log(error));
