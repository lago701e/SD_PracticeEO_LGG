const http = require('http');
const url = require('url');
const bcrypt = require('bcrypt');
const { StringDecoder } = require('string_decoder');

const users = []; // Esta sería tu base de datos en un entorno de producción

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method.toLowerCase();
    const decoder = new StringDecoder('utf-8');
    let buffer = '';

    req.on('data', (chunk) => {
        buffer += decoder.write(chunk);
    });

    req.on('end', () => {
        buffer += decoder.end();

        // Ruta para registrar un nuevo usuario
        if (path === '/api/users' && method === 'post') {
            const data = JSON.parse(buffer);
            const { nombre, edad, password, email } = data;

            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ message: 'Error en la encriptación' }));
                    return;
                }
                const id = users.length + 1;
                const newUser = { id, nombre, edad, password: hashedPassword, email };
                users.push(newUser);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newUser));
            });

        // Ruta para iniciar sesión
        } else if (path === '/api/login' && method === 'post') {
            const data = JSON.parse(buffer);
            const { email, password } = data;
            const user = users.find(user => user.email === email);

            if (user) {
                bcrypt.compare(password, user.password, (err, result) => {
                    if (result) {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify(user));
                    } else {
                        res.writeHead(401, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({ message: 'Credenciales incorrectas' }));
                    }
                });
            } else {
                res.writeHead(401, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ message: 'Credenciales incorrectas' }));
            }

        // Ruta no encontrada
        } else {
            res.writeHead(404, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Ruta no encontrada' }));
        }
    });
});

server.listen(3000, () => {
    console.log('Servidor en ejecución en http://localhost:3000');
});
