import { Urls } from './Urls';
import { AppareanceComics, AppareanceSeries, AppareanceStories, AppareanceEvents } from './Appearance';
import { Thumbnail } from './Thumbnail';
import { GenericResponseAPI, GenericDataAPI } from './GenericResponseAPI';

export class Creator {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    suffix: string;
    fullName: string;
    modified: string;
    thumbnail: Thumbnail;
    resourceURI: string;
    comics: AppareanceComics;
    series: AppareanceSeries;
    stories: AppareanceStories;
    events: AppareanceEvents;
    urls: Urls;
}

export class CreatorListData extends GenericDataAPI {
    results: Creator[];
}

export class CreatorListResponseAPI extends GenericResponseAPI {
    data: CreatorListData;
}