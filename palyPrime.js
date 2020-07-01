function primes(arg) {
    let count = 0;
    let ourarr = [1, 3, 5];
    let next = 6;
    while (count < arg) {
        for (let i = 2; i < next; i++) {
            if (next % i == 0) { next++; } else {
                ourarr.push(next);

                count++;
            }
            next++;
        }

    }
    console.log('ourarr is', ourarr);
}

primes(26);