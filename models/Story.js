const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    name: {type: String},
    description:{type: String, default: 'Good story'},
    genre: {type: String},
    tags: [{type: String}],
    raiting: {type: Number, default: 1},
    comments: [{}],
    chapter: [{ type: Types.ObjectId, ref: 'Chapter' }],
    owner: {type: Types.ObjectId, ref: 'User'}
}, { timestamps: true })

module.exports = model('Story', schema)