export class ResourceListRequest {
    offset: number;
    limit: number;
    name: string;
}

export class TypesListRequest extends ResourceListRequest {
    types: string[];
}

export class MoveListRequest extends TypesListRequest {
    moveCategory: string;
    onlyMt: boolean;
}