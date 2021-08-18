const numberFromUser = +prompt("Please insert number");
if (typeof numberFromUser === "number" && !Number.isNaN(numberFromUser)) {
    if (numberFromUser % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
} else {
    console.log("Упс, кажется, вы ошиблись");
}

let x = "string";
const typeOfX = typeof x;
if (typeOfX === 'string') {
    console.log("X - строка");
} else if (typeOfX === 'number') {
    console.log("X - число");
} else if (typeOfX === 'boolean') {
    console.log("X - логическое");
} else {
    console.log("Тип x не определён");
}