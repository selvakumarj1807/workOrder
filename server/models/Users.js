const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    year: String,
    make: String,
    model: String,
    contactName: String,
    email: String,
    mobileNumber: String,
    postalCode: String,
    shippingMethod: String,
    state: String,
    additionalNotes: String
})

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel