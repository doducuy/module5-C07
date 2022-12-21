function sumFibonacci(num) {
    var numOne = 0;
    var numTwo = 1;
    var arr = [0, 1];
    var check = 2;
    while (true) {
        var numThree = numOne + numTwo;
        arr.push(numThree);
        numOne = numTwo;
        numTwo = numThree;
        check++;
        if (check >= num) {
            break;
        }
    }
    var result = 0;
    arr.forEach(function (value) {
        result += value;
    });
    console.log(arr);
    console.log(result);
}
sumFibonacci(7);
