const router = require("express").Router();
const Location = require("../model/location")

router.get('/',  async(req, res)=>{
    const locations = await Location.find()
    res.send(locations)
})

router.get('/:id',  async(req, res)=>{
    const location = await Location.findById(req.params.id)
    res.send(location)
})

router.post('/', async(req, res)=>{
await Location.create(req.body)
    
    res.send("SAVE COMPLETED")
})

module.exports = router

