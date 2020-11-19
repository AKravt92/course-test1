const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const path = require ('path')

const app = express()

app.use(express.json({extended: true}))

app.use(morgan('tiny'));
app.use('/api/chapter', require('./routes/chapter.routes'))
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/story', require('./routes/story.routes'))
app.use('/api/tags', require('./routes/tags.routes'))
app.use('/api/liststory', require('./routes/liststory.routes'))

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'client/build')))

    app.get('*', (req,res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}
const PORT = process.env.PORT||8080

async function start(){
    try {
        await mongoose.connect(config.get('mongoUri'),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`App listening on port ${PORT}!`))
    } catch (error) {
        console.log('Server error', error.message)
        process.exit(1)
        
    }
}

start()


