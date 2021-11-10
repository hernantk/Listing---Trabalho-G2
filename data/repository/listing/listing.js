import connect from '../../db';
import Listing from '../../models/listing';

export const save = async(data) =>{

    const con = await connect()
    const listing = new Listing(data)
    await listing.save()
    await con.disconnect()

}

export const findAll = async() =>{

    const con = await connect()
    const listings = await Listing.find()
    await con.disconnect()
    return listings

}


export const findByType= async(listingType) =>{

    const con = await connect()
    const listings = await Listing.findById()
    await con.disconnect()
    return listings

}

export const ratingById= async(data) =>{

    const con = await connect()
    const listing = await Listing.findById(data.listingId)
    listing.rating = data.rating
    listing.numberOfRatings += 1
    await listing.save()
    await con.disconnect()

}