const express = require('express');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const path = require('path');
const router = require('./router.js')
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/dist')))

app.use('/api', router);

app.listen(port, () => console.log(`----connected to server, listening on port ${port}----`))
