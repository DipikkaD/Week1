// Global Variable
let genderType = "female";
function printGender() {
// Function Scoped Variable
let color = "brown";
if (genderType.startsWith("female")) {
// var is function scoped
var age = 30;
// Block Scoped Variable
let color = "pink";
console.log("Color inside if block:", color);
}
console.log("Age outside if block:", age);
console.log("Color outside if block:", color);
}
printGender();
console.log("Global Gender:", genderType);
// Change global value
genderType = "male";
printGender();
console.log("Global Gender:", genderType);