import { Transform, Expose } from "class-transformer";
import { Resource } from "./resource.model";
import { Type } from "./type.model";
import TypeConverter from "../decorators/type.decorator";

type MoveCategory = 'Special' | 'Physical' | 'Status';

// @TypeConverter()
export class Move extends Resource {
    constructor() { 
        super(); 
    }
    /**
     * Descrizione della mossa
     */
    description: string;
    /**
     * Categoria della mossa
     * 1 - Special
     * 2 - Physical,
     * 3 - Status
     */
    category: MoveCategory;
    /**
     * Punti potenza della mossa
     */
    pp: number;
    /**
     * Punti potenza massimi della mossa
     */
    ppMax: number;
    /**
     * Potenza della mossa
     */
    power: number;
    /**
     * Precisione della mossa
     */
    accuracy: number;
    /**
     * Tipo della mossa
     */
    private typeId: string;
    
    public get type() : Type {
        return new Type(this.typeId);
    }
    
}