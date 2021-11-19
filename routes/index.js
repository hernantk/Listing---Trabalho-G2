import { listingService, listingTypeService } from "../service"

export const defineListingRoutes = (app) =>{

    app.post('/listing',async(req,res)=>{
        await listingService.save(req.body)
        res.json({})
    })

    app.get('/listing',async(req,res)=>{
        const listing = await listingService.findAll()
        res.json({listing: listing})
    })

    app.get('/listing/:typeId',async(req,res)=>{
        const listing = await listingService.findByType(req.params.typeId)
        res.json({listing: listing})
    })

    app.post('/listing/rating',async(req,res)=>{
        const rating = await listingService.ratingById(req.body)
        res.json({rating: rating})
    })
}

export const defineListingTypeRoutes = (app) =>{

    app.post('/listingType',async(req,res)=>{
        await listingTypeService.save(req.body)
        res.json({})
    })

    app.get('/listingType',async(req,res)=>{
        const listingType = await listingTypeService.findAll()
        res.json({users: listingType})
    })

}

