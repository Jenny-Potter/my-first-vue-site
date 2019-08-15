new Promise((resolve,reject) => {
 setTimeout(()=>resolve(function re(){console.log("Bli="+888)}),3000);
})
.then(value =>value)
.then(result =>result())
.catch(e => console.log(e))



