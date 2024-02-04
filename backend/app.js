const express = require('express');
const path = require('path');
const http = require('http');
const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexR = require('../backend/routes/index');
const usersR = require('../backend/routes/users');
const productsR = require('../backend/routes/products');

// Use routes
app.use('/', indexR);
app.use('/products', productsR);
app.use('/users', usersR);

// Connect to MongoDB
require('./db/mongoConnect');

const server = http.createServer(app);

const port = process.env.PORT || "3001";
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
