const path = require('path');
const express = require('express');
const app = express();

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/html/views/index.html'));
});

// Example of a route to handle API calls
app.post('/api', function (req, res) {
    // Handle API call here
    res.send({ data: "Your response data" });
});

const port = 8081;
app.listen(port, function () {
    console.log(`Server running on localhost:${port}`);
});
