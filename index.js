'use strict';

const express = require('express')
const skills = require('./skills.js')
console.log(skills)
const hostname = '127.0.0.1';
const port = 3000;
const app = express()

app.get('/', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');

    const str = skills
        .map((e) => [e[0].replace(/ /g, '&nbsp'), e[1]])
        .map((i) => `<span style="font-size: ${i[1]*2}pt; ">${i[0]}</span>`)
        .join(", ")
    response.write(`<html lang="en"><body><div style="font-family: 'Helvetica Neue',serif">${str}</div></body></html>`);
    response.end();

})

app.listen(port, () => console.log(`Example app listening at http://${hostname}:${port}`))
