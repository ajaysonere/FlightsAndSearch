const express = require("express");
require("dotenv").config;
const setupAndStartServer = async () => {
    // create express server
    const app = express();
    app.listen(process.env.PORT, () => {
        console.log(`Server is runnig at  http://localhost:${process.env.PORT}`);
    });
}

setupAndStartServer();
