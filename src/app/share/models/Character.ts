import { AppareanceComics, AppareanceEvents, AppareanceSeries, AppareanceStories } from './Appearance';
import { Urls } from './Urls';
import { GenericResponseAPI, GenericDataAPI } from './GenericResponseAPI';


export class Character {
    id: number;
    name: string;
    description: string;
    modified: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    resourceURI: string;
    comics: AppareanceComics;
    series: AppareanceSeries;
    stories: AppareanceStories;
    events: AppareanceEvents;
    urls: Urls[];
}


export class CharacterListData extends GenericDataAPI {
    results: Character[];
}

export class CharacterListResponseAPI extends GenericResponseAPI {
    data: CharacterListData;
}
