const mongoose = require("mongoose");
const { string } = require("zod");


mongoose.connect('mongodb+srv://admin:g0m69PlNPAxewLyG@cluster0.oagkc6v.mongodb.net/paytm');

const userSchema = new mongoose.Schema({
    username : String,
    password: String,
    firstName: String,
    lastName: String
});

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: Number
})

const Account = mongoose.model('Account', accountSchema);
const User = mongoose.model('User', userSchema);

module.exports = {
    User,
    Account
};