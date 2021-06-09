const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const path = require("path");
const keys = require('./config/key');

const app = express();
const PORT = process.env.PORT || 8080;

const routes = require('./routes/api');

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

// Data parsing
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Heroku deploy
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));

    //res.sendFile(path.join(__dirname, 'index.html'));
    res.sendFile(path.resolve(__dirname + '/client/build/index.html'));
}

// HTTP request logger
app.use(morgan("tiny"));

// Routes
app.use('/api', routes);

app.listen(PORT, console.log(`Server running on port ${PORT}`));