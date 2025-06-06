// Importa el framework Express para crear el servidor web
import express from 'express';
// Importa los datos de personajes desde el archivo database.js
import data from './database.js';

// Crea una instancia de la aplicación Express
const app = express();
// Define el puerto en el que se ejecutará el servidor
const port = 3000;

// Ruta para obtener todos los personajes
app.get('/api/character', (req, res) => {
	// Responde con el arreglo de personajes en formato JSON
	console.log('Obteniendo todos los personajes');
	res.json(data);
});

// Ruta para obtener un personaje por su ID
app.get('/api/character/:id', (req, res) => {
	const { id } = req.params;
	console.log(`Obteniendo personaje con ID: ${id}`);
	const character = data.find((char) => char.id === parseInt(id));
	if (!character) {
		return res.status(404).json({ error: 'Personaje no encontrado' });
	}
	res.json(character);
});

app.use((req, res) => {
	res.status(404).json({ error: 'Ruta no encontrada' });
});

app.listen(port, () => {
	console.log(`Servidor corriendo en el puerto ${port}`);
});
