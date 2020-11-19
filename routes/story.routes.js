const {Router} = require("express");
const {check, validationResult} = require('express-validator');
const Story = require('../models/Story');
const Tag = require('../models/Tag')
const auth = require('../middleware/auth.middleware')
const router = Router();

router.post('/save',
[
    check('name', 'Enter name').isLength({min: 1}),
], 

async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
             return res.status(200).json({
                errors: errors.array(),
                message: 'Incorrect data'
            })
        }
        const {name, owner, genre, tags} = req.body
        const candidate = await Story.findOne({name, owner})

        if(candidate){  return (res.status(200).json({message: 'Name not unique'}))}

        const story = new Story({name, owner, genre, tags})
        await story.save();
        tags.map(async(t) =>{
            const Find = await Tag.findOne({value: t})
            if(Find){
                Find.save({count: Find.count++})
            }
            else{
            const tag = new Tag({value: t})
            tag.save()}
    }) 
        res.status(201).json({message: 'Story created'})
    } catch (e) {
        res.status(200).json({message: 'ERROR'})
    }
})

router.get('/:id',
async(req,res)=>{
    try {
        const link = await Story.find({tags: req.params.id})
            if(link){
                return res.status(200).json({link, message: 'found'})
            }
            else{
        res.status(201).json({message: 'not found'})}}
     catch (e) {
        res.status(200).json({message: 'ERROR'})
    }}
)

router.get('/story/:id',
async(req,res)=>{
    try {
        const link = await Story.findById(req.params.id)
        res.json(link)
      } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }}
)

module.exports = router
