//
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
} else if (diemTDolphins == diemTKoalas) {
    console.log("Hai doi hoa nhau");
} else {
    console.log("Koalas la doi chien thang");
}
//
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
} else {
    console.log("Khong co doi chien thang");
}
//
var dolphins1 = [97, 112, 101];
var koalas1 = [109, 95, 106];

var diemTDolphins = tinhTBDiem(dolphins1);
console.log(`Diem TB cua Team DolPhins: ${diemTDolphins.toFixed(2)}`);
var diemTKoalas = tinhTBDiem(koalas1);
console.log(`Diem TB cua Team Koalas: ${diemTKoalas.toFixed(2)}`);

if (diemTDolphins > diemTKoalas && diemTDolphins >= 100) {
    console.log("Dolphins la doi chien thang");
} else if (diemTDolphins == diemTKoalas && diemTDolphins >= 100 && diemTKoalas >= 100) {
    console.log("Hai doi hoa nhau");
} else if (diemTKoalas > diemTDolphins && diemTKoalas >= 100) {
    console.log("Koalas la doi chien thang");
} else {
    console.log("Khong co doi chien thang");
}