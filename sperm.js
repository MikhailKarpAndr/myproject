let words = ["Хуятина", "Хуебубала", "Эклермо", "Эклерчик", "Сперма", "Хуебобала", "Хуйлобес", "Анальный чумоход", "Спермоед", "Шпротик", "Эклерчик", "Яйценюх", "Быкострел", "Спермаеб", "Пиздацел", "Спермастрел", "Инцел", "Хуйцел", "Гавномес", "Пидармота", "Хуета", "Чмозавр", "Пукалек", "Лейкопуста", "Спермоебкин", "Хуйлобес", "Бубелькаке", "Дервашмейкер", "Черогобус", "Яйценюхус", "Членопопус", "Пердупелос", "Хуелбос", "Яйценюхиус", "Патао", "Вафлежуйкин", "Обрезмо", "Обрезбик", "Папип", "Аркаша", "Слоняра", "Инцел", "Мастурбек", "Эль Спермо", "Кукульмере", "Мастурбиньо"]; // массив слов

function generateWord() {
    var randomIndex = Math.floor(Math.random() * words.length); // получаем случайный индекс
    document.getElementById("word").innerHTML = words[randomIndex]; // выводим слово
}