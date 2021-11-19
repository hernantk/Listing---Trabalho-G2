import mongoose from "mongoose"

const DATABASE_URL_LISTING = "mongodb://localhost:27017/db_listing"
const DATABASE_URL_USERS = "mongodb://localhost:27017/db_users"

export const connectDbListing = async() =>{
    return await mongoose.connect(DATABASE_URL_LISTING)
}

export const connectDbUsers = async() =>{
    return await mongoose.connect(DATABASE_URL_USERS)
}