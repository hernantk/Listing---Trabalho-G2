import { connectDbListing } from '../../db';
import Listing from '../../models/listing';
import mongoose  from 'mongoose';
import { listingTypeRepository } from '..';

export const save = async(data) =>{
    
    const listingType = await listingTypeRepository.findById(data.typeId)

    if(listingType!==null){
        const con = await connectDbListing()
        const listing = new Listing(data)
        listing.creationDate = new Date()
        listing.numberOfRatings = 0
        listing.rating = 0
        await listing.save()
        await con.disconnect()
    }
}

export const findAll = async() =>{

    const con = await connectDbListing()

    
    const listings = await Listing.find()
    await con.disconnect()
    return listings

}


export const findByType= async(typeId) =>{

    const con = await connectDbListing()
    const listings = await Listing.where({typeId:mongoose.Types.ObjectId(typeId)})
    await con.disconnect()
    return listings

}

export const ratingById= async(data) =>{

    const con = await connectDbListing()
    const listing = await Listing.findById(data.listingId)
    listing.rating += data.rating
    listing.numberOfRatings += 1
    await listing.save()
    await con.disconnect()

}