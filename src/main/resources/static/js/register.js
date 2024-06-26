document.addEventListener('DOMContentLoaded', function() {
    fetchUsers();
});

function fetchUsers() {
    fetch('/api/users')
        .then(response => response.json())
        .then(data => {
            const userList = document.getElementById('user-list');
            userList.innerHTML = '<h2>Lista de Usuarios</h2>';
            data.forEach(user => {
                const userItem = document.createElement('div');
                userItem.className = 'user-item';
                userItem.innerHTML = `
                    <p>ID: ${user.id}</p>
                    <p>Nombre: ${user.nombre}</p>
                    <p>Edad: ${user.edad}</p>
                    <p>Password: ${user.password}</p>
                    <button onclick="deleteUser(${user.id})">Eliminar</button>
                `;
                userList.appendChild(userItem);
            });
        });
}

function createUser() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const password = document.getElementById('password').value;

    fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, edad, password })
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuario creado con éxito!');
        // Guardar datos del usuario en localStorage
        localStorage.setItem('userId', data.id);
        localStorage.setItem('userNombre', data.nombre);
        localStorage.setItem('userEdad', data.edad);
        localStorage.setItem('userPassword', data.password);

        // Redirigir a la página de perfil
        window.location.href = '/profile.html';
    })
    .catch(error => {
        alert('Error al crear el usuario. Inténtalo de nuevo.');
        console.error('There was a problem with the fetch operation:', error);
    });
}

function deleteUser(id) {
    fetch(`/api/users/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (response.ok) {
            alert('Usuario eliminado con éxito!');
            fetchUsers();
        } else {
            alert('Error al eliminar el usuario.');
        }
    });
}
