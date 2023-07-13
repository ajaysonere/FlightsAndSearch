const express = require("express");
const {PORT} = require("./config/serverConfig.js");


const setupAndStartServer = async () => {
    // create express server
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server is runnig at  http://localhost:${PORT}`);
    });
}

setupAndStartServer();