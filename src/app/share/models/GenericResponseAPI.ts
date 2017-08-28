import { Character } from './Character';

export abstract class GenericResponseAPI {
    code: number;
    status: string;
    copyright: string;
    attributionText: string;
    attributionHTML: string;
    etag: string;
}

export abstract class GenericDataAPI {
    offset: number;
    limit: number;
    total: number;
    count: number;
}

