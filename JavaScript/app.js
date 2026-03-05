'use strict';
document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            // В реальном приложении здесь была бы проверка логина/пароля
            localStorage.setItem('currentUser', username);
            window.location.href = 'quiz.html';
        });