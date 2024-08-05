document.getElementById('create-account-button').addEventListener('click', function() {
    window.location.href = 'Cadastro.html';
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('login-error-message');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        errorMessage.style.display = 'none';
        localStorage.setItem('currentUser', username);
        window.location.href = '/Weather Now.html';
    } else {
        errorMessage.textContent = 'Nome de usuário ou senha incorretos.';
        errorMessage.style.display = 'block';
    }
});
