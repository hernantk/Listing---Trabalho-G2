import { connectDbUsers } from '../../db';
import User from '../../models/user';


export const findById = async(userId) =>{

    const con = await connectDbUsers()
    const user = await User.findById(userId)
    await con.disconnect()
    return user

}