function promise_resolve() {
    let promise = Promise.resolve();
    promise
    .then(() => {
       console.log('promise_resolve1');
    })
    .then(() => {
       console.log('promise_resolve2');
    });
 
    return promise;
 }
 
 //promise_resolve(); 
 
 function promise_forEach_then() {
    let ids = [1,2,3];
    let promise = Promise.resolve();
    ids.forEach((id) => {
       promise
       .then(() => {
          return {id}
       })
       .then(consoleLogId)
    });
 }
 
 function consoleLogId(id) {
    console.log('promise_forEach_then---' + id);
 }
 
 promise_forEach_then();
