const express = require('express');
const multer = require('multer');
const cors = require('cors');
const dotenv = require('dotenv');
const requestHelper = require('./app/helpers/request.helper');
const app = express();

const corsOptions = {
  origin: 'http://127.0.0.1:3000',
};
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('uploads'));

// Multer configuration
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'uploads/profile');
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({storage: storage});
app.use(upload.single('profile_picture') );

// Models
const db = require('./app/models');
db.sequelize.sync();

// Routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

// Error handler middleware
app.use((error, req, res, next) => {
  return requestHelper.response(res, false, error.message);
});

dotenv.config();

const port = process.env.PORT || 86;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
