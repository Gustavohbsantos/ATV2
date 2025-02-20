function fibonacci(n) {
    let fibSequence = [0, 1]; 

    while (fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2] <= n) {
        let nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }

    return fibSequence;
}

let n = 100;
let result = fibonacci(n);
console.log(result);