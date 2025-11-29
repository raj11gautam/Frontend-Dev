function submitOrder() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() > 0.5 ? resolve("Order Success") : reject("Order Failed");
        }, 500);
    });
}

async function processOrder() {
    for (let i = 1; i <= 3; i++) {
        try {
            await submitOrder();
            console.log(`Attempt ${i}: Success`);
            return;
        } catch (err) {
            console.log(`Attempt ${i}: Failed`);
        }
    }
    throw "Order could not be processed";
}

processOrder()
    .catch(err => console.log(err));