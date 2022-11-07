const mongoose=require('mongoose')
const mongoURI='mongodb://localhost:27017/blog';
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log('conected to mongo successfully')
    })
}
module.exports=connectToMongo;
