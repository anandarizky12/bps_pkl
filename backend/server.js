const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/routes');

const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/api', router);

const port = process.env.PORT || 5000;
const mongoURI = process.env.DB_URI;

//connect to mongoDB
mongoose.connect(mongoURI, {useNewUrlParser: true})
.then(() => app.listen(port, () => console.log(`Server started on ${port}`)))
.catch(err =>console.log(err));

