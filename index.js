const express = require('express');
require('dotenv').config();
const port = process.env.PORT || 8080;
const app = express();
const myRoutes = require('./routes/myRoutes');
const errorRoute = require('./routes/errorRoute');
const bodyParser = require('body-parser');
const cors = require('cors');

//////////////////////middleware////////////////////
app.use(express.json());
app.use(express.static('views'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

//////////////////////routes////////////////////
app.use(myRoutes);


//////////////////////error middleware////////////////////
app.use(errorRoute);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})