console.log("Coding Challenge #7");

// var obj = [{
//     fullName: "Mark",
//     mass: 78,
//     height: 1.69,
// }, {
//     fullName: "John",
//     mass: 92,
//     height: 1.95
// }]


// var calcBMI = (obj) => {
//     return {
//         fullName: obj.fullName,
//         mass: obj.mass,
//         height: obj.height,
//         BMI: obj.mass / (obj.height * obj.height)

//     }
// }

// var runResult = obj.map(calcBMI);
// console.log(runResult)\



var calcBMI = (obj) => {
    return {
        BMI: obj.mass / (obj.height * obj.height)

    }
}
var MarkObj = {
    fullName: "Mark",
    mass: 78,
    height: 1.69,
    BMI: calcBMI
}

var JohnObj = {
    fullName: "John",
    mass: 92,
    height: 1.95,
    BMI: calcBMI
}

var compareBMI = (MarkObj, JohnObj) => {
    if (MarkObj.BMI > JohnObj.BMI) {
        console.log('BMI cua Mark cao hon John');
    } else {
        console.log('BMI cua Mark thap hon John');
    }
}

var result1 = calcBMI(MarkObj);
console.log("BMI cua Mark: ");
console.log(result1);

var result2 = calcBMI(JohnObj);
console.log("BMI cua John: ");
console.log(result2);

compareBMI(MarkObj, JohnObj);