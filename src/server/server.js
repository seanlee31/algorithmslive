const express = require('express');
const app = express();
const serverPort = 3000;

app.get('/', (req, res) => {
    res.send("Hello AlgorithmsLive!");
});

app.listen(serverPort);

console.log("[SYSTEM] AlgorithmsLive! Back-End Server Has Been Launched @ Port 3000!");