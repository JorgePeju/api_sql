const express = require('express');

const app=express();
const port= process.env.PORT || 3000;

app.use(express.static(__dirname+'public'));

//Para parsear // traducir
app.use(express.json());

// traducir para POSTMAN
app.use(express.urlencoded({ extended: false }));

app.use('/api/authors', require('./routers/apiAuthorsRouters'));
app.use('/api/entries', require('./routers/apiEntriesRouter'));






app.listen(port, ()=>{

    console.log(`A la escucha del puerto ${port}`)
})