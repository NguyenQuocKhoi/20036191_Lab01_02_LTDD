console.log("Coding Challange #8");

var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tipss = bills.map((bill) => {
    if (bill >= 50 && bill <= 300) {
        return 15 / 100 * bill;
    } else {
        return 20 / 100 * bill;
    }
})
console.log(`tien tip cua cac bills: ${tipss}`);
var totals = bills.map((bill) => {
    if (bill >= 50 && bill < 300) {
        return (15 / 100 * bill) + bill;
    } else {
        return (15 / 100 * bill) + bill;
    }
})

console.log(`tong thanh tien cua cac bills: ${totals}`);

var tips = [];
tips = tipss;
var total = [];
total = totals;

var calcAverage = (arr) => {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i] / arr.length;
    }
    return sum;
}

// var runResult = calcAverage(tips);
// console.log(`Trung binh tien tip: ${runResult.toFixed(2)}`);

var runResult1 = calcAverage(total);
console.log(`Trung binh tien hoa don: ${runResult1.toFixed(2)}`);


