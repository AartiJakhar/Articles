const express = require('express')
const router =express.Router();
const Blog = require('../modals/Blog')

router.get('/fetchallartical',async(req,res)=>{
    try {
        const articals = await Blog.find()
        res.json(articals);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
})

router.get('/myartical/:id',async(req,res)=>{
    try {
        const articals = await Blog.findById(req.params.id)
        res.json(articals);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
})
router.post('/searchartical',async(req,res)=>{
    try {
        const articals = await Blog.find({title:req.body.title})
        if(articals.length===0){
            res.status(404).send([{
                "_id": "404",
                "title": "NOT FOUND",
                "description": "CONTENT IS NOT AVAILABLE",
                "ImageUrl": "https://unsplash-assets.imgix.net/empty-states/photos.png",
                "date": "2022-09-29T10:30:36.317Z",
                "tag": "JavaScript",
                "author": "Aarti Jakhar",
                "content": "LONDON: Thousands of British holidaymakers are being forced to cancel holidays in India owing to a last-minute change in visa rules requiring them to present themselves in person at visa centres in the UK to apply for tourist visas, but there are no appointments available before their flights depart."
              }

            ])
        }
        else{
            // res.status(404).send(" avalable")
            res.json(articals);
         console.log(articals.length)
            // console.log(articals)
            
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal server error');
    }
})
///addartical
// router.post('/addnote',)


module.exports = router;