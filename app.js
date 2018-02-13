const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const main = require('./public/js/main');
let app = express();
let port = 8080;
app.use(express.static('./public'));
app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname,'index.html'));
});

app.listen(port,(err) => {
    if(err) {
        
    }  else {
        console.log('server running at '+ port);
    }
});

main(app);
