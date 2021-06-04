const mongoose = require("mongoose");
const { Schema } = mongoose;

const sessionSchema = new Schema({
    date: String,
    title: String,
    exercices: [Object]
});

const Session = mongoose.model("sessions", sessionSchema);

module.exports = Session;