console.log("Request data...");

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Preparing data...");

    const backendData = {
      server: "aws",
      port: 2000,
      status: "working",
    };

    resolve(backendData);
  }, 2000);
});

promise
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        data.modified = true;
        //reject(new Error("Неизвестная ошибка"));
        resolve(data);
      }, 2000);
    });
  })
  .then((clientData) => {
    console.log("Data received", clientData);
    clientData.fromPromise = true;
    return clientData;
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => console.error("Error: ", err))
  .finally(() => console.log('Finally'))

const sleep = ms => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), ms)
    })
}

sleep(2000).then(() => console.log('After 2s'));
