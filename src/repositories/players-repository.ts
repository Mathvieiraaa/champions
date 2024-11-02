import { promises } from "dns";
import { response } from "express";
import { PlayerModel } from "../models/player-model";
import { StatisticsModel } from "../models/statistics-model";
 

const database: PlayerModel[] = [
    {
        id: 1,
        name: "Lionel Messi",
        club: "Inter Miami CF",
        nationality: "Argentina",
        position: "Forward",
        statistics: {
          Overall: 93,
          Pace: 85,
          Shooting: 94,
          Passing: 91,
          Dribbling: 95,
          Defending: 38,
          Physical: 65
        }
      },
      {
        id: 2,
        name: "Cristiano Ronaldo",
        club: "Al Nassr",
        nationality: "Portugal",
        position: "Forward",
        statistics: {
          Overall: 91,
          Pace: 87,
          Shooting: 93,
          Passing: 82,
          Dribbling: 88,
          Defending: 35,
          Physical: 77
        }
      },
      {
        id: 3,
        name: "Robert Lewandowski",
        club: "FC Barcelona",
        nationality: "Poland",
        position: "Forward",
        statistics: {
          Overall: 91,
          Pace: 79,
          Shooting: 92,
          Passing: 78,
          Dribbling: 86,
          Defending: 44,
          Physical: 82
        }
      },
      {
        id: 4,
        name: "Kevin De Bruyne",
        club: "Manchester City",
        nationality: "Belgium",
        position: "Midfielder",
        statistics: {
          Overall: 91,
          Pace: 76,
          Shooting: 85,
          Passing: 93,
          Dribbling: 87,
          Defending: 64,
          Physical: 74
        }
      },
      {
        id: 5,
        name: "Kylian Mbappé",
        club: "Paris Saint-Germain",
        nationality: "France",
        position: "Forward",
        statistics: {
          Overall: 91,
          Pace: 97,
          Shooting: 88,
          Passing: 80,
          Dribbling: 92,
          Defending: 36,
          Physical: 76
        }
      },
      {
        id: 6,
        name: "Neymar Jr.",
        club: "Paris Saint-Germain",
        nationality: "Brazil",
        position: "Forward",
        statistics: {
          Overall: 89,
          Pace: 91,
          Shooting: 85,
          Passing: 86,
          Dribbling: 94,
          Defending: 36,
          Physical: 61
        }
      },
      {
        id: 7,
        name: "Mohamed Salah",
        club: "Liverpool",
        nationality: "Egypt",
        position: "Forward",
        statistics: {
          Overall: 89,
          Pace: 91,
          Shooting: 87,
          Passing: 81,
          Dribbling: 90,
          Defending: 45,
          Physical: 74
        }
      },
      {
        id: 8,
        name: "Virgil van Dijk",
        club: "Liverpool",
        nationality: "Netherlands",
        position: "Defender",
        statistics: {
          Overall: 89,
          Pace: 78,
          Shooting: 60,
          Passing: 71,
          Dribbling: 72,
          Defending: 91,
          Physical: 86
        }
      },
      {
        id: 9,
        name: "Sadio Mané",
        club: "Bayern Munich",
        nationality: "Senegal",
        position: "Forward",
        statistics: {
          Overall: 89,
          Pace: 91,
          Shooting: 83,
          Passing: 80,
          Dribbling: 88,
          Defending: 44,
          Physical: 76
        }
      },
      {
        id: 10,
        name: "Karim Benzema",
        club: "Al-Ittihad",
        nationality: "France",
        position: "Forward",
        statistics: {
          Overall: 89,
          Pace: 76,
          Shooting: 88,
          Passing: 83,
          Dribbling: 87,
          Defending: 42,
          Physical: 78
        }
    }
];
    

export const findAllPlayers = async (): Promise<PlayerModel[]> => {
    return database;
};

export const filePlayersById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find((player) => player.id === id); 
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
}

export const deleteOnePlayer = async (id: number) => {

  const index = database.findIndex((p) => p.id === id);

  if(index !== -1) {
    database.slice(index, 1);
  };
};

export const findAndModifyPlayer = async (id: number, statistics: StatisticsModel): Promise<PlayerModel> => { 
  const playerIndex = database.findIndex( (p) => p.id === id);

  if(playerIndex !== -1){
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
}
