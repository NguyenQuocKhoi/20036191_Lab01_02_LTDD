console.log("Coding Challenge #7");
const calcBMI = (mass, height) => {
    return mass / (height * height);
}

var MarkObj = {
    fullName: "Mark",
    mass: 78,
    height: 1.69,
    BMI: calcBMI()
}

var JohnObj = {
    fullName: "John",
    mass: 92,
    height: 1.95,
    BMI: calcBMI()
}

var resultBMIMark = calcBMI(MarkObj.mass, MarkObj.height);
console.log(`BMI cua Mark: ${resultBMIMark.toFixed(2)}`);

var resultBMIJohn = calcBMI(JohnObj.mass, JohnObj.height);
console.log(`BMI cua John: ${resultBMIJohn.toFixed(2)}`);


if (resultBMIMark > resultBMIJohn) {
    console.log(`Chi so BMI cua Mark(${resultBMIMark.toFixed(2)}) cao hon cua John (${resultBMIJohn.toFixed(2)})!`);
}
else {
    console.log(`Chi so BMI cua Mark(${resultBMIMark.toFixed(2)}) thap hon cua John (${resultBMIJohn.toFixed(2)})!`);
}
