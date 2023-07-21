const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require("./config/serverConfig.js");



const setupAndStartServer = async () => {
    // create express server

    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));    

    app.listen(PORT, () => {
        console.log(`Server is runnig at  http://localhost:${PORT}`);
    });
}

setupAndStartServer();