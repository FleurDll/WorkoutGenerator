const mongoose = require("mongoose");
const { Schema } = mongoose;

const exerciceSchema = new Schema({
    name: String,
    duration: Number,
    series: Number,
    bodyPart: String,
    type: String
});

const Exercice = mongoose.model("exercices", exerciceSchema);

module.exports = Exercice;