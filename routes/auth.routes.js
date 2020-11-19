const {Router} = require("express");
const {check, validationResult} = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config')
const User = require('../models/User');
const router = Router();

router.post('/register',
[
    check('email', 'Enter correctly email').isEmail(),
    check('password', 'Enter your password min 1 simbol').isLength({min: 1})
], 

async(req,res)=>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data registration'
            })
        }
        
        const {email, password} = req.body
        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(400).json({
                message: 'User not Uniq'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        await user.save();

        res.status(201).json({message: 'User created'})
    } catch (e) {
        res.status(400).json({message: 'ERROR'})
    }
})

router.post('/login',
[
    check('email', 'Enter your email').normalizeEmail().isEmail(),
    check('password', 'Enter your password').exists()
], 
async(req,res)=>{
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data login'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if (!user) {
            return res.status(400).json({message: 'User not found'})
            
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Incorrect password'})           
        }

        const token = jwt.sign(
            {userId : user.id},
            config.get('jwtSecret'),
            {expiresIn: '1h'}
        )

        res.json({token, userId : user.id})
        
    } catch (e) {
        res.status(400).json({message: 'ERROR'})
    }
})



module.exports = router