function display_even_odd(num) {

    for (let i = 0; i < num; i++) {
        
        // element is even
        if (i % 2 === 0) {
            console.log(`${i} is even`);
        }

        // element is odd
        else if (i % 2 === 1) {
            console.log(`${i} is odd`);
        }
    }

    return `\nYour input number was: ${num}`;
}

console.log(display_even_odd(10));

/*
0 is even
1 is odd
2 is even
3 is odd
4 is even
5 is odd
6 is even
7 is odd
8 is even
9 is odd

Your input number was: 10
*/