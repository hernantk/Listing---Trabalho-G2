import { connectDbListing } from '../../db';
import ListingType from '../../models/listingType';

export const save = async(data) =>{

    const conListing = await connectDbListing()
    
    const listingType = new ListingType(data)

    
    await listingType.save()
    await conListing.disconnect()

}

export const findAll = async() =>{

    const conListing = await connectDbListing()
    const listingType = await ListingType.find()
    await conListing.disconnect()
    return listingType

}

export const findById = async(typeId) =>{
    const conListing = await connectDbListing()
    const listingType = await ListingType.findById(typeId)
    await conListing.disconnect()
    return listingType

}