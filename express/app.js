//-------------------IMPORTACIONES---------------------------------
import express from 'express';
import data from './database.js'; //Importamos los datos de la base de datos
//-------------------IMPORTACIONES---------------------------------

// --Declaraciones de variables y constantes--
const app = express(); // Crea una instancia de la aplicación Express
const port = 3000; // Define el puerto en el que se ejecutará el servidor
const items = data.items; // Obtiene los items de la base de datos

app.get('/api/characters', (req, res) => {
	// Responde con el arreglo de personajes en formato JSON
	console.log('Obteniendo todos los personajes');
	res.setHeader('Content-Type', 'application/json');
	res.json({ items });
});

app.get('/api/characters/:id', (req, res) => {
	// Obtiene un personaje específico por su ID
	console.log(`Obteniendo personaje con ID: ${req.params.id}`);

	//Verifica si el ID es un número válido
	const id = req.params.id;
	const idNumber = parseInt(id);

	// Si el ID no es un número, devuelve un error 400
	if (isNaN(idNumber)) {
		return res.status(400).json({
			message: 'Invalid parameter: ID must be a number',
			error: 'Bad Request',
			statusCode: 400,
		});
	}
	// Busca el personaje por su ID en el arreglo de items
	for (let i = 0; i < items.length; i++) {
		if (items[i].id === idNumber) {
			res.setHeader('Content-Type', 'application/json');
			return res.json(items[i]);
		}
	}
	// Si no se encuentra el personaje, devuelve un error 400
	return res.status(400).json({
		message: 'Character ID not found',
		error: 'Bad Request',
		statusCode: 400,
	});
});
// Maneja errores 404 para rutas no encontradas
app.use((req, res) => {
	res.status(404).json({
		message: "No such file or directory'",
		error: 'Not Found',
		statusCode: 404,
	});
});

app.listen(port, () => {
	console.log(`Servidor corriendo en Http://localhost:${port}`);
});

//Manera corta de obtener un personaje por ID
// app.get('/api/characters/:id', (req, res) => {
// 	const idNumber = parseInt(req.params.id);

// 	if (isNaN(idNumber)) {
// 		return res.status(400).json({
// 			message: 'Invalid parameter: ID must be a number',
// 			error: 'Bad Request',
// 			statusCode: 400,
// 		});
// 	}

// 	const character = items.find((char) => char.id === idNumber);

// 	if (!character) {
// 		return res.status(400).json({
// 			message: 'Character ID not found',
// 			error: 'Bad Request',
// 			statusCode: 400,
// 		});
// 	}

// 	res.setHeader('Content-Type', 'application/json');
// 	res.json(character);
// });
