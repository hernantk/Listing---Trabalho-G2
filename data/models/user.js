import mongoose from "mongoose"


const userSchema = mongoose.Schema({

    _id:mongoose.Types.ObjectId,

})

const User = mongoose.model("User",userSchema)

export default User

