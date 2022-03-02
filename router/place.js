const router = require("express").Router();
const Place = require("../model/place")

router.get('/',  async(req, res)=>{
    const places = await Place.find().populate("locationId")
    res.send(places)
})

router.get('/by_location/:id',  async(req, res)=>{
    const places = await Place.find({locationId:req.params.id})
    res.send(places)
})

router.get('/:id',  async(req, res)=>{
    const place = await Place.findById(req.params.id)
    res.send(place)
})


router.post('/', async(req, res)=>{
await Place.create(req.body)
    
    res.send("SAVE COMPLETED")
})

router.patch('/:id', async(req, res)=>{
    await Place.updateOne({_id:req.params.id},{
        $set:req.body
    })
    res.send("UPDATE COMPLETED")
})

router.delete('/:id', async(req, res)=>{
    await Place.deleteOne({_id:req.params.id},)
    res.send("DELETE COMPLETED")
})

module.exports = router

