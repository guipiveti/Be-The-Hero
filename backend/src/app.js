const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const {errors} = require ('celebrate');

const app = express();

app.use(cors());//Limita quem pode acessar o backend (www.piveti.com)
app.use(express.json());
app.use(routes);
app.use(errors());

module.exports=app;