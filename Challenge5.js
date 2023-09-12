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
    } else if (avgKoalas >= avgDolhins * 2) {
        console.log(`Coalas thang (${avgDolhins}, ${avgKoalas})`);
    } else {
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