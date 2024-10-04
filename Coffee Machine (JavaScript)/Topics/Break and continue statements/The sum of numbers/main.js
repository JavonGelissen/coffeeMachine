function sum(numbers) {
    // write your code here
    let sumArray = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            break;
        }
        else  {
            sumArray += numbers[i];
        }
    }
    return(sumArray);
}

