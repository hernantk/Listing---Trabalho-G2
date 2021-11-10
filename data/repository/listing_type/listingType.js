import connect from '../../db';
import User from '../../models/user';
import ListingType from './../../models/listingType';

export const save = async(data) =>{

    const con = await connect()
    const listingType = new ListingType(data)
    await listingType.save()
    await con.disconnect()

}

export const findAll = async() =>{

    const con = await connect()
    const listingType = await ListingType.find()
    await con.disconnect()
    return listingType

}