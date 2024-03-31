const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

mongoose.connect('mongodb://127.0.0.1:27017/example', {}).then(res => console.log('connected to DB successfullly'))

app.listen(8000, () => {console.log('Connected to port 8000')})

