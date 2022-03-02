const mongoose= require('mongoose')
module.exports = mongoose.model("locations",new mongoose.Schema({
    name: String,
    img: String,
}))