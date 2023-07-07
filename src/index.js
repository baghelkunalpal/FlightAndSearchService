const express = require('express');

const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const setupAndStartServer = async () =>{
    // create the express object

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended:true}));
    const PORT = 3000;

    app.listen(PORT, ()=>{
        console.log(`server stated at ${PORT}`);
        // console.log(process.env);
    });
}
setupAndStartServer();