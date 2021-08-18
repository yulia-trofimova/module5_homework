switch (typeof x) {

    case "string":
        console.log("X - строка");
        break;

    case "number":
        console.log("X - число");
        break;

    case "boolean":
        console.log("X - логическое");
        break;

    default:
        console.log("Тип x не определён");
}