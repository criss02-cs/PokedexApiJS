import { ResourceListRequest } from "../dto";

export interface IResourceService<TResourceList, TResource> {
    getResourceList(request?: ResourceListRequest): Promise<TResourceList[]>;
    getResourceByName(name: string): Promise<TResource>;
}