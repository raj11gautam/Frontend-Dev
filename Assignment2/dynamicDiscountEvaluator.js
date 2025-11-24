const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let total = 0;

for (let product of cart) {
    if (product.category === "electronics") product.price *= 0.9;
    else if (product.category === "fashion") product.price *= 0.95;

    total += product.price;
}

if (total > 50000) total *= 0.95;

console.log(`Final Total: ${Math.round(total)}`);
