const express = require('express');
const fs = require('fs');
const app = express();

const JWT_SECRET = 'mysecretjwt';  // ⚠️ hardcode JWT token

app.get('/readfile', (req, res) => {
    const file = req.query.file;
    fs.readFile(`/app/data/${file}`, 'utf8', (err, data) => {  // ⚠️ Path Traversal
        if (err) return res.status(500).send('Error reading file');
        res.send(data);
    });
});

app.get('/debug', (req, res) => {
    res.send(process.env);  // ⚠️ env exposure
});

app.listen(8080, () => console.log('Server started on port 8080'));
