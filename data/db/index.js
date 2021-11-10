import mongoose from "mongoose"

const DATABASE_URL = "mongodb://localhost:27017/db_listing"

const connect = async() =>{
    return await mongoose.connect(DATABASE_URL)
}

export default connect