const express = require('express');
const path = require('path');
const http = require('http');
const app = express();


const {routeInit} = require("./routes/config_route");

//middleware
/*Jason information parsering definition*/
app.use(express.json());
/*Setting the public folder as a static folder where files can be put and the
client side will have access to it */
app.use(express.static(path.join(__dirname,"public")));

routeInit(app);

const server = http.createServer(app);

const port = process.env.PORT || "3000";
server.listen(port);