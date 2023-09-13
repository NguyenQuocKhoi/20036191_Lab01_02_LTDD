
console.log("Coding Challenge #9");

var data1 = [17, 21, 23];
var data2 = [12, 5, -5, 0, 4];

var printForecast = (arr) => {
    var String = '';
    for (let i = 0; i < arr.length; i++) {
        String = String + `... ${arr[i]}oC in ${i+1} days`;
    }
    return String;
}

var runResult = printForecast(data1);
    console.log(runResult);

var runResult1 = printForecast(data2);
console.log(runResult1);



