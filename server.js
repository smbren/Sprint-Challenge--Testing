const express = require('express');

const server = express();

const games = [];

server.get('/games', (req, res) => {
    res.json(games);
});

module.exports = server;