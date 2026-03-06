// Показываем имя пользователя
const username = localStorage.getItem('currentUser') || 'Пользователь';
document.getElementById('username').textContent = username;

let selectedOption = null;

// Обработчик выбора ответа
document.getElementById('options').addEventListener('click', function (e) {
    if (e.target.classList.contains('option')) {
        // Снимаем выделение со всех вариантов
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('selected');
        });
        // Выделяем выбранный вариант
        e.target.classList.add('selected');
        selectedOption = e.target.getAttribute('data-value');
    }
});

// Переход на следующую страницу
document.getElementById('nextBtn').addEventListener('click', function () {
    if (selectedOption === null) {
        alert('Пожалуйста, выберите вариант ответа!');
        return;
    }
    // Сохраняем результат ответа (в реальном приложении можно сохранять больше данных)
    localStorage.setItem('quizAnswer', selectedOption);
    window.location.href = 'congratulations.html';
});