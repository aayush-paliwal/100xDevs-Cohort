// Creating a promise (Takes a function as argument which has two parts(resolve, reject))
const promiseOne = new Promise(function (resolve, reject) {
  // Do an async task like DB calls, cryptography, network
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); // To connect with then
  }, 1000);
});

// .then has direct connection with resolve
promiseOne.then(function () {
  console.log("Promise consumed");
});



new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});



const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // We can also pass data in resolve. Most of the time it will be object. It can be array, function also.
    resolve({ userName: "JS", email: "JS@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});



const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve({ userName: "Js", password: "123" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.userName;
  })
  .then((userName) => {
    // Chaining of then. Whatever the value the above then is returning will come in this
    console.log(userName);
  })
  .catch(function (err) {
    // To catch error
    console.log(err);
  })
  .finally(() => console.log("The promise is either resolved or rejected")); // This will execute always.Some kind of check



// Resolving promise in a different way(Using async await)
const promiseFive = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ userName: "JavaScript", password: "123" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

// async await is similar to .then and .catch. It waits for sometime for the task to complete. It moves on, when it gets completed.
// One problem with them is that they can not handle errors directly

async function consumePromiseFive() {
  try {
    // Waiting for response from promiseFive
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();
