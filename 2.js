// for
console.log("For")
for (let i = 0; i > -5; i--) { 
    console.log(i)
}

// while
console.log("While")

let i = 0;
while (i < 6) {
    console.log(i)
    i++
}

// do ... while
console.log("do ... while")
let j = 0

do {
    console.log(j)
    j++
} while (j < 6)

// For, break, continue
console.log("For break")
for (let i = 0; i < 10; i++) {
    if (i == 5) {
        break
    }
    console.log(i)
}

// continue
console.log("For continue")

let length = 10

for (let i = 0; i < length; i++) {
    if (i % 2 == 0) { // i % 2 return остаток
        continue
    }
    console.log(i)
}

// let num1 = prompt("Введите первое число: ") // "5"
// let num2 = prompt("Введите второе число: ")
// alert(num1 + num2)

let N = parseInt(prompt("Введите число N: "))

console.log("Task N")
for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
        console.log(i)
    }
}

let waterV = parseInt(prompt("Введите первоначальный объем воды в литрах: "))
        let days = 0

        while(waterV >= 10) {
            days++;
            console.log(days)
            waterV -= waterV * 0.1

        // waterV = waterV - waterV * 0.1
        // объем воды = объем воды - 10%
        }
        
        console.log(`Воды хватит на ${days} дней`)
