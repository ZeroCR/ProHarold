const express = require('express');
// const rutas = require('./src/rutas')
const user = require('./src/user');
//const UtilsController = require('./src/UtilsController');
// const client = require('./src/client')
// const pets = require('./src/pets')
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hola, bienvenidos a myPetShop'));

user(app);
//UtilsController(app);
// client(app);
// pets(app);

app.listen(port, () => console.log(`myPetShop app listening on port ${port}!`));