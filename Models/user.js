const { Schema, model } = require('mongoose');


const userSchema = new Schema({
    id: { type: Number },
    full_name: { type: String },
    gender: {type: String },
    age: {type: String},
    location: { type: String },
    interest: { type: String },
    job: {type: String },
    email: {type: String },
    avatar: {type: String },
}, { collection: 'users' });

const User = model('User', userSchema);

module.exports = User;
