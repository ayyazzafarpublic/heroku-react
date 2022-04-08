let express = require('express');


let app  = express();


app.use(express.static(__dirname+'/dist/angulartmp'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/angulartmp/index.html')
})

app.listen(80);