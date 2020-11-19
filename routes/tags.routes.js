const {Router} = require("express");
const Tag = require('../models/Tag')
const router = Router();

router.get('/get',
    async(req,res)=>{
        try {
            const tags = await Tag.find({})
                const newTags=[]
                tags.map((t)=>{
                    value = t.value
                    count = t.count
                    newTags.push({value: value, count:count})
                })                
            res.status(201).json({message: 'refresh', tags: newTags})
        } catch (e) {
            res.status(200).json({message: 'ERROR'})
        }
    })

module.exports = router