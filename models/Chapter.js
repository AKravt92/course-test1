const { Mongoose } = require("mongoose");

const {Schema, model, Types} = require('mongoose');

const schema = new Schema ({
    name: {type: String, required: true, unique: true},
    number: {type: Number, default: 0},
    image: {type: String},
    text: {type: String, default: "text"},
    likes: {type: Number, default: 0},
    owner: {type: Types.ObjectId, ref: 'Story'}
})

module.exports = model('Chapter', schema)