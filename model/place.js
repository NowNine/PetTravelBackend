const mongoose= require('mongoose')
module.exports = mongoose.model("place",new mongoose.Schema({
    name: String,
    locationId: {type:mongoose.Types.ObjectId,ref:"locations"},
    img: String,
    imgs: [String],
    detail: String,
    district: String
}))