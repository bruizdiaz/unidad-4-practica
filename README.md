# 🐉 Dragon Ball API Clone

Este proyecto es una réplica simple de la API oficial de Dragon Ball, construida con **Express.js**. Fue desarrollado como parte de un desafío académico para crear un servidor HTTP básico que devuelva información de 10 personajes de la franquicia.

## 🚀 Objetivo

Simular el comportamiento de la API original [dragonball-api.com](https://dragonball-api.com/api/characters) utilizando un servidor local y datos precargados.

## 🛠️ Tecnologías utilizadas

- Node.js
- Express.js
- ES Modules (`type: module` en `package.json`)

## 📁 Estructura del proyecto
```
/express
├── database.js # Contiene los 10 personajes.
├── app.js # Servidor Express con endpoints.
├── package.json Dependencias y demas.
└── package-lock.json
```
## 📦 Instalación y ejecución

1. Cloná este repositorio o descargá los archivos:
   ```bash
   git clone https://github.com/bruizdiaz/unidad-4-practica.git
   cd express
   ```
2. Instalá las dependencias:

   ```bash
   npm install express
   ```
3. Iniciá el servidor:

   ```bash
   npm run dev
   ```
4. Accedé desde tu navegador o herramienta como Postman:
   
   ```
   http://localhost:3000/api/characters – Lista completa de personajes.
   http://localhost:3000/api/characters/1 – Detalle de personaje por ID.
   ```
## 🔄 Endpoints disponibles
### GET /api/characters
Devuelve un objeto con una lista de 10 personajes:
   ```json
   {
  "items": [
    {
      "id": 1,
      "name": "Goku",
      "race": "Saiyan",
      "gender": "Male",
      ...
    },
    ...
  ]
   }
   ```
### GET /api/characters/:id
- Devuelve un personaje específico según su ID.

## ❌ Casos de error:
##### ID inválido (no numérico):
   ```json
{
  "message": "Invalid parameter: ID must be a number",
  "error": "Bad Request",
  "statusCode": 400
}
   ```
##### ID inexistente:
   ```json
{
  "message": "Character ID not found",
  "error": "Bad Request",
  "statusCode": 400
}
   ```
##### Ruta no existente:
   ```json

{
  "message": "No such file or directory'",
  "error": "Not Found",
  "statusCode": 404
}
   ```
# 🤓 Waibi | Mateo Ruiz Diaz.
```
Estudiante de la Tecnicatura Superior en Desarrollo de Software Multiplataforma.
```
