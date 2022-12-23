function sumFibonacci(num: number) {
    let numOne: number = 0;
    let numTwo: number = 1;
    let arr: number[] = [0, 1];
    let check: number = 2;
    while (true) {
        let numThree = numOne + numTwo;
        arr.push(numThree);
        numOne = numTwo;
        numTwo = numThree;
        check++;
        if (check >= num) {
            break;
        }
    }
    let result: number = 0;
    arr.forEach(function (value) {
        result += value;
    })
    console.log(arr);
    console.log(result);
}
sumFibonacci(7);


