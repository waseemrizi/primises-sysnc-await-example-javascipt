console.log("before food prepare");

function preparedFood(data) {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            if (data !== 2) {

                console.log("prepare food");
                resolve("food is ready");

            }
            else {
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

function preparedCoffe() {
    let promise = new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("prepare coffee ");
            resolve("coffe is ready");

        }, 4000);
    });
    return promise;
}

async function startProcess() {
    try {
        let foodvalue = await preparedFood(2);
    console.log(foodvalue);

    let toastValue = await frenchToast();
    console.log(toastValue);

    let coffeValue = await preparedCoffe();
    console.log(coffeValue);
    } catch (error) {
       console.log("error is", error) ;
    }
}

startProcess();

console.log("after preparing food dinner is ready");