import { MainClient, Type, TypesListRequest } from '../src';
describe("Pokemon test", () => {
    it("Pokemon list request", async () => {
        const client = new MainClient();
        const request: TypesListRequest = {
            limit: 50,
            name: "chu",
            offset: 0,
            types: [Type.Elettro.id]
        };
        const pokemons = await client.pokemon.getResourceList(request);
        expect(pokemons.length).toEqual(3);
    });
    it("Get Pokemon By Name", async () => {
        const client = new MainClient();
        const pokemon = await client.pokemon.getResourceByName("cyndaquil");
        expect(pokemon.name).toEqual("Cyndaquil");
    });
    it("Get Pokemon By Pokedex Id", async () => {
        const client = new MainClient();
        const pokemon = await client.pokemon.getPokemonByPokedexId(1000);
        expect(pokemon.name).toEqual("Gholdengo");
    })
    
})