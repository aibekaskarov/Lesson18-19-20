//1 
let number = prompt("Введите число: ");

if (number % 2 == 0) {
    console.log("Число", number, "является четным.");
} else {
    console.log("Число", number, "является нечетным.");
}
//2
let num1 = prompt("Введите первое число: ");
let num2 = prompt("Введите второе число: ");
if (num1 > num2) {
    console.log("Наибольшее число из этих двух", num1) 
} else if (num1 < num2) {
    console.log("Наибольшее число из этих двух", num2)
} else {
    console.log("Два числа равны")
}
//3
let year = prompt("Введите год: ");
if ((year % 4) == 0) {
    console.log(year + " высокосный год")
} else {
    console.log(year + " не высокосный год")
}
//4
let variable = typeof(prompt("Введите любой символ:"));
if (typeof variable === String) {
    console.log("Переменная является строкой")
} else if (typeof variable === Number) {
    console.log("Переменная является числом")
} else {
    console.log("Переменная не является строкой и числом")
}
//5
let hour = prompt("Сколько у вас время");
if (hour >= 6 && hour <= 12) {
    console.log("Доброе утро")
} else if (hour >= 12 && hour <= 18) {
    console.log("Добрый день")
} else {
    console.log("Добрый ночи")
}
//6
let num4 = Number(prompt("Введите первое число: "));
let num5 = Number(prompt("Введите второе число: "));
let num6 = Number(prompt("Введите третье число: "));
if (num4 > (num5, num6)) {
         console.log(num4, " наибольшее число из этих трех чисел")
}else if (num5 > (num4, num6)) {
    console.log(num5, " наибольшее число из этих трех чисел")
} else {
    console.log(num6, " наибольшее число из этих трех чисел")
}
//7
let login1 = "Aibek6"
let password1 = 12345678
let login = prompt("Введите логин");
let password = prompt("Введите пороль");
if (login == login1 && password == password1) {
      console.log("Доступ разрешен")
} else {
    console.log("Доступ запрещен")
}
//8
let mouth = prompt("Введите число от 1 до 12: ");
if (mouth == 1) {
    console.log("Январь")
} else if (mouth == 2) {
    console.log("Февраль")
} else if (mouth == 3) {
    console.log("Март")
} else if (mouth == 4) {
    console.log("Апрель")
} else if (mouth == 5) {
    console.log("Май")
} else if (mouth == 6) {
    console.log("Июнь")
} else if (mouth == 7) {
    console.log("Июль")
} else if (mouth == 8) {
    console.log("Август")
} else if (mouth == 9) {
    console.log("Сентябрь")
} else if (mouth == 10) {
    console.log("Октябрь")
} else if (mouth == 11) {
    console.log("Ноябрь")
} else if (mouth == 12) {
    console.log("Декабрь")
} else {
    console.log("Неккоректное число")
}

//9
let ageCategory = prompt("Укажите свой возраст: ");
if (ageCategory >= 1 && ageCategory <= 12) {
    console.log("Детский возраст")
} else if (ageCategory >= 12 && ageCategory <= 18) {
    console.log("Подростковый возраст")
} else if (ageCategory >= 18 && ageCategory <= 65) {
    console.log("Взрослый возраст")
} else {
    console.log("Пожилой возраст")
}   

//10
let seasonOfTheYear = prompt("Укажите число от 1 до 12: ");
if (seasonOfTheYear == 1) {
    console.log("Зима")
} else if (seasonOfTheYear == 2) {
    console.log("Зима")
} else if (seasonOfTheYear == 3) {
    console.log("Весна")
} else if (seasonOfTheYear == 4) {
    console.log("Весна")
} else if (seasonOfTheYear == 5) {
    console.log("Весна")
} else if (seasonOfTheYear == 6) {
    console.log("Лета")
} else if (seasonOfTheYear == 7) {
    console.log("Лета")
} else if (seasonOfTheYear == 8) {
    console.log("Лета")
} else if (seasonOfTheYear == 9) {
    console.log("Осень")
} else if (seasonOfTheYear == 10) {
    console.log("Осень")
} else if (seasonOfTheYear == 11) {
    console.log("Осень")
} else if (seasonOfTheYear == 12) {
    console.log("Зима")
} else {
    console.log("Неккоректный месяц")
}