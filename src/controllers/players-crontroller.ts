import {Request, Response} from "express";
import * as service from "../services/players-service";
import { noContent } from "../utils/https-helper";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";

export const getPlayers = async (req: Request, res: Response) => {
    
    const HttpResponse = await service.getPlayerService();
    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};

export const getPlayersById= async (req: Request, res: Response) => {
    
    const id = parseInt(req.params.id);
    const HttpResponse = await service.getPlayerByIdSevice(id);

    res.status(HttpResponse.statusCode).json(HttpResponse.body);

};

export const postPlayer = async (req: Request, res: Response) => {

    const bodyValue = req.body;
    const HttpResponse = await service.createPlayerService(bodyValue);
    
    if(HttpResponse){
        res.status(HttpResponse.statusCode).json(HttpResponse.body);
    } else {
        const response = await noContent();
        res.status(response.statusCode).json(response.body)
    }
};

export const deletePlayer = async (req: Request, res: Response) => {

    const id = parseInt(req.params.id);
    const HttpResponse = await service.deletePlayerService(id);

    res.status(HttpResponse.statusCode).json(HttpResponse.body);
};


export const updatePlayer = async (req: Request, res: Response) => {  
    
    const id = parseInt(req.params.id);
    const bodyValue: StatisticsModel = req.body;

    
    
};
