import bcrpt from "bcrypt"
import { listingRepository, listingTypeRepository } from "../../data/repository"

export const save = async (data) =>{

    try{
        await listingTypeRepository.save(data)
    }
    catch(error){
        throw new Error("Não foi possivel Salvar!")
    }
}


export const findAll = async () =>{

    try{
        return await listingTypeRepository.findAll()
    }
    catch(error){
        throw new Error("Não foi possivel listar Todos!")
    }
}
