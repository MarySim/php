let minValue = parseInt(prompt('Минимальное значение числа для игры','0')) || 0;
let maxValue = parseInt(prompt('Максимальное значение числа для игры','100')) || 100;
minValue = (minValue < -999) ? -999 : ((minValue > 999) ? 999 : minValue);
maxValue = (maxValue > 999) ? 999 : ((maxValue < -999) ? -999 : maxValue);

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

let answerNumber = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
answerField.innerText = getQuestionPhrase(answerNumber);

function getQuestionPhrase(number) {
    const textNumber = numberToText(number); 
    
    const phraseRandom = Math.round(Math.random() * 2);
    if (phraseRandom === 0) {
        return `Вы загадали число ${textNumber}?`;
    } else if (phraseRandom === 1) {
        return `Да это легко! Ты загадал ${textNumber}?`;
    } else {
        return `Наверное, это число ${textNumber}?`;
    }
}

function numberToText(number) {
    if (number === 0) return '0';

    let text = '';
    let isNegative = number < 0;
    let absNumber = Math.abs(number);

    const units = ['', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
    const tens = ['', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
    const hundreds = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

    let h = Math.floor(absNumber / 100);
    let rem = absNumber % 100;

    if (h > 0) {
        text += hundreds[h] + ' ';
    }
    if (rem > 0 && rem < 20) {
        text += units[rem] + ' ';
    } else if (rem >= 20) {
        let t = Math.floor(rem / 10);
        let u = rem % 10;
        text += tens[t] + ' ';
        if (u > 0) {
            text += units[u] + ' ';
        }
    }
    if (isNegative) {
        text = 'минус ' + text;
    }

    text = text.trim();

    if (text.length < 20) {
        return text;
    } else {
        return number.toString();
    }
}

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = parseInt(prompt('Минимальное значение числа для игры','0')) || 0;
    maxValue = parseInt(prompt('Максимальное значение числа для игры','100')) || 100;
    minValue = (minValue < -999) ? -999 : ((minValue > 999) ? 999 : minValue);
    maxValue = (maxValue > 999) ? 999 : ((maxValue < -999) ? -999 : maxValue);

    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

    orderNumber = 1;
    gameRun = true;
    answerNumber = Math.floor((minValue + maxValue) / 2);

    orderNumberField.innerText = orderNumber;
    answerField.innerText = getQuestionPhrase(answerNumber);
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getQuestionPhrase(answerNumber);
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round(Math.random() * 2);
        let answerPhrase = '';
        
        if (phraseRandom === 0) answerPhrase = 'Я всегда угадываю\n\u{1F60E}';
        else if (phraseRandom === 1) answerPhrase = 'Это было легко!\n\u{1F60E}';
        else answerPhrase = 'Победа за мной!\n\u{1F929}';
        
        answerField.innerText = answerPhrase;
        gameRun = false;
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = getQuestionPhrase(answerNumber);
        }
    }
})
