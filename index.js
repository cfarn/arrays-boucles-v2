const log = console.log

// 1 - Nombres pairs
// let total = 0
// for(let i = 11; i <47; i++) {
//     // log(i)
//     if(i % 2 === 0) {
//         log(i)
//     }
//     total += i
// }
// log(total)

// 2 - Nombres impairs
let total = 0
for(let i = 109; i <588; i++) {
    // log(i)
    if(i % 2 !== 0) {
        log(i)
    }
    total += i
}
log(total)
