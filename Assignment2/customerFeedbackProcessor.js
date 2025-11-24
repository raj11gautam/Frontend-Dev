let feedback = "Great product! Fast delivery and amazing sound quality!";

let wordCount = feedback.split(" ").length;
let containsNegative = feedback.includes("bad") || feedback.includes("poor");

console.log(`Words: ${wordCount}`);
console.log(containsNegative ? "Needs Improvement" : "Positive Feedback");
