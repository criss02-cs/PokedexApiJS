import axios from "axios";
import { ResourceListRequest } from "../dto";
import { RequestFactory, RequestType } from "../factory";
import { Move } from "../models";
import { IResourceService } from "./resource-service.client";
import { ENDPOINTS } from "../costants";

export class MoveClient implements IResourceService<Move, Move> {
    async getResourceList(request?: ResourceListRequest): Promise<Move[]> {
        if(!request) {
            request = RequestFactory.createRequest(RequestType.Move);
        }
        const response = await axios.post<Move[]>(`${ENDPOINTS.moves}getMovesList`, request);
        return response.data; 
    }

    async getResourceByName(name: string): Promise<Move> {
        if(!name) {
            throw new Error("Il nome non può essere vuoto");
        }
        const response = await axios.get<Move>(`${ENDPOINTS.moves}getByName/${name}`);
        return response.data;
    }

    async getListByIds(ids: string[]) {
        if(ids.length === 0) {
            throw new Error("La lista di id non può essere vuota");
        } 
        const response = await axios.post<Move[]>(`${ENDPOINTS.moves}getMovesByIdList`, ids);
        return response.data;
    }
}