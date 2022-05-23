const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors')
const app = express();
app.use(bodyParser.json());
app.use(cors())













app.listen(5000, () => {
    console.log('Example app is listening on port 5000.')
    //console.log(dummy);
}
);