function login() {
  var username = document.getElementById('login-username').value;
  var password = document.getElementById('login-password').value;

  // Validación básica
  if (username.trim() === '' || password.trim() === '') {
    alert('Por favor, ingresa un nombre de usuario y una contraseña');
    return;
  }

  // Aquí puedes realizar la validación y autenticación del usuario
  // utilizando los datos ingresados en los campos de inicio de sesión

  // Ejemplo de validación básica
  if (username === 'usuario' && password === 'contraseña') {
    alert('Inicio de sesión exitoso');
    // Redirigir a la página principal, por ejemplo:
    // window.location.href = 'home.html';
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
}

function register() {
  var username = document.getElementById('register-username').value;
  var password = document.getElementById('register-password').value;
  var email = document.getElementById('register-email').value;

  // Validación básica
  if (username.trim() === '' || password.trim() === '' || email.trim() === '') {
    alert('Por favor, completa todos los campos del formulario de registro');
    return;
  }

  // Aquí puedes realizar la validación y registro del nuevo usuario
  // utilizando los datos ingresados en los campos de registro

  // Ejemplo de validación básica
  if (username === 'usuario' && password === 'contraseña') {
    alert('Registro exitoso');
    // Limpiar los campos del formulario de registro
    document.getElementById('register-username').value = '';
    document.getElementById('register-password').value = '';
    document.getElementById('register-email').value = '';
  } else {
    alert('Error al registrar el usuario');
  }
}