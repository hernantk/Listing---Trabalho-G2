import mongoose from "mongoose"


const listingSchema = mongoose.Schema({

    title:String,
    description:String,
    price:Number,
    listingTypeId: mongoose.Types.ObjectId,
    userId: mongoose.Types.ObjectId,
    creationDate:Date,
    rating:Number,
    numberOfRatings:Number

})

const Listing = mongoose.model("listing",listingSchema)

export default Listing

