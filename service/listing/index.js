import { listingRepository } from "../../data/repository"

export const save = async (data) =>{

    try{
        await listingRepository.save(data)
    }
    catch(error){
        throw new Error("Não foi possivel Salvar!")
    }
}


export const findAll = async () =>{

    try{
        return await listingRepository.findAll()
    }
    catch(error){
        throw new Error("Não foi possivel listar Todos!")
    }
}

export const findById = async (listingTypeId) =>{

    try{
        return await listingRepository.findById(listingTypeId)
        
    }
    catch(error){
        throw new Error("Não foi possivel listar!")
    }
}


export const ratingById = async (data) =>{

    try{
        return await listingRepository.ratingById(listingId)
    }
    catch(error){
        throw new Error("Não foi possivel listar!")
    }
}