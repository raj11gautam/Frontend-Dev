const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let dept of departments) {
    let score = dept[1];
    if (score >= 90) console.log(`${dept[0]}: Excellent`);
    else if (score >= 75) console.log(`${dept[0]}: Good`);
    else if (score >= 60) console.log(`${dept[0]}: Average`);
    else console.log(`${dept[0]}: Needs Improvement`);
}

