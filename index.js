import express from 'express';
import  {defineListingRoutes, defineListingTypeRoutes}  from './routes/index.js';

const app = express()

app.use(express.json())

defineListingRoutes(app)
defineListingTypeRoutes(app)

app.listen(8080,()=> console.log("Listing Api is up!"))
