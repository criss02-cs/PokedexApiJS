import axios from "axios";
import { ResourceListRequest } from "../dto";
import { Ability } from "../models";
import { IResourceService } from "./resource-service.client";
import { ENDPOINTS } from "../costants";
import { RequestFactory, RequestType } from "../factory";


export class AbilityClient implements IResourceService<Ability, Ability> {
    async getResourceList(request?: ResourceListRequest): Promise<Ability[]> {
        if(!request) {
            request = RequestFactory.createRequest(RequestType.Resource)
        }
        const response = await axios.post<Ability[]>(`${ENDPOINTS.abilita}getAbilityList`, request);
        return response.data;
    }

    async getResourceByName(name: string): Promise<Ability> {
        if(!name) {
            throw new Error("Il nome non può essere vuoto");
        }
        const response = await axios.get<Ability>(`${ENDPOINTS.abilita}getByName/${name}`);
        return response.data;
    }

}