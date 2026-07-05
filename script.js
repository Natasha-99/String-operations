// 1. Подсчет вхождений буквы в строке
function task1() {
    const str = document.getElementById('string1').value;
    const letter = document.getElementById('letter1').value;
    
    if (!str || !letter) {
        document.getElementById('result1').textContent = "Пожалуйста, введите строку и букву";
        return;
    }
    
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter) {
            count++;
        }
    }
    
    document.getElementById('result1').textContent = `Буква ${letter} встречается ${count} раз(а)`;
}

// 2. Подсчет слов в строке
function task2() {
    const str = document.getElementById('string2').value.trim();
    
    if (!str) {
        document.getElementById('result2').textContent = "Пожалуйста, введите строку";
        return;
    }
    
    const words = str.split(/\s+/);
    document.getElementById('result2').textContent = `Количество слов: ${words.length}`;
}

// 3. Проверка, является ли слово числом
function task3() {
    const str = document.getElementById('string3').value.trim();
    
    if (!str) {
        document.getElementById('result3').textContent = "Пожалуйста, введите слово";
        return;
    }
    
    const isNumber = !isNaN(str) && !isNaN(parseFloat(str));
    document.getElementById('result3').textContent = isNumber 
        ? `${str} - это число` 
        : `${str} - не число`;
}

// 4. Удаление всех пробелов
function task4() {
    const str = document.getElementById('string4').value;
    
    if (!str) {
        document.getElementById('result4').textContent = "Пожалуйста, введите строку";
        return;
    }
    
    const result = str.replace(/\s+/g, '');
    document.getElementById('result4').textContent = `Результат: ${result}`;
}

// 5. Длина самого короткого слова в предложении из 3 слов
function task5() {
    const str = document.getElementById('string5').value.trim();
    
    if (!str) {
        document.getElementById('result5').textContent = "Пожалуйста, введите 3 слова";
        return;
    }
    
    const words = str.split(/\s+/);
    if (words.length !== 3) {
        document.getElementById('result5').textContent = "Пожалуйста, введите ровно 3 слова";
        return;
    }
    
    const minLength = Math.min(...words.map(word => word.length));
    document.getElementById('result5').textContent = `Длина самого короткого слова: ${minLength}`;
}

// 6. Количество букв 'у' на четных позициях
function task6() {
    const str = document.getElementById('string6').value;
    
    if (!str) {
        document.getElementById('result6').textContent = "Пожалуйста, введите слово";
        return;
    }
    
    let count = 0;
    for (let i = 1; i < str.length; i += 2) {
        if (str[i].toLowerCase() === 'у') {
            count++;
        }
    }
    
    document.getElementById('result6').textContent = `Количество букв 'у' на четных позициях: ${count}`;
}

// 7. Замена букв 'о' на пробелы
function task7() {
    const str = document.getElementById('string7').value;
    
    if (!str) {
        document.getElementById('result7').textContent = "Пожалуйста, введите слово";
        return;
    }
    
    const result = str.replace(/о/g, ' ');
    document.getElementById('result7').textContent = `Результат: ${result}`;
}

// 8. Обмен четных позиций в словах
function task8() {
    const word1 = document.getElementById('string8a').value;
    const word2 = document.getElementById('string8b').value;
    
    if (!word1 || !word2) {
        document.getElementById('result8').textContent = "Пожалуйста, введите оба слова";
        return;
    }
    
    if (word1.length !== word2.length) {
        document.getElementById('result8').textContent = "Слова должны быть одинаковой длины";
        return;
    }
    
    let newWord1 = '';
    let newWord2 = '';
    for (let i = 0; i < word1.length; i++) {
        if (i % 2 === 1) { // Четные позиции (индексация с 0)
            newWord1 += word2[i];
            newWord2 += word1[i];
        } else {
            newWord1 += word1[i];
            newWord2 += word2[i];
        }
    }
    
    document.getElementById('result8').textContent = `Результат: "${newWord1}" и "${newWord2}"`;
}

// 9. Фамилия и инициалы
function task9() {
    const str = document.getElementById('string9').value.trim();
    
    if (!str) {
        document.getElementById('result9').textContent = "Пожалуйста, введите ФИО";
        return;
    }
    
    const parts = str.split(/\s+/);
    if (parts.length < 3) {
        document.getElementById('result9').textContent = "Пожалуйста, введите фамилию, имя и отчество";
        return;
    }
    
    const lastName = parts[0];
    const initials = `${parts[1][0]}.${parts[2][0]}.`;
    document.getElementById('result9').textContent = `Результат: ${lastName} ${initials}`;
}

// 10. Удаление букв, совпадающих с последней
function task10() {
    const str = document.getElementById('string10').value;
    
    if (!str) {
        document.getElementById('result10').textContent = "Пожалуйста, введите слово";
        return;
    }
    
    const lastChar = str[str.length - 1];
    const result = str.split('').filter(char => char !== lastChar).join('') + lastChar;
    document.getElementById('result10').textContent = `Результат: ${result}`;
}

// 11. Удаление букв из S, которые есть в V
function task11() {
    const s = document.getElementById('string11s').value;
    const v = document.getElementById('string11v').value;
    
    if (!s || !v) {
        document.getElementById('result11').textContent = "Пожалуйста, введите оба слова";
        return;
    }
    
    const vChars = new Set(v);
    const result = s.split('').filter(char => !vChars.has(char)).join('');
    document.getElementById('result11').textContent = `Результат: ${result}`;
}

// 12. Удаление каждой третьей буквы
function task12() {
    const str = document.getElementById('string12').value;
    
    if (!str) {
        document.getElementById('result12').textContent = "Пожалуйста, введите слово";
        return;
    }
    
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % 3 !== 0) {
            result += str[i];
        }
    }
    
    document.getElementById('result12').textContent = `Результат: ${result}`;
}