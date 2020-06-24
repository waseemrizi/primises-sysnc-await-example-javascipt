console.log("before food prepare")

//function declare preparefood
function preparedFood(data) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if(data !== 2){
                
            console.log("prepare food");
            resolve("food is ready");
 
            }
            else{
                reject("value is not acceptable");
            }
               }, 2000);
    });
    return promise;
}

function frenchToast() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("prepare french toast");
            resolve("french toast is ready");
        }, 3000);
    });
    return promise;
}

function preparedCoffe(){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            console.log("prepare french toast");
            resolve("coffe is ready");
 
        }, 4000);
               });
               return promise;
}

let promise = preparedFood(2);
promise.then(function (value){
console.log("food is ready callback = ", value)

return frenchToast();

})
.then(function(value){
    console.log("french toast is ready callback = " , value); 

    return preparedCoffe();
})

.then(function(value){
    console.log("coffe is ready calalabck = ", value);
})


.catch(function(error){
console.log("error is ", error);
})



console.log("after food prepare diner is ready");   