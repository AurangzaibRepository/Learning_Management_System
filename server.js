const express = require('express');
const cors = require('cors');
var app = express();

var corsOptions = {
    origin: "http://127.0.0.1:3000"
  };
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({extended: true}));
const db = require('./app/models');
db.sequelize.sync();

app.get("/", (req, res) => {
    res.send('Working');
});

// Routes
require('./app/routes/tutorial.routes.js')(app);

const port = process.env.PORT || 86
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});