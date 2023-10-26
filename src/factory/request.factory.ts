import { MoveListRequest, ResourceListRequest, TypesListRequest } from "../dto";

export class RequestFactory {
    static createRequest(type: RequestType): ResourceListRequest {
        switch (type) {
            case RequestType.Move:
                return this.createMoveRequest();
            case RequestType.Resource:
                return this.createResourceRequest();
            case RequestType.Type:
                return this.createTypesRequest();
        }
    }

    private static createMoveRequest() {
        const request: MoveListRequest = {
            limit: 100,
            moveCategory: '',
            name: '',
            offset: 0,
            onlyMt: false,
            types: []
        };
        return request;
    }

    private static createTypesRequest() {
        const request: TypesListRequest = {
            limit: 100,
            name: '',
            offset: 0,
            types: []
        }
        return request;
    }

    private static createResourceRequest() {
        const request: ResourceListRequest = {
            limit: 100,
            offset: 0,
            name: ''
        };
        return request;
    }
}

export enum RequestType {
    Resource,
    Type,
    Move
}