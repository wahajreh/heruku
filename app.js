
const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/api/books');
const parser = require('body-parser')
require('dotenv/config')

const app = express();

const routes = require('./routes/api/books');

// Connect Database
connectDB();

app.use(parser.json())

app.use('/test', routes);

// app.get('/', (req, res) => res.send('test world!'));

// app.get('/', );

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`)); 