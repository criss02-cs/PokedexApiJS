import { MainClient, ResourceListRequest } from "../src";

describe("Ability test", () => {
    it("Pokemon list request", async () => {
        const client = new MainClient();
        const request: ResourceListRequest = {
            limit: 50,
            name: "aiuto",
            offset: 0,
        };
        const abilities = await client.ability.getResourceList(request);
        expect(abilities.length).toEqual(3);
    });
    it("Get Ability By Name", async () => {
        const client = new MainClient();
        const ability = await client.ability.getResourceByName("Aiutofuoco");
        expect(ability.descrizione).toEqual("Quando si è in difficoltà, potenzia le mosse di tipo Fuoco.");
    });
    it("Get Ability list by id", async () => {
        const client = new MainClient();
        const rattata = await client.pokemon.getResourceByName("rattata");
        const abilties = await client.ability.getListByIds(rattata.abilita.map(x => x.abilityId));
        expect(abilties.length).toEqual(3);
    })
})