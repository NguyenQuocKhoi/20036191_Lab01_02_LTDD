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