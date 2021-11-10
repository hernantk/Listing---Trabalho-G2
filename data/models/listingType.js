import mongoose from "mongoose"


const listingTypeSchema = mongoose.Schema({

    name:String

})

const ListingType = mongoose.model("listing-type",listingTypeSchema)

export default ListingType

