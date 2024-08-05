document.getElementById('register-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const errorMessage = document.getElementById('register-error-message');

    // Checando usuário
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const usernameExists = users.some(user => user.username === username);
    const emailExists = users.some(user => user.email === email);

    if (usernameExists) {
        document.getElementById('username-error-message').textContent = 'O nome de usuário já existe.';
        document.getElementById('username-error-message').style.display = 'block';
    } else {
        document.getElementById('username-error-message').style.display = 'none';
    }

    if (emailExists) {
        document.getElementById('email-error-message').textContent = 'Este email já foi cadastrado.';
        document.getElementById('email-error-message').style.display = 'block';
    } else {
        document.getElementById('email-error-message').style.display = 'none';
    }

    if (firstName === '' || lastName === '' || username === '' || email === '' || password === '' || confirmPassword === '') {
        errorMessage.textContent = 'Por favor, preencha todos os campos.';
        errorMessage.style.display = 'block';
    } else if (password !== confirmPassword) {
        document.getElementById('password-match-error-message').textContent = 'As senhas inseridas são diferentes.';
        document.getElementById('password-match-error-message').style.display = 'block';
    } else if (!usernameExists && !emailExists) {
        // Salvando os dados do usuário
        const user = { firstName, lastName, username, email, password };
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
        errorMessage.style.display = 'none';
        document.getElementById('password-match-error-message').style.display = 'none';

        // Cadastro concluído
        Swal.fire({
            title: 'Cadastro concluído com sucesso!',
            text: 'Clique no botão abaixo para retornar à página de login.',
            icon: 'success',
            confirmButtonText: 'Ir para página de Login'
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.href = 'Login.html';
            }
        });
    }
});
