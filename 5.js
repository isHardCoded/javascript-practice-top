// function sumOfTwoNumbers(a, b) {
//     return a + b
// }

// const result1 = sumOfTwoNumbers(2, 2)
// const result2 = sumOfTwoNumbers(10, 3)
// console.log(result1)
// console.log(result2)

// function showInfo(name = null, surname = "Пусто") {
//     return 
// }

// console.log(showInfo(20))

// console.log(helloTo1())

// function helloTo1() {
//     return 0
// }

// console.log(helloTo2)

// const helloTo2 = function(a, b) {
//     return a + b
// }

function createHTMLElement(tag) {
    const element = document.createElement(tag)
    element.id = id;
    element.innerText = value;

    return element
}

const pElement = createHTMLElement('p', 'Какой-то текст', 'text')
document.body.append(pElement)

const h1Element = createHTMLElement('h1', 'Заголовок', 'title')
document.body.append(h1Element)





const findMaxNumber = (array) => {

    let max = array[0]

    for (let i = 0; i < array.length; i++) {
        // нахождение максимального
        if (array[i] > max) {
            max = array[i]
        }
    }

    return max
}

const array = [1, 2, 3, 5, 2, 9, 105, 1000]

console.log(findMaxNumber(array))