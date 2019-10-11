import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config.js';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

import OlympicWinnersService from './olympicWinnersService';

const app = express();
app.use(webpackMiddleware(webpack(webpackConfig)));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.post('/olympicWinners', function (req, res) {
    OlympicWinnersService.getData(req.body, (rows, lastRow) => {
        if(rows.length === 0){
/*             console.log('Consulta vacia'); */
            res.json({rows: [             {
                "id": 2,
                "numero": "NO HAY RESULTADOS",
                "estado": "NO HAY RESULTADOS",
                "idusuario": "NO HAY RESULTADOS",
                "fecha": "0000-00-00T00:00:00.000Z",
                "preguntas": "NO HAY RESULTADOS",
                "idhistorico": "NO HAY RESULTADOS",
                "integrantes_familia": "NO HAY RESULTADOS",
                "direccion": "NO HAY RESULTADOS",
                "otro_servicio": "",
                "observaciones": "NO HAY RESULTADOS",
                "nombre": "NO HAY RESULTADOS",
                "usuario": "NO HAY RESULTADOS",
                "contrasena": "18271102",
                "idgrupo": 3,
                "activo": 2
            }] , lastRow: 1    }); }
        else{

            res.json({rows: rows, lastRow: lastRow});  
        }
           
    });
});

 app.get('/bundle.js',function(req,res){
    res.sendFile(path.join(__dirname, '../../', 'bundle.js'));
})
 
app.listen(8000, '127.0.0.1',() => {
    console.log('Started on localhost:8000');
});