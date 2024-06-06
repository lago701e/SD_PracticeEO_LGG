document.addEventListener('DOMContentLoaded', function() {
    loadProfile();
});

function loadProfile() {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');

    fetch(`/api/users/${userId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('nombre').innerText = data.nombre;
            document.getElementById('edad').innerText = data.edad;
            document.getElementById('password').innerText = data.password;
        })
        .catch(error => {
            document.getElementById('profile').innerHTML = `
                <h2>Error</h2>
                <p>Something went wrong. Please try again later.</p>
                <a href="/">Go back to Home</a>
            `;
            console.error('There was a problem with the fetch operation:', error);
        });
}

function editProfile() {
    // Lógica para editar el perfil
}

