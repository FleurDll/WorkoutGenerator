const mongoose = require("mongoose");
const { Schema } = mongoose;

const adminSchema = new Schema({
    password: String
});

const AdminPassword = mongoose.model("admins", adminSchema);

module.exports = AdminPassword;
