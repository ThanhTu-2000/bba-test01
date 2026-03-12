function findPairsDivisibleBy17() {
    let count = 0;

    for (let i = 1; i <= 100; i++) {
        for (let j = 1; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                count++;
                console.log(`(${i}, ${j}) = ${i + j}`);
            }
        }
    }

    console.log(`Tổng cộng: ${count} cặp`);
}

findPairsDivisibleBy17();