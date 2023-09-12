console.log("Coding Challenge #6");
//
var calcTip = (billValue) => {
    var tienTip;
    if (billValue >= 50 && billValue <= 300) {
        tienTip = 15 / 100 * billValue;
    } else {
        tienTip = 20 / 100 * billValue;
    }
    return tienTip;
}
var tips = calcTip(100);
console.log(`Tien tip voi gia tri don hang 100 la: ${tips}`);
//
var bills = [125, 555, 44];
var tips = bills.map((bill) => {
    if (bill >= 50 && bill <= 300) {
        return 15 / 100 * bill;
    } else {
        return 20 / 100 * bill;
    }
})
console.log(`tien tip cua 3 bills: ${tips}`);
var totals = bills.map((bill) => {
    if (bill >= 50 && bill < 300) {
        return (15 / 100 * bill) + bill;
    } else {
        return (15 / 100 * bill) + bill;
    }
})

console.log(`tong thanh tien cua 3 bills: ${totals}`);