import express from "express";
import router from './routes/index.js';
import db from './config/db.js'



console.log(process.env.DB_HOST)

const app = express();

// Conectar la base de datos
db.authenticate()
    .then(() =>console.log('Base de datos conectada'))
    .catch(error => console.log(error));

// definir puerto

const port = process.env.PORT || 4000;
// Habilidar Pug
app.set('view engine','pug');

//Obtener el año actual
app.use((req, res, next) =>{
    const year = new Date();

    res.locals.actualYear = year.getFullYear(); 
    res.locals.nombreSitio = "Agencia de Viajes";
    next();
})

// Agregar Body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}));


//Definir la carpeta publica

app.use(express.static('public'));


app.use( '/', router);

app.get('/', (req, res) =>{
    res.send('Hola mundo')
});

app.listen(port, () =>{
    console.log(`El servidor esta funcionanado en el puerto ${port}`);
})