import {Trainer, Battle} from "./entities";

export interface ITrainerRepository {
    create(trainer: { name: string, gender: string }): Promise<Trainer>;

    findAll(): Promise<Trainer[]>
    find(trainerId : number) : Promise<Trainer>
}

export interface IBattleRepository {
    create(battle: { attackingTrainerId: number,
                     opposingTrainerId: number,
                     attackerPokemonLifePoints: number,
                     opponentPokemonLifePoints: number,
                     winner: number }): Promise<Battle>;

    findAll(): Promise<Battle[]>
    find(battleId: number):  Promise<Battle>
    findActiveBattleWithTrainerId(trainerId: number): Promise<Battle>
    update(battle: Battle): Promise<Battle>
}