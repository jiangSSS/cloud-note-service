const mongoose = require("mongoose");
const Schema = mongoose.Schema

const article = new mongoose.Schema({
   title:String,
   content:String,
   contentText:String,
    author:{
        type:Schema.Types.ObjectId,
        ref:"user"
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:"category"
    },
    readNum:{
        type:Number,
        default:5
    },
    commonNum:{
        type:Number,
        default:6
    }
},{versionKey:false,timestamps:{createdAt:"createdTime",updatedAt:"updateTime"}})

module.exports = mongoose.model("article",article)