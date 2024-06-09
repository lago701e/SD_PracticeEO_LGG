document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    loginUser();
});

function loginUser() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    })
    .then(response => {
        if (!response.ok) {
            if (response.status === 401) {
                throw new Error('Credenciales incorrectas');
            } else {
                throw new Error('Error en la red');
            }
        }
        return response.json();
    })
    .then(data => {
        // Guardar datos del usuario en localStorage
        localStorage.setItem('userId', data.id);
        localStorage.setItem('userNombre', data.nombre);
        localStorage.setItem('userEdad', data.edad);
        localStorage.setItem('userPassword', data.password);

        // Redirigir a la página de perfil
        window.location.href = '/profile.html';
    })
    .catch(error => {
        document.getElementById('login-error').innerText = error.message;
        console.error('There was a problem with the fetch operation:', error);
    });
}