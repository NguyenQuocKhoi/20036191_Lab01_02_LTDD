console.log("Coding Challenge #1");
var mMark = 78;
var hMark = 1.69;
var mJohn = 92;
var hJohn = 1.95;

function tinhBMI(mass, height) {
    return mass / (height * height);
}

var MarkBMI = tinhBMI(mMark, hMark);
var JohnBMI = tinhBMI(mJohn, hJohn);

console.log(`Chi so BMI cua Mark: ${MarkBMI.toFixed(2)}`);
console.log(`Chi so BMI cua John: ${JohnBMI.toFixed(2)}`);

var markHigherBMI = MarkBMI > JohnBMI;
console.log('Chi so BMI cua Mark co lon hon John: ' + markHigherBMI)
    //
console.log("Coding Challenge #2");

if (MarkBMI > JohnBMI) {
    console.log(`Chi so BMI Mark(${MarkBMI.toFixed(2)})` + ' cao hon ' + `John(${JohnBMI.toFixed(2)})`);
} else {
    console.log(`Chi so BMI Mark(${MarkBMI.toFixed(2)})` + ' cao hon ' + `John(${JohnBMI.toFixed(2)})`);
}