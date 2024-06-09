document.addEventListener('DOMContentLoaded', function() {
    fetchUserProfile();
});

function fetchUserProfile() {
    const userId = localStorage.getItem('userId');
    if (!userId) {
        document.getElementById('profile-error').innerText = 'No se encontró el usuario. Por favor, inicia sesión de nuevo.';
        return;
    }

    const nombre = localStorage.getItem('userNombre');
    const edad = localStorage.getItem('userEdad');
    const password = localStorage.getItem('userPassword');

    document.getElementById('nombre').innerText = nombre;
    document.getElementById('edad').innerText = edad;
    document.getElementById('password').innerText = password;
}
