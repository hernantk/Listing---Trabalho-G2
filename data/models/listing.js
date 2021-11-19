import mongoose from "mongoose"


const listingSchema = mongoose.Schema({

    title:String,
    description:String,
    price:Number,
    typeId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
    creationDate:Date,
    rating:Number,
    numberOfRatings:Number

})

const Listing = mongoose.model("listing",listingSchema)

export default Listing

