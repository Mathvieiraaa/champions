import { error } from "console";
import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as HttpResponse from "../utils/https-helper";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayerService = async () => {

    const data = await PlayerRepository.findAllPlayers();
    let response = null;

    if(data) {
        response = await HttpResponse.OK(data);
    } else { 
        response = await HttpResponse.noContent();
    }

    return response;
}

export const getPlayerByIdSevice = async (id: number) => {
    
    const data = await PlayerRepository.filePlayersById(id);
    let response = null;

   
    if(data) {
        response = await HttpResponse.OK(data);
    } else { 
        response = await HttpResponse.noContent();
    }

    return response;
}

export const createPlayerService = async (player: PlayerModel) => {

    let response = null;

    if(Object.keys(player).length !== 0){
       await PlayerRepository.insertPlayer(player);
       response = await HttpResponse.create();
    }else {
        response = await HttpResponse.badRequest();
    }

    return response;
}

export const deletePlayerService = async (id: number) => {  
    let response = null;
    await PlayerRepository.deleteOnePlayer(id);
    response = await HttpResponse.OK({message: "Deleted"});
    return response;
};

export const updatePlayerServer = async (id: number, statistics: StatisticsModel) => {  
  
    const data = await PlayerRepository.findAndModifyPlayer(id, statistics);
    const response = await HttpResponse.OK(data);
    return response;

};





