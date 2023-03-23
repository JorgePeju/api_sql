const express = require('express');

const app=express();
const port= process.env.PORT || 3000;

app.use(express.static(__dirname+'public'));


app.use('/api/entries', require('./routers/apiEntriesRouter'));



app.listen(port, ()=>{

    console.log(`A la escucha del puerto ${port}`)
})