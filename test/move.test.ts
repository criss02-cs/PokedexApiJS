import { MainClient, MoveListRequest, Type } from "../src";

describe("Move test", () => {
    it("Move list request", async () => {
        const client = new MainClient();
        const request: MoveListRequest = {
            limit: 50,
            name: "tuo",
            offset: 0,
            types: [Type.Elettro.id],
            moveCategory: 'Status',
            onlyMt: false
        };
        const moves = await client.move.getResourceList(request);
        expect(moves.length).toEqual(1);
    });
    it("Get Move By Name", async () => {
        const client = new MainClient();
        const move = await client.move.getResourceByName("lanciafiamme");
        expect(move.description).toEqual("Il bersaglio viene colpito da intense fiammate che possono anche scottarlo.");
    });
})