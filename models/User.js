const {Schema, model, Types} = require('mongoose')

const schema  = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    name: {type:String, required: true, default: 'Ivan'},
    DOB: {type: String, required: true, default: 'now'},
    sex: {type: String, required: true, default: 'human'},
    avatar: {type: String, required: true, default: 'true'},
    status: {type: String, required: true, default: 'user'},
    activ: {type: Boolean, required: true, default: false},
    story: [{ type: Types.ObjectId, ref: 'Story' }]
})

module.exports = model('User', schema)