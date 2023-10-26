import { Expose } from "class-transformer";
import { Resource } from "./resource.model";
import { Type } from "./type.model";

type MethodLearn = 'egg' | 'machine' | 'tutor' | 'level-up';

class Statistiche {
    /**
     * Punti vita del pokemon
     */
    hp: number;
    /**
     * Punti base dell'attacco del pokemon
     */
    attack: number;
    /**
     * Punti base dell'attacco speciale del pokemon
     */
    specialAttack: number;
    /**
     * Punti base della difesa del pokemon
     */
    specialDefense: number;
    /**
     * Punti base della velocità del pokemon
     */
    speed: number;
}

class AbilitaPokemon {
    abilityId: string;
    isHidden: boolean;
}

class MossaPokemon {
    moveId: string;
    method: MethodLearn;
    level: number;
}

export class PokemonList extends Resource {
    /**
     * Numero del pokedex nazionale del pokemon
     */
    pokedexId: number;
    /**
     * Categoria del pokemon
     */
    categoria: string;
    @Expose({ name: 'types'})
    typesId: string[];
    @Expose({ name: 'typesObject'})
    public get type() : Type[] {
        return this.typesId.map(x => new Type(x));
    }
    /**
     * Link dell'artwork del pokemon
     */
    artworkImage: string;
}

export class PokemonResource extends Resource {
    /**
     * Numero del pokedex nazionale del pokemon
     */
    pokedexId: number;
    /**
     * Categoria del pokemon
     */
    categoria: string;
    /**
     * Altezza del pokemon
     */
    height: number;
    /**
     * Peso del pokemon
     */
    weight: number;
    /**
     * Descrizione del pokedex del pokemon
     */
    pokedexDescription: string;
    /**
     * Statistiche del pokemon
     */
    @Expose({ name: 'stats'})
    statistiche: Statistiche;
    /**
     * Lista delle abilità del pokemon
     */
    abilita: AbilitaPokemon[];
    /**
     * Lista delle mosse apprendibili dal pokemon
     */
    moves: MossaPokemon[];
    @Expose({ name: 'types'})
    types: string[];
    
    @Expose({ name: 'typesObject'})
    public get type() : Type[] {
        return this.types.map(x => new Type(x));
    }
    /**
     * Link dell'artwork del pokemon
     */
    artworkImage: string;
}
