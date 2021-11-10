import { listingService, listingTypeService } from "../service"

export const defineListingRoutes = (app) =>{

    app.post('/listing',async(req,res)=>{
        await listingService.save(req.body)
        res.json({})
    })

    app.get('/listing',async(req,res)=>{
        const listing = await listingService.findAll()
        res.json({users: listing})
    })

    app.get('/listing/:listingTypeId',async(req,res)=>{
        const listing = await listingService.findById(req.params.userId)
        res.json({user: listing})
    })

    app.get('/listing/rating',async(req,res)=>{
        const listing = await listingService.ratingById(req.body)
        res.json({user: listing})
    })
}

export const defineListingTypeRoutes = (app) =>{

    app.post('/listing',async(req,res)=>{
        await listingTypeService.save(req.body)
        res.json({})
    })

    app.get('/listing',async(req,res)=>{
        const listingType = await listingTypeService.findAll()
        res.json({users: listingType})
    })

}

