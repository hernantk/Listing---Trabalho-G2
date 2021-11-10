import mongoose from "mongoose"


const listingSchema = mongoose.Schema({

    title:String,
    description:String,
    price:String,
    type:Object,
    user:String,
    creationDate:Date,
    rating:Number,
    numberOfRatings:Number

})

const Listing = mongoose.model("listing",listingSchema)

export default Listing

