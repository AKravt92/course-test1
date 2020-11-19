const {Schema, model, Types} = require('mongoose')

const schema = new Schema ({
    value: {type: String, required: true, default: 'Mordor'},
    count: {type: Number, required: true, default: 1},
})

module.exports = model('Tag', schema)