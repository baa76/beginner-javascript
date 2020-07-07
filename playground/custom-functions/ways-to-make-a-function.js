/* eslint-disable */
//Function Declaration (Hoisted)
function doctorize(firstName) {
    return `Dr. ${firstName}`;

//Anon function
function (firstName) {
    return `Dr. ${firstName}`;
};
// Function Expression
const doctorize2 = function(firstName) {
return `Dr. ${firstName}`;
};
//Arrow Functions
function inchToCM(inches) {
    const cm = inches *2.54;
    return cm;
}
