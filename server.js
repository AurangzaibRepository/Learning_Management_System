const express = require('express');
const multer = require('multer');
const cors = require('cors');
var app = express();

var corsOptions = {
    origin: "http://127.0.0.1:3000"
  };
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(multer().none() );

const db = require('./app/models');
db.sequelize.sync();

// Routes
require('./app/routes/auth.routes')(app);

const port = process.env.PORT || 86
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});