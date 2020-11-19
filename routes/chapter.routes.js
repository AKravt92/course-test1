const {Router} = require("express");
const {check, validationResult} = require('express-validator');
const Chapter = require('../models/Chapter');
const Story = require("../models/Story");
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
        const {name, text} = req.body
        
        const chapter = new Chapter({name, text})
        await chapter.save();
        res.status(201).json({message: 'Chapter created'})
    } catch (e) {
        res.status(200).json({message: 'ERROR'})
    }
})

router.get('/get/:id',
async(req,res)=>{
    try {
        console.log(req.params.id)
        const story = await Story.findById(req.params.id)
        console.log (story)
        console.log(story.chapter)
        const chapters = await Chapter.find({_id : {$in: story.chapter}})
        console.log(chapters)
        res.status(200).json({ chapters, message: 'Chapter created'})
    } catch (e) {
        res.status(200).json({message: 'ERROR'})
    }
})

module.exports = router

