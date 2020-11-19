const {Router} = require("express");
const Story = require('../models/Story')
const router = Router();

router.get('/get/last',
    async(req,res)=>{
        try {
            const story = await Story.find({}).sort({'updatedAt':-1}).limit(9)
            res.status(201).json({message: 'refresh', listStory: story})
        } catch (e) {
            res.status(200).json({message: 'ERROR'})
        }
    })
    
    router.get('/get',
    async(req,res)=>{
        try {
            const story = await Story.find({})
            res.status(201).json({message: 'refresh', listStory: story})
        } catch (e) {
            res.status(200).json({message: 'ERROR'})
        }
    })
module.exports = router