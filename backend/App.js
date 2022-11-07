const express= require('express')
var cors = require('cors')

const app = express()
app.use(cors())
const connectToMongo=require('./db')
 connectToMongo()
const port = 5000;
app.use(express.json())
app.use('/api/artical',require('./routes/Blogs'))
app.use('/api/auth',require('./routes/Auth'))
app.get('/',(req,res)=>{
    res.send('hello word')
})
app.listen(port ,()=>{
    console.log(`listening on the port ${port}`)
})