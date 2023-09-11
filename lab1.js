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

console.log("Coding Challenge #2");

if (MarkBMI > JohnBMI) {
    console.log(`Chi so BMI Mark(${MarkBMI.toFixed(2)})` + ' cao hon ' + `John(${JohnBMI.toFixed(2)})`);
}
else {
    console.log(`Chi so BMI Mark(${MarkBMI.toFixed(2)})` + ' cao hon ' + `John(${JohnBMI.toFixed(2)})`);
}
console.log("Coding Challenge #3");

var dolphins1 = [96, 108, 89];
var koalas1 = [88, 91, 110];

function tinhTBDiem(arr) {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = (sum + arr[index]);
    }
    return sum / 3;
}

var diemTDolphins = tinhTBDiem(dolphins1);
console.log(`Diem TB cua Team DolPhins: ${diemTDolphins.toFixed(2)}`);
var diemTKoalas = tinhTBDiem(koalas1);
console.log(`Diem TB cua Team Koalas: ${diemTKoalas.toFixed(2)}`);

if (diemTDolphins > diemTKoalas) {
    console.log("Dolphins la doi chien thang");
}
else if (diemTDolphins == diemTKoalas) {
    console.log("Hai doi hoa nhau");
}
else {
    console.log("Koalas la doi chien thang");
}

var dolphins1 = [97, 112, 101];
var koalas1 = [109, 95, 123];


var diemTDolphins = tinhTBDiem(dolphins1);
console.log(`Diem TB cua Team DolPhins: ${diemTDolphins.toFixed(2)}`);
var diemTKoalas = tinhTBDiem(koalas1);
console.log(`Diem TB cua Team Koalas: ${diemTKoalas.toFixed(2)}`);

if (diemTDolphins > diemTKoalas && diemTDolphins > 100) {
    console.log("Dolphins la doi chien thang");
}
if (diemTKoalas > diemTDolphins && diemTKoalas > 100) {
    console.log("Koalas la doi chien thang");
}
else {
    console.log("Khong co doi chien thang");
}

var dolphins1 = [97, 112, 101];
var koalas1 = [109, 95, 106];

var diemTDolphins = tinhTBDiem(dolphins1);
console.log(`Diem TB cua Team DolPhins: ${diemTDolphins.toFixed(2)}`);
var diemTKoalas = tinhTBDiem(koalas1);
console.log(`Diem TB cua Team Koalas: ${diemTKoalas.toFixed(2)}`);

if (diemTDolphins > diemTKoalas && diemTDolphins >= 100) {
    console.log("Dolphins la doi chien thang");
}
else if (diemTDolphins == diemTKoalas && diemTDolphins >= 100 && diemTKoalas >= 100) {
    console.log("Hai doi hoa nhau");
}
else if (diemTKoalas > diemTDolphins && diemTKoalas >= 100) {
    console.log("Koalas la doi chien thang");
}
else {
    console.log("Khong co doi chien thang");
}

console.log("Coding Challenge #4");

var billValue = 275;
var tip = billValue >= 50 && billValue <= 300 ? 15 / 100 : 20 / 100;

function tinhTienTip(tips, orderValue) {
    return tips * orderValue;
}

var tienTiepHoaDon1 = tinhTienTip(tip, billValue);
console.log("hoa don la " + billValue + `, tien boa la ${tienTiepHoaDon1} ` + `va tong gia tri la ${billValue + tienTiepHoaDon1}`);

var billValue = 40;
var tip = billValue >= 50 && billValue <= 300 ? 15 / 100 : 20 / 100;

var tienTiepHoaDon1 = tinhTienTip(tip, billValue);
console.log("hoa don la " + billValue + `, tien boa la ${tienTiepHoaDon1} ` + `va tong gia tri la ${billValue + tienTiepHoaDon1}`);

var billValue = 430;
var tip = billValue >= 50 && billValue <= 300 ? 15 / 100 : 20 / 100;

var tienTiepHoaDon1 = tinhTienTip(tip, billValue);
console.log("hoa don la " + billValue + `, tien boa la ${tienTiepHoaDon1} ` + `va tong gia tri la ${billValue + tienTiepHoaDon1}`);

console.log("Coding Challenge #5");

var dolphins = [44, 23, 71];
var Koalas = [65, 54, 49];

var calcAverage = (arr) => {
    var sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum = sum + arr[index];
    }
    return sum / 3;
}
var avgDolhins = calcAverage(dolphins);
console.log(`Diem TB doi Dolphins la: ${avgDolhins}`);

var avgKoalas = calcAverage(Koalas);
console.log(`Diem TB doi Koalas la: ${avgKoalas}`);

var checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= avgKoalas * 2) {
        console.log(`Dolphins thang (${avgDolhins}, ${avgKoalas})`);
    }
    else if (avgKoalas >= avgDolhins * 2) {
        console.log(`Coalas thang (${avgDolhins}, ${avgKoalas})`);
    }
    else {
        console.log("Khong co doi nao chien thang");
    }
}
checkWinner(avgDolhins, avgKoalas);
//
var dolphins = [85, 54, 41];
var Koalas = [23, 34, 27];
var avgDolhins = calcAverage(dolphins);
console.log(`Diem TB doi Dolphins la: ${avgDolhins}`);
var avgKoalas = calcAverage(Koalas);
console.log(`Diem TB doi Koalas la: ${avgKoalas}`);
checkWinner(avgDolhins, avgKoalas);