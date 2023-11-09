const express = require('express')

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    return res.json('Hello vercel')
})

app.listen(3000,() => {
    console.log('Rodando');
})