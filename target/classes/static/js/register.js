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
                    <p>Membresía: ${user.membresia}</p>
                    <button onclick="deleteUser(${user.id})">Eliminar</button>
                `;
                userList.appendChild(userItem);
            });
        });
}

function createUser() {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const membresia = document.getElementById('membresia').value;

    fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre, edad, membresia })
    })
    .then(response => response.json())
    .then(data => {
        alert('Usuario creado con éxito!');
        fetchUsers();
        window.location.href = '/profile.html?id=' + data.id; // Redirige a la página de perfil

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
