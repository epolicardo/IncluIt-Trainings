
//Nuestro primer EndPoint

//Glosario desconocido

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola')
})

app.listen(3000, () => {
    console.log("El servidor esta ejecutandose en el puerto 3000");

})