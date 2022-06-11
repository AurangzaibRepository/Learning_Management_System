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

// Multer configuration
var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
var upload = multer({storage: storage});
app.use(upload.single('profile_picture') );

// Models
const db = require('./app/models');
db.sequelize.sync();

// Routes
require('./app/routes/auth.routes')(app);

const port = process.env.PORT || 86
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});