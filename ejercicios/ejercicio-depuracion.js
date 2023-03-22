function fibonacci(num) {
    let fib= [1, 1];
    for (let i = 2; i<num; i++) {
        fib[i] = fib[i-1] + fib[i -2];
    }

    return fib.slice(0, num);
}

console.log(fibonacci(6));
