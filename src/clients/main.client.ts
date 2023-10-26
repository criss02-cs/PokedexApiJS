import { AbilityClient } from "./ability.client";
import { MoveClient } from "./move.client";
import { PokemonClient } from "./pokemon.client";

export class MainClient {
    public move: MoveClient;
    public ability: AbilityClient;
    public pokemon: PokemonClient;

    constructor() {
        this.move = new MoveClient();
        this.ability = new AbilityClient();
        this.pokemon = new PokemonClient();
    }
}