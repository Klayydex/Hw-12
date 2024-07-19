let userName = prompt("What's your name", "Dmytro"),
    userAge = +prompt("How old are you?", "21"),
    fruit = prompt("What fruit do you like the most", "strawberry");
document.write(`Your name is ${userName}, you are ${userAge}, and your favorite fruit is ${fruit}`, '<br />');
console.log(`Your name is ${userName}, you are ${userAge}, and your favorite fruit is ${fruit}`);
//or
document.write(userName, userAge, fruit, '<br />')
console.log(userName, userAge, fruit);
// -------------------

let numb = prompt("Введите пятизначное число", "12345");

if (numb.length === 5 && !isNaN(numb)) {
    let digits = numb.split('').join('  ');
    document.write(digits);
    console.log(digits);
} else {
    alert('Введите пятизначное число правильно');
}
