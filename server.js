const express = require('express');
const path = require('path');

const app = express();

// Serve os arquivos estáticos da pasta dist (gerada pelo ng build)
app.use(express.static(__dirname + '/dist/KNOP-UI'));

app.get('/*', function(req,res) {    

   res.sendFile(path.join(__dirname+'/dist/KNOP-UI/index.html'));
});

// Inicia a aplicação pela porta configurada
//app.listen(process.env.PORT || 8080);
app.listen(process.env.PORT || 4200, ()=>{
    console.log('servidor executado');
  });