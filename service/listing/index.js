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

export const findByType = async (typeId) =>{

    try{
        return await listingRepository.findByType(typeId)
        
    }
    catch(error){
        throw new Error("Não foi possivel listar!")
    }
}


export const ratingById = async (data) =>{

    try{
        return await listingRepository.ratingById(data)
    }
    catch(error){
        throw new Error("Não foi possivel Avaliar!")
    }
}