import mongoose from "mongoose";
const {ObjectId} = mongoose.Schema

const productSchema = new mongoose.Schema({
    name: {
        type : String,
        trim: true,
        required: true,
        maxlength: 160
    }, 
    description: {
        type : String,
        trim: true,
        required: true,
        maxlength: 160
    }, 
    slug :{
        type: String,
        trim: true,
        required: true,
        maxlength: 2000
    },
    price : {
        type: Number,
        trim: true,
        required: true,
    },
    category: {
        type: ObjectId,
        ref: "Category",
        require: true,
    },
    quantity: {
        type: Number,
    },
    sold:{
        type: Number,
        default: 0,     
    },
    photo: {
        data: Buffer,
        contentType: String,

    }
})

export default mongoose.model("Product", productSchema)