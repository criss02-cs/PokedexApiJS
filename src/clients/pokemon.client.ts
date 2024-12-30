import axios from "axios";
import { ResourceListRequest, TypesListRequest } from "../dto";
import { RequestFactory, RequestType } from "../factory";
import { PokemonList, PokemonResource } from "../models";
import { IResourceService } from "./resource-service.client";
import { ENDPOINTS } from "../costants";

export class PokemonClient implements IResourceService<PokemonList, PokemonResource> {

    async getResourceList(request?: ResourceListRequest): Promise<PokemonList[]> {
        if(!request) {
            request = RequestFactory.createRequest(RequestType.Type);
        }
        const response = await axios.post<PokemonList[]>(`${ENDPOINTS.pokemon}getPokemonList`, request);
        return response.data;
    }

    async getResourceByName(name: string): Promise<PokemonResource> {
        if(!name) {
            throw new Error("Il nome non può essere vuoto");
        }
        const response = await axios.get<PokemonResource>(`${ENDPOINTS.pokemon}getByName/${name}`);
        return response.data;
    }

    async getPokemonByPokedexId(pokedexId: number): Promise<PokemonResource> {
        if(pokedexId === 0) {
            throw new Error("L\'id del pokedex deve essere maggiore di 0");
        }
        const response = await axios.get<PokemonResource>(`${ENDPOINTS.pokemon}getByPokedexId/${pokedexId}`);
        return response.data;
    }

    async getMaxPokemonNumber(): Promise<number> {
        const response = await axios.get<number>(`${ENDPOINTS.pokemon}getMaxPokemonNumber`);
        return response.data;
    }

}